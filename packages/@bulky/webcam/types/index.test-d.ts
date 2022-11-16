import { expectError } from "tsd";
import bulky from "@bulky/core";
import Webcam from "..";

new bulky().use(Webcam, {
  modes: ["video-only"],
});

new bulky().use(Webcam, {
  modes: ["video-only"],
  videoConstraints: {
    width: { min: 420, ideal: 420, max: 1920 },
    height: { min: 420, ideal: 420, max: 1080 },
  },
});

expectError(
  new bulky().use(Webcam, {
    modes: ["video-only"],
    videoConstraints: {
      width: "not a number har har",
    },
  })
);
