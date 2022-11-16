import { h } from "preact";

export default ({ icon, i18n, hasCamera }) => {
  return (
    <div className="bulky-Webcam-permissons">
      <div className="bulky-Webcam-permissonsIcon">{icon()}</div>
      <h1 className="bulky-Webcam-title">
        {hasCamera ? i18n("allowAccessTitle") : i18n("noCameraTitle")}
      </h1>
      <p>
        {hasCamera
          ? i18n("allowAccessDescription")
          : i18n("noCameraDescription")}
      </p>
    </div>
  );
};
