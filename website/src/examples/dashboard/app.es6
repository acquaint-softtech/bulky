import bulky, { debugLogger } from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import GoogleDrive from "@bulky/google-drive";
import Dropbox from "@bulky/dropbox";
import Instagram from "@bulky/instagram";
import Facebook from "@bulky/facebook";
import OneDrive from "@bulky/onedrive";
import Zoom from "@bulky/zoom";
import Unsplash from "@bulky/unsplash";
import Box from "@bulky/box";
import ImageEditor from "@bulky/image-editor";
import Url from "@bulky/url";
import Webcam from "@bulky/webcam";
import Audio from "@bulky/audio";
import ScreenCapture from "@bulky/screen-capture";
import Tus from "@bulky/tus";
import DropTarget from "@bulky/drop-target";
import GoldenRetriever from "@bulky/golden-retriever";
import Compressor from "@bulky/compressor";
import localeList from "../locale_list.json";

import COMPANION from "../env.js";

const RTL_LOCALES = ["ar_SA", "fa_IR", "he_IL"];

if (typeof window !== "undefined" && typeof window.bulky === "undefined") {
  window.bulky = {
    locales: {},
  };
}

function bulkyInit() {
  if (window.bulky) {
    window.bulky.close();
  }

  const opts = window.bulkyOptions;

  const bulky = new bulky({
    logger: debugLogger,
  });

  bulky.use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" });

  bulky.on("complete", (result) => {
    console.log("successful files:");
    console.log(result.successful);
    console.log("failed files:");
    console.log(result.failed);
  });

  bulky.use(Dashboard, {
    trigger: ".bulkyModalOpenerBtn",
    target: opts.DashboardInline ? ".DashboardContainer" : "body",
    inline: opts.DashboardInline,
    height: 470,
    showProgressDetails: true,
    metaFields: [
      { id: "name", name: "Name", placeholder: "file name" },
      { id: "caption", name: "Caption", placeholder: "add description" },
    ],
  });

  window.bulky = bulky;
}

function bulkySetOptions() {
  const opts = window.bulkyOptions;

  const defaultNullRestrictions = {
    maxFileSize: null,
    minFileSize: null,
    maxNumberOfFiles: null,
    minNumberOfFiles: null,
    allowedFileTypes: null,
  };

  const restrictions = {
    maxFileSize: 1000000,
    maxNumberOfFiles: 3,
    minNumberOfFiles: 2,
    allowedFileTypes: ["image/*", "video/*"],
    requiredMetaFields: ["caption"],
  };

  window.bulky.setOptions({
    autoProceed: opts.autoProceed,
    restrictions: opts.restrictions ? restrictions : defaultNullRestrictions,
  });

  window.bulky.getPlugin("Dashboard").setOptions({
    note: opts.restrictions
      ? "Images and video only, 2–3 files, up to 1 MB"
      : "",
    theme: opts.darkMode ? "dark" : "light",
    disabled: opts.disabled,
  });

  const googleDriveInstance = window.bulky.getPlugin("GoogleDrive");
  if (opts.GoogleDrive && !googleDriveInstance) {
    window.bulky.use(GoogleDrive, {
      target: Dashboard,
      companionUrl: COMPANION,
    });
  }
  if (!opts.GoogleDrive && googleDriveInstance) {
    window.bulky.removePlugin(googleDriveInstance);
  }

  const dropboxInstance = window.bulky.getPlugin("Dropbox");
  if (opts.Dropbox && !dropboxInstance) {
    window.bulky.use(Dropbox, { target: Dashboard, companionUrl: COMPANION });
  }
  if (!opts.Dropbox && dropboxInstance) {
    window.bulky.removePlugin(dropboxInstance);
  }

  const instagramInstance = window.bulky.getPlugin("Instagram");
  if (opts.Instagram && !instagramInstance) {
    window.bulky.use(Instagram, { target: Dashboard, companionUrl: COMPANION });
  }
  if (!opts.Instagram && instagramInstance) {
    window.bulky.removePlugin(instagramInstance);
  }

  const urlInstance = window.bulky.getPlugin("Url");
  if (opts.Url && !urlInstance) {
    window.bulky.use(Url, { target: Dashboard, companionUrl: COMPANION });
  }
  if (!opts.Url && urlInstance) {
    window.bulky.removePlugin(urlInstance);
  }

  const facebookInstance = window.bulky.getPlugin("Facebook");
  if (opts.Facebook && !facebookInstance) {
    window.bulky.use(Facebook, { target: Dashboard, companionUrl: COMPANION });
  }
  if (!opts.Facebook && facebookInstance) {
    window.bulky.removePlugin(facebookInstance);
  }

  const oneDriveInstance = window.bulky.getPlugin("OneDrive");
  if (opts.OneDrive && !oneDriveInstance) {
    window.bulky.use(OneDrive, { target: Dashboard, companionUrl: COMPANION });
  }
  if (!opts.OneDrive && oneDriveInstance) {
    window.bulky.removePlugin(oneDriveInstance);
  }
  const unsplashInstance = window.bulky.getPlugin("Unsplash");
  if (opts.Unsplash && !unsplashInstance) {
    window.bulky.use(Unsplash, { target: Dashboard, companionUrl: COMPANION });
  }
  if (!opts.Unsplash && unsplashInstance) {
    window.bulky.removePlugin(unsplashInstance);
  }

  const zoomInstance = window.bulky.getPlugin("Zoom");
  if (opts.Zoom && !zoomInstance) {
    window.bulky.use(Zoom, {
      target: Dashboard,
      companionUrl: "https://intense-meadow-61813.herokuapp.com/",
    });
  }
  if (!opts.Zoom && zoomInstance) {
    window.bulky.removePlugin(zoomInstance);
  }

  const boxInstance = window.bulky.getPlugin("Box");
  if (opts.Box && !boxInstance) {
    window.bulky.use(Box, { target: Dashboard, companionUrl: COMPANION });
  }
  if (!opts.Box && boxInstance) {
    window.bulky.removePlugin(boxInstance);
  }

  const webcamInstance = window.bulky.getPlugin("Webcam");
  if (opts.Webcam && !webcamInstance) {
    window.bulky.use(Webcam, {
      target: Dashboard,
      showVideoSourceDropdown: true,
    });
  }
  if (!opts.Webcam && webcamInstance) {
    window.bulky.removePlugin(webcamInstance);
  }

  const audioInstance = window.bulky.getPlugin("Audio");
  if (opts.Audio && !audioInstance) {
    window.bulky.use(Audio, {
      target: Dashboard,
      showAudioSourceDropdown: true,
    });
  }
  if (!opts.Audio && audioInstance) {
    window.bulky.removePlugin(audioInstance);
  }

  const screenCaptureInstance = window.bulky.getPlugin("ScreenCapture");
  if (opts.ScreenCapture && !screenCaptureInstance) {
    window.bulky.use(ScreenCapture, { target: Dashboard });
  }
  if (!opts.ScreenCapture && screenCaptureInstance) {
    window.bulky.removePlugin(screenCaptureInstance);
  }

  const imageEditorInstance = window.bulky.getPlugin("ImageEditor");
  if (opts.imageEditor && !imageEditorInstance) {
    window.bulky.use(ImageEditor, { target: Dashboard });
  }
  if (!opts.imageEditor && imageEditorInstance) {
    window.bulky.removePlugin(imageEditorInstance);
  }

  const dropTargetInstance = window.bulky.getPlugin("DropTarget");
  if (opts.DropTarget && !dropTargetInstance) {
    window.bulky.use(DropTarget, { target: document.body });
  }
  if (!opts.DropTarget && dropTargetInstance) {
    window.bulky.removePlugin(dropTargetInstance);
  }

  const goldenRetrieverInstance = window.bulky.getPlugin("GoldenRetriever");
  if (opts.GoldenRetriever && !goldenRetrieverInstance) {
    window.bulky.use(GoldenRetriever);
  }
  if (!opts.GoldenRetriever && goldenRetrieverInstance) {
    window.bulky.removePlugin(goldenRetrieverInstance);
  }

  const compressorInstance = window.bulky.getPlugin("Compressor");
  if (opts.Compressor && !compressorInstance) {
    window.bulky.use(Compressor);
  }
  if (!opts.Compressor && compressorInstance) {
    window.bulky.removePlugin(compressorInstance);
  }
}

function whenLocaleAvailable(localeName, callback) {
  const interval = 100; // ms
  const loop = setInterval(() => {
    if (
      window.bulky &&
      window.bulky.locales &&
      window.bulky.locales[localeName]
    ) {
      clearInterval(loop);
      callback(window.bulky.locales[localeName]);
    }
  }, interval);
}

function loadLocaleFromCDN(localeName) {
  const head = document.getElementsByTagName("head")[0];
  const js = document.createElement("script");
  js.type = "text/javascript";
  js.src = `https://releases.transloadit.com/bulky/locales/v3.0.4/${localeName}.min.js`;

  head.appendChild(js);
}

function setLocale(localeName) {
  if (typeof window.bulky.locales[localeName] === "undefined") {
    loadLocaleFromCDN(localeName);
  }
  whenLocaleAvailable(localeName, (localeObj) => {
    const direction = RTL_LOCALES.indexOf(localeName) !== -1 ? "rtl" : "ltr";

    window.bulky.setOptions({
      locale: localeObj,
    });

    window.bulky.getPlugin("Dashboard").setOptions({
      direction,
    });
  });
}

function populateLocaleSelect() {
  const localeSelect = document.getElementById("localeList");

  Object.keys(localeList).forEach((localeName) => {
    if (localeName === "en_US") return;
    localeSelect.innerHTML += `<option value="${localeName}">${localeList[localeName]} — (${localeName})</option>`;
  });

  localeSelect.addEventListener("change", (event) => {
    const localeName = event.target.value;
    setLocale(localeName);
  });
}

window.bulkySetOptions = bulkySetOptions;
window.bulkyInit = bulkyInit;
window.bulkySetLocale = setLocale;

populateLocaleSelect();
bulkyInit();
bulkySetOptions();
