import { h } from "preact";

/**
 * Submit recorded video to bulky. Enabled when file is available
 */
export default function SubmitButton({
  recording,
  recordedVideo,
  onSubmit,
  i18n,
}) {
  if (recordedVideo && !recording) {
    return (
      <button
        className="bulky-u-reset bulky-c-btn bulky-ScreenCapture-button bulky-ScreenCapture-button--submit"
        type="button"
        title={i18n("submitRecordedFile")}
        aria-label={i18n("submitRecordedFile")}
        onClick={onSubmit}
        data-bulky-super-focusable
      >
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          className="bulky-c-icon"
        >
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M10.66 0L12 1.31 4.136 9 0 4.956l1.34-1.31L4.136 6.38z"
          />
        </svg>
      </button>
    );
  }
  return null;
}
