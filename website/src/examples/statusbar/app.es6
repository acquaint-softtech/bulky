import bulky from "@bulky/core";
import FileInput from "@bulky/file-input";
import StatusBar from "@bulky/status-bar";
import Tus from "@bulky/tus";

const bulkyOne = new bulky({ debug: true, autoProceed: true });
bulkyOne
  .use(FileInput, { target: ".bulkyInput", pretty: false })
  .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
  .use(StatusBar, {
    target: ".bulkyInput-Progress",
    hideUploadButton: true,
    hideAfterFinish: false,
  });
