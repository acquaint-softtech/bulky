import { h } from "preact";

export default ({ currentDeviceId, audioSources, onChangeSource }) => {
  return (
    <div className="bulky-Audio-videoSource">
      <select
        className="bulky-u-reset bulky-Audio-audioSource-select"
        onChange={(event) => {
          onChangeSource(event.target.value);
        }}
      >
        {audioSources.map((audioSource) => (
          <option
            key={audioSource.deviceId}
            value={audioSource.deviceId}
            selected={audioSource.deviceId === currentDeviceId}
          >
            {audioSource.label}
          </option>
        ))}
      </select>
    </div>
  );
};
