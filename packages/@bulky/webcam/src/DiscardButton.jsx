import { h } from "preact";

function DiscardButton({ onDiscard, i18n }) {
  return (
    <button
      className="bulky-u-reset bulky-c-btn bulky-Webcam-button bulky-Webcam-button--discard"
      type="button"
      title={i18n("discardRecordedFile")}
      aria-label={i18n("discardRecordedFile")}
      onClick={onDiscard}
      data-bulky-super-focusable
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        className="bulky-c-icon"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M.496 11.367L11.103.76l1.414 1.414L1.911 12.781z" />
          <path d="M11.104 12.782L.497 2.175 1.911.76l10.607 10.606z" />
        </g>
      </svg>
    </button>
  );
}

export default DiscardButton;
