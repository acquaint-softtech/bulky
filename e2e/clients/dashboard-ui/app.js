import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import RemoteSources from "@bulky/remote-sources";
import Webcam from "@bulky/webcam";
import ScreenCapture from "@bulky/screen-capture";
import GoldenRetriever from "@bulky/golden-retriever";
import ImageEditor from "@bulky/image-editor";
import DropTarget from "@bulky/drop-target";
import Audio from "@bulky/audio";
import Compressor from "@bulky/compressor";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

const COMPANION_URL = "http://companion.bulky.io";

const bulky = new bulky()
  .use(Dashboard, { target: "#app", inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true });

// Keep this here to access bulky in tests
window.bulky = bulky;
