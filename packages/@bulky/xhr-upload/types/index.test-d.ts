import bulky from "@bulky/core";
import XHRUpload from "..";

new bulky().use(XHRUpload, {
  bundle: false,
  formData: true,
  endpoint: "xyz",
});

new bulky().use(XHRUpload, {
  endpoint: "/upload",
  method: "post",
});

new bulky().use(XHRUpload, {
  endpoint: "/upload",
  method: "PUT",
});
