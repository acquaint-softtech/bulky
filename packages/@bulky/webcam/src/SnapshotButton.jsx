import { h } from "preact";
import CameraIcon from "./CameraIcon.jsx";

export default ({ onSnapshot, i18n }) => {
  return (
    <button
      className="bulky-u-reset bulky-c-btn bulky-Webcam-button bulky-Webcam-button--picture"
      type="button"
      title={i18n("takePicture")}
      aria-label={i18n("takePicture")}
      onClick={onSnapshot}
      data-bulky-super-focusable
    >
      {CameraIcon()}
    </button>
  );
};
