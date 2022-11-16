import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import XHRUpload from "@bulky/xhr-upload";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

const bulky = new bulky({
  debug: true,
  meta: { something: "xyz" },
});

bulky.use(Dashboard, {
  target: "#app",
  inline: true,
  hideRetryButton: true,
  hideCancelButton: true,
});

bulky.use(XHRUpload, {
  bundle: true,
  endpoint: "http://localhost:9967/upload",
  allowedMetaFields: ["something"],
  fieldName: "files",
});
