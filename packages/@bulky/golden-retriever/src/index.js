import throttle from "lodash.throttle";
import BasePlugin from "@bulky/core/lib/BasePlugin.js";
import ServiceWorkerStore from "./ServiceWorkerStore.js";
import IndexedDBStore from "./IndexedDBStore.js";
import MetaDataStore from "./MetaDataStore.js";

import packageJson from "../package.json";

/**
 * The GoldenRetriever plugin — restores selected files and resumes uploads
 * after a closed tab or a browser crash!
 *
 * Uses localStorage, IndexedDB and ServiceWorker to do its magic, read more:
 * https://bulky.io/blog/2017/07/golden-retriever/
 */
export default class GoldenRetriever extends BasePlugin {
  static VERSION = packageJson.version;

  constructor(bulky, opts) {
    super(bulky, opts);
    this.type = "debugger";
    this.id = this.opts.id || "GoldenRetriever";
    this.title = "Golden Retriever";

    const defaultOptions = {
      expires: 24 * 60 * 60 * 1000, // 24 hours
      serviceWorker: false,
    };

    this.opts = { ...defaultOptions, ...opts };

    this.MetaDataStore = new MetaDataStore({
      expires: this.opts.expires,
      storeName: bulky.getID(),
    });
    this.ServiceWorkerStore = null;
    if (this.opts.serviceWorker) {
      this.ServiceWorkerStore = new ServiceWorkerStore({
        storeName: bulky.getID(),
      });
    }
    this.IndexedDBStore = new IndexedDBStore({
      expires: this.opts.expires,
      ...(this.opts.indexedDB || {}),
      storeName: bulky.getID(),
    });

    this.saveFilesStateToLocalStorage = throttle(
      this.saveFilesStateToLocalStorage.bind(this),
      500,
      { leading: true, trailing: true }
    );
    this.restoreState = this.restoreState.bind(this);
    this.loadFileBlobsFromServiceWorker =
      this.loadFileBlobsFromServiceWorker.bind(this);
    this.loadFileBlobsFromIndexedDB =
      this.loadFileBlobsFromIndexedDB.bind(this);
    this.onBlobsLoaded = this.onBlobsLoaded.bind(this);
  }

  restoreState() {
    const savedState = this.MetaDataStore.load();
    if (savedState) {
      this.bulky.log(
        "[GoldenRetriever] Recovered some state from Local Storage"
      );
      this.bulky.setState({
        currentUploads: savedState.currentUploads || {},
        files: savedState.files || {},
        recoveredState: savedState,
      });
      this.savedPluginData = savedState.pluginData;
    }
  }

  /**
   * Get file objects that are currently waiting: they've been selected,
   * but aren't yet being uploaded.
   */
  getWaitingFiles() {
    const waitingFiles = {};

    this.bulky.getFiles().forEach((file) => {
      if (!file.progress || !file.progress.uploadStarted) {
        waitingFiles[file.id] = file;
      }
    });

    return waitingFiles;
  }

  /**
   * Get file objects that are currently being uploaded. If a file has finished
   * uploading, but the other files in the same batch have not, the finished
   * file is also returned.
   */
  getUploadingFiles() {
    const uploadingFiles = {};

    const { currentUploads } = this.bulky.getState();
    if (currentUploads) {
      const uploadIDs = Object.keys(currentUploads);
      uploadIDs.forEach((uploadID) => {
        const filesInUpload = currentUploads[uploadID].fileIDs;
        filesInUpload.forEach((fileID) => {
          uploadingFiles[fileID] = this.bulky.getFile(fileID);
        });
      });
    }

    return uploadingFiles;
  }

  saveFilesStateToLocalStorage() {
    const filesToSave = {
      ...this.getWaitingFiles(),
      ...this.getUploadingFiles(),
    };

    // If all files have been removed by the user, clear recovery state
    if (Object.keys(filesToSave).length === 0) {
      if (this.bulky.getState().recoveredState !== null) {
        this.bulky.setState({ recoveredState: null });
      }
      MetaDataStore.cleanup(this.bulky.opts.id);
      return;
    }

    // We dont’t need to store file.data on local files, because the actual blob will be restored later,
    // and we want to avoid having weird properties in the serialized object.
    // Also adding file.isRestored to all files, since they will be restored from local storage
    const filesToSaveWithoutData = {};
    Object.keys(filesToSave).forEach((file) => {
      if (filesToSave[file].isRemote) {
        filesToSaveWithoutData[file] = {
          ...filesToSave[file],
          isRestored: true,
        };
      } else {
        filesToSaveWithoutData[file] = {
          ...filesToSave[file],
          isRestored: true,
          data: null,
          preview: null,
        };
      }
    });

    const pluginData = {};
    // TODO Find a better way to do this?
    // Other plugins can attach a restore:get-data listener that receives this callback.
    // Plugins can then use this callback (sync) to provide data to be stored.
    this.bulky.emit("restore:get-data", (data) => {
      Object.assign(pluginData, data);
    });

    const { currentUploads } = this.bulky.getState();

    this.MetaDataStore.save({
      currentUploads,
      files: filesToSaveWithoutData,
      pluginData,
    });
  }

  loadFileBlobsFromServiceWorker() {
    if (!this.ServiceWorkerStore) {
      return Promise.resolve({});
    }

    return this.ServiceWorkerStore.list()
      .then((blobs) => {
        const numberOfFilesRecovered = Object.keys(blobs).length;

        if (numberOfFilesRecovered > 0) {
          this.bulky.log(
            `[GoldenRetriever] Successfully recovered ${numberOfFilesRecovered} blobs from Service Worker!`
          );
          return blobs;
        }
        this.bulky.log(
          "[GoldenRetriever] No blobs found in Service Worker, trying IndexedDB now..."
        );
        return {};
      })
      .catch((err) => {
        this.bulky.log(
          "[GoldenRetriever] Failed to recover blobs from Service Worker",
          "warning"
        );
        this.bulky.log(err);
        return {};
      });
  }

  loadFileBlobsFromIndexedDB() {
    return this.IndexedDBStore.list()
      .then((blobs) => {
        const numberOfFilesRecovered = Object.keys(blobs).length;

        if (numberOfFilesRecovered > 0) {
          this.bulky.log(
            `[GoldenRetriever] Successfully recovered ${numberOfFilesRecovered} blobs from IndexedDB!`
          );
          return blobs;
        }
        this.bulky.log("[GoldenRetriever] No blobs found in IndexedDB");
        return {};
      })
      .catch((err) => {
        this.bulky.log(
          "[GoldenRetriever] Failed to recover blobs from IndexedDB",
          "warning"
        );
        this.bulky.log(err);
        return {};
      });
  }

  onBlobsLoaded(blobs) {
    const obsoleteBlobs = [];
    const updatedFiles = { ...this.bulky.getState().files };

    // Loop through blobs that we can restore, add blobs to file objects
    Object.keys(blobs).forEach((fileID) => {
      const originalFile = this.bulky.getFile(fileID);
      if (!originalFile) {
        obsoleteBlobs.push(fileID);
        return;
      }

      const cachedData = blobs[fileID];

      const updatedFileData = {
        data: cachedData,
        isRestored: true,
        isGhost: false,
      };
      updatedFiles[fileID] = { ...originalFile, ...updatedFileData };
    });

    // Loop through files that we can’t restore fully — we only have meta, not blobs,
    // set .isGhost on them, also set isRestored to all files
    Object.keys(updatedFiles).forEach((fileID) => {
      if (updatedFiles[fileID].data === null) {
        updatedFiles[fileID] = {
          ...updatedFiles[fileID],
          isGhost: true,
        };
      }
    });

    this.bulky.setState({
      files: updatedFiles,
    });

    this.bulky.emit("restored", this.savedPluginData);

    if (obsoleteBlobs.length) {
      this.deleteBlobs(obsoleteBlobs)
        .then(() => {
          this.bulky.log(
            `[GoldenRetriever] Cleaned up ${obsoleteBlobs.length} old files`
          );
        })
        .catch((err) => {
          this.bulky.log(
            `[GoldenRetriever] Could not clean up ${obsoleteBlobs.length} old files`,
            "warning"
          );
          this.bulky.log(err);
        });
    }
  }

  deleteBlobs(fileIDs) {
    const promises = [];
    fileIDs.forEach((id) => {
      if (this.ServiceWorkerStore) {
        promises.push(this.ServiceWorkerStore.delete(id));
      }
      if (this.IndexedDBStore) {
        promises.push(this.IndexedDBStore.delete(id));
      }
    });
    return Promise.all(promises);
  }

  addBlobToStores = (file) => {
    if (file.isRemote) return;

    if (this.ServiceWorkerStore) {
      this.ServiceWorkerStore.put(file).catch((err) => {
        this.bulky.log("[GoldenRetriever] Could not store file", "warning");
        this.bulky.log(err);
      });
    }

    this.IndexedDBStore.put(file).catch((err) => {
      this.bulky.log("[GoldenRetriever] Could not store file", "warning");
      this.bulky.log(err);
    });
  };

  removeBlobFromStores = (file) => {
    if (this.ServiceWorkerStore) {
      this.ServiceWorkerStore.delete(file.id).catch((err) => {
        this.bulky.log("[GoldenRetriever] Failed to remove file", "warning");
        this.bulky.log(err);
      });
    }
    this.IndexedDBStore.delete(file.id).catch((err) => {
      this.bulky.log("[GoldenRetriever] Failed to remove file", "warning");
      this.bulky.log(err);
    });
  };

  replaceBlobInStores = (file) => {
    this.removeBlobFromStores(file);
    this.addBlobToStores(file);
  };

  handleRestoreConfirmed = () => {
    this.bulky.log("[GoldenRetriever] Restore confirmed, proceeding...");
    // start all uploads again when file blobs are restored
    const { currentUploads } = this.bulky.getState();
    if (currentUploads) {
      this.bulky.resumeAll();
      Object.keys(currentUploads).forEach((uploadId) => {
        this.bulky.restore(uploadId, currentUploads[uploadId]);
      });
    }
    this.bulky.setState({ recoveredState: null });
  };

  abortRestore = () => {
    this.bulky.log("[GoldenRetriever] Aborting restore...");

    const fileIDs = Object.keys(this.bulky.getState().files);
    this.deleteBlobs(fileIDs)
      .then(() => {
        this.bulky.log(`[GoldenRetriever] Removed ${fileIDs.length} files`);
      })
      .catch((err) => {
        this.bulky.log(
          `[GoldenRetriever] Could not remove ${fileIDs.length} files`,
          "warning"
        );
        this.bulky.log(err);
      });

    this.bulky.cancelAll();
    this.bulky.setState({ recoveredState: null });
    MetaDataStore.cleanup(this.bulky.opts.id);
  };

  handleComplete = ({ successful }) => {
    const fileIDs = successful.map((file) => file.id);
    this.deleteBlobs(fileIDs)
      .then(() => {
        this.bulky.log(
          `[GoldenRetriever] Removed ${successful.length} files that finished uploading`
        );
      })
      .catch((err) => {
        this.bulky.log(
          `[GoldenRetriever] Could not remove ${successful.length} files that finished uploading`,
          "warning"
        );
        this.bulky.log(err);
      });

    this.bulky.setState({ recoveredState: null });
    MetaDataStore.cleanup(this.bulky.opts.id);
  };

  restoreBlobs = () => {
    if (this.bulky.getFiles().length > 0) {
      Promise.all([
        this.loadFileBlobsFromServiceWorker(),
        this.loadFileBlobsFromIndexedDB(),
      ]).then((resultingArrayOfObjects) => {
        const blobs = {
          ...resultingArrayOfObjects[0],
          ...resultingArrayOfObjects[1],
        };
        this.onBlobsLoaded(blobs);
      });
    } else {
      this.bulky.log(
        "[GoldenRetriever] No files need to be loaded, only restoring processing state..."
      );
    }
  };

  install() {
    this.restoreState();
    this.restoreBlobs();

    this.bulky.on("file-added", this.addBlobToStores);
    this.bulky.on("file-editor:complete", this.replaceBlobInStores);
    this.bulky.on("file-removed", this.removeBlobFromStores);
    // TODO: the `state-update` is bad practise. It fires on any state change in bulky
    // or any state change in any of the plugins. We should to able to only listen
    // for the state changes we need, somehow.
    this.bulky.on("state-update", this.saveFilesStateToLocalStorage);
    this.bulky.on("restore-confirmed", this.handleRestoreConfirmed);
    this.bulky.on("restore-canceled", this.abortRestore);
    this.bulky.on("complete", this.handleComplete);
  }

  uninstall() {
    this.bulky.off("file-added", this.addBlobToStores);
    this.bulky.off("file-editor:complete", this.replaceBlobInStores);
    this.bulky.off("file-removed", this.removeBlobFromStores);
    this.bulky.off("state-update", this.saveFilesStateToLocalStorage);
    this.bulky.off("restore-confirmed", this.handleRestoreConfirmed);
    this.bulky.off("restore-canceled", this.abortRestore);
    this.bulky.off("complete", this.handleComplete);
  }
}
