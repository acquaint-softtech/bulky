import bulky from "@bulky/core";
import StatusBar from "..";

{
  const bulky = new bulky();
  bulky.use(StatusBar, {
    target: "body",
    showProgressDetails: true,
    hideUploadButton: false,
    hideAfterFinish: false,
    hideRetryButton: false,
    hidePauseResumeButton: false,
    hideCancelButton: false,
    doneButtonHandler: () => {
      // something
    },
    locale: {
      strings: {
        uploading: "",
        upload: "",
        complete: "",
        uploadFailed: "",
        paused: "",
        retry: "",
        retryUpload: "",
        cancel: "",
        pause: "",
        resume: "",
        done: "",
        filesUploadedOfTotal: "",
        dataUploadedOfTotal: "",
        xTimeLeft: "",
        uploadXFiles: "",
        uploadXNewFiles: "",
        xMoreFilesAdded: "",
      },
    },
  });
}
