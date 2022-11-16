import { h } from "preact";

export default (props) => {
  const { icon, hasAudio, i18n } = props;
  return (
    <div className="bulky-Audio-permissons">
      <div className="bulky-Audio-permissonsIcon">{icon()}</div>
      <h1 className="bulky-Audio-title">
        {hasAudio ? i18n("allowAudioAccessTitle") : i18n("noAudioTitle")}
      </h1>
      <p>
        {hasAudio
          ? i18n("allowAudioAccessDescription")
          : i18n("noAudioDescription")}
      </p>
    </div>
  );
};
