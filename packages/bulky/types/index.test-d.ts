import * as bulky from "..";

(() => {
  const bulky = new bulky.bulky({ autoProceed: false });
  bulky.use(bulky.Dashboard, { trigger: "#up_load_file_01" });
  bulky.use(bulky.DragDrop, { target: "#ttt" });
  bulky.use(bulky.XHRUpload, {
    bundle: true,
    endpoint: "xxx",
    fieldName: "up_load_file",
  });
  bulky.on("upload-success", (fileCount, body, uploadurl) => {
    console.log(fileCount, body, uploadurl, ` files uploaded`);
  });
})();

(() => {
  new bulky.bulky({ autoProceed: false })
    .use(bulky.Dashboard, { trigger: "#select-files" })
    .use(bulky.GoogleDrive, {
      target: bulky.Dashboard,
      companionUrl: "https://companion.bulky.io",
    })
    .use(bulky.Instagram, {
      target: bulky.Dashboard,
      companionUrl: "https://companion.bulky.io",
    })
    .use(bulky.Webcam, { target: bulky.Dashboard })
    .use(bulky.ScreenCapture)
    .use(bulky.Tus, { endpoint: "https://tusd.tusdemo.net/files/" });

  bulky.on("complete", (result) => {
    console.log("Upload result:", result);
  });
})();

(() => {
  const bulky = new bulky.bulky();
  bulky.use(bulky.DragDrop, { target: ".bulkyDragDrop" });
  bulky.use(bulky.Tus, { endpoint: "//tusd.tusdemo.net/files/" });
})();
