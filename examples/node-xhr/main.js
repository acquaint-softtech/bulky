import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import XHRUpload from "@bulky/xhr-upload";
import Webcam from "@bulky/webcam";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
import "@bulky/webcam/dist/style.css";

const bulky = new bulky({
  debug: true,
  autoProceed: false,
});

bulky.use(Webcam);
bulky.use(Dashboard, {
  inline: true,
  target: "body",
  plugins: ["Webcam"],
});
bulky.use(XHRUpload, {
  endpoint: "http://localhost:3020/upload",
});
