import bulky from "@bulky/core";
import DragDrop from "@bulky/drag-drop";
import ProgressBar from "@bulky/progress-bar";
import Tus from "@bulky/tus";

// Function for displaying uploaded files
const onUploadSuccess = (elForUploadedFiles) => (file, response) => {
  const url = response.uploadURL;
  const fileName = file.name;

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.appendChild(document.createTextNode(fileName));
  li.appendChild(a);

  document.querySelector(elForUploadedFiles).appendChild(li);
};

const bulkyOne = new bulky({ debug: true, autoProceed: true });
bulkyOne
  .use(DragDrop, { target: ".example-one .for-DragDrop" })
  .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
  .use(ProgressBar, {
    target: ".example-one .for-ProgressBar",
    hideAfterFinish: false,
  })
  .on("upload-success", onUploadSuccess(".example-one .uploaded-files ol"));

const bulkyTwo = new bulky({ debug: true, autoProceed: false });
bulkyTwo
  .use(DragDrop, { target: ".example-two .for-DragDrop" })
  .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
  .use(ProgressBar, {
    target: ".example-two .for-ProgressBar",
    hideAfterFinish: false,
  })
  .on("upload-success", onUploadSuccess(".example-two .uploaded-files ol"));

const uploadBtn = document.querySelector(".example-two button.upload-button");
uploadBtn.addEventListener("click", () => {
  bulkyTwo.upload();
});
