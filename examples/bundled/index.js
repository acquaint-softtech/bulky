import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import Instagram from "@bulky/instagram";
import GoogleDrive from "@bulky/google-drive";
import Url from "@bulky/url";
import Webcam from "@bulky/webcam";
import Tus from "@bulky/tus";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
import "@bulky/url/dist/style.css";
import "@bulky/webcam/dist/style.css";

const TUS_ENDPOINT = "https://tusd.tusdemo.net/files/";

const bulky = new bulky({
  debug: true,
  meta: {
    username: "John",
    license: "Creative Commons",
  },
})
  .use(Dashboard, {
    trigger: "#pick-files",
    target: "#upload-form",
    inline: true,
    metaFields: [
      { id: "license", name: "License", placeholder: "specify license" },
      { id: "caption", name: "Caption", placeholder: "add caption" },
    ],
    showProgressDetails: true,
    proudlyDisplayPoweredBybulky: true,
    note: "2 files, images and video only",
    restrictions: { requiredMetaFields: ["caption"] },
  })
  .use(GoogleDrive, {
    target: Dashboard,
    companionUrl: "http://localhost:3020",
  })
  .use(Instagram, { target: Dashboard, companionUrl: "http://localhost:3020" })
  .use(Url, { target: Dashboard, companionUrl: "http://localhost:3020" })
  .use(Webcam, { target: Dashboard })
  .use(Tus, { endpoint: TUS_ENDPOINT });

// You can optinally enable the Golden Retriever plugin — it will
// restore files after a browser crash / accidental closed window
// see more at https://bulky.io/docs/golden-retriever/
//
//   .use(GoldenRetriever, { serviceWorker: true })

bulky.on("complete", (result) => {
  if (result.failed.length === 0) {
    console.log("Upload successful 😀");
  } else {
    console.warn("Upload failed 😞");
  }
  console.log("successful files:", result.successful);
  console.log("failed files:", result.failed);
});

// uncomment if you enable Golden Retriever
//
/* eslint-disable compat/compat */
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw.js')
//     .then((registration) => {
//       console.log('ServiceWorker registration successful with scope: ', registration.scope)
//     })
//     .catch((error) => {
//       console.log('Registration failed with ' + error)
//     })
// }
/* eslint-enable */
