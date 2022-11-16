import AwsS3 from "@bulky/aws-s3";
import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import GoogleDrive from "@bulky/google-drive";
import Webcam from "@bulky/webcam";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
import "@bulky/webcam/dist/style.css";

const bulky = new bulky({
  debug: true,
  autoProceed: false,
});

bulky.use(GoogleDrive, {
  companionUrl: "http://localhost:3020",
});
bulky.use(Webcam);
bulky.use(Dashboard, {
  inline: true,
  target: "body",
  plugins: ["GoogleDrive", "Webcam"],
});
bulky.use(AwsS3, {
  companionUrl: "http://localhost:3020",
});
