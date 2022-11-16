import { expectError } from "tsd";
import bulky from "@bulky/core";
import ScreenCapture from "..";

new bulky().use(ScreenCapture);
new bulky().use(ScreenCapture, {});
new bulky().use(ScreenCapture, { preferredVideoMimeType: "video/mp4" });
expectError(new bulky().use(ScreenCapture, { preferredVideoMimeType: 10 }));

new bulky().use(ScreenCapture, {
  displayMediaConstraints: {
    video: { displaySurface: "window" },
  },
});
expectError(
  new bulky().use(ScreenCapture, {
    displayMediaConstraints: {
      video: { displaySurface: "some nonsense" },
    },
  })
);
