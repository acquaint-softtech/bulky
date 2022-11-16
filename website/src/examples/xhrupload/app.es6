import bulky from "@bulky/core";
import FileInput from "@bulky/file-input";
import XHRUpload from "@bulky/xhr-upload";
import ProgressBar from "@bulky/progress-bar";

document.querySelector(".bulky").innerHTML = "";

const bulky = new bulky({ debug: true, autoProceed: true });
bulky.use(FileInput, {
  target: ".bulky",
});
bulky.use(ProgressBar, {
  target: ".bulkyProgressBar",
  hideAfterFinish: false,
});
bulky.use(XHRUpload, {
  endpoint: "https://xhr-server.herokuapp.com/upload",
  formData: true,
  fieldName: "files[]",
});

// And display uploaded files
bulky.on("upload-success", (file, response) => {
  const url = response.uploadURL;
  const fileName = file.name;

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.appendChild(document.createTextNode(fileName));
  li.appendChild(a);

  document.querySelector(".uploaded-files ol").appendChild(li);
});
