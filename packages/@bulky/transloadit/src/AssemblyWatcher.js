import Emitter from "component-emitter";

/**
 * Track completion of multiple assemblies.
 *
 * Emits 'assembly-complete' when an assembly completes.
 * Emits 'assembly-error' when an assembly fails.
 * Exposes a `.promise` property that resolves when all assemblies have
 * completed (or failed).
 */
class TransloaditAssemblyWatcher extends Emitter {
  #assemblyIDs;

  #reject;

  #remaining;

  #resolve;

  #bulky;

  constructor(bulky, assemblyIDs) {
    super();

    this.#bulky = bulky;
    this.#assemblyIDs = assemblyIDs;
    this.#remaining = assemblyIDs.length;

    this.promise = new Promise((resolve, reject) => {
      this.#resolve = resolve;
      this.#reject = reject;
    });

    this.#addListeners();
  }

  /**
   * Are we watching this assembly ID?
   */
  #watching(id) {
    return this.#assemblyIDs.indexOf(id) !== -1;
  }

  #onAssemblyComplete = (assembly) => {
    if (!this.#watching(assembly.assembly_id)) {
      return;
    }

    this.#bulky.log(
      `[Transloadit] AssemblyWatcher: Got Assembly finish ${assembly.assembly_id}`
    );

    this.emit("assembly-complete", assembly.assembly_id);

    this.#checkAllComplete();
  };

  #onAssemblyCancel = (assembly) => {
    if (!this.#watching(assembly.assembly_id)) {
      return;
    }

    this.#checkAllComplete();
  };

  #onAssemblyError = (assembly, error) => {
    if (!this.#watching(assembly.assembly_id)) {
      return;
    }

    this.#bulky.log(
      `[Transloadit] AssemblyWatcher: Got Assembly error ${assembly.assembly_id}`
    );
    this.#bulky.log(error);

    this.emit("assembly-error", assembly.assembly_id, error);

    this.#checkAllComplete();
  };

  #onImportError = (assembly, fileID, error) => {
    if (!this.#watching(assembly.assembly_id)) {
      return;
    }

    // Not sure if we should be doing something when it's just one file failing.
    // ATM, the only options are 1) ignoring or 2) failing the entire upload.
    // I think failing the upload is better than silently ignoring.
    // In the future we should maybe have a way to resolve uploads with some failures,
    // like returning an object with `{ successful, failed }` uploads.
    this.#onAssemblyError(assembly, error);
  };

  #checkAllComplete() {
    this.#remaining -= 1;
    if (this.#remaining === 0) {
      // We're done, these listeners can be removed
      this.#removeListeners();
      this.#resolve();
    }
  }

  #removeListeners() {
    this.#bulky.off("transloadit:complete", this.#onAssemblyComplete);
    this.#bulky.off("transloadit:assembly-cancel", this.#onAssemblyCancel);
    this.#bulky.off("transloadit:assembly-error", this.#onAssemblyError);
    this.#bulky.off("transloadit:import-error", this.#onImportError);
  }

  #addListeners() {
    this.#bulky.on("transloadit:complete", this.#onAssemblyComplete);
    this.#bulky.on("transloadit:assembly-cancel", this.#onAssemblyCancel);
    this.#bulky.on("transloadit:assembly-error", this.#onAssemblyError);
    this.#bulky.on("transloadit:import-error", this.#onImportError);
  }
}

export default TransloaditAssemblyWatcher;
