import { h } from "preact";
import classNames from "classnames";
import throttle from "lodash.throttle";
import prettierBytes from "@transloadit/prettier-bytes";
import prettyETA from "@bulky/utils/lib/prettyETA";

import statusBarStates from "./StatusBarStates.js";

const DOT = `\u00B7`;
const renderDot = () => ` ${DOT} `;

function UploadBtn(props) {
  const {
    newFiles,
    isUploadStarted,
    recoveredState,
    i18n,
    uploadState,
    isSomeGhost,
    startUpload,
  } = props;

  const uploadBtnClassNames = classNames(
    "bulky-u-reset",
    "bulky-c-btn",
    "bulky-StatusBar-actionBtn",
    "bulky-StatusBar-actionBtn--upload",
    {
      "bulky-c-btn-primary": uploadState === statusBarStates.STATE_WAITING,
    },
    { "bulky-StatusBar-actionBtn--disabled": isSomeGhost }
  );

  const uploadBtnText =
    newFiles && isUploadStarted && !recoveredState
      ? i18n("uploadXNewFiles", { smart_count: newFiles })
      : i18n("uploadXFiles", { smart_count: newFiles });

  return (
    <button
      type="button"
      className={uploadBtnClassNames}
      aria-label={i18n("uploadXFiles", { smart_count: newFiles })}
      onClick={startUpload}
      disabled={isSomeGhost}
      data-bulky-super-focusable
    >
      {uploadBtnText}
    </button>
  );
}

function RetryBtn(props) {
  const { i18n, bulky } = props;

  return (
    <button
      type="button"
      className="bulky-u-reset bulky-c-btn bulky-StatusBar-actionBtn bulky-StatusBar-actionBtn--retry"
      aria-label={i18n("retryUpload")}
      onClick={() => bulky.retryAll()}
      data-bulky-super-focusable
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="bulky-c-icon"
        width="8"
        height="10"
        viewBox="0 0 8 10"
      >
        <path d="M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z" />
      </svg>
      {i18n("retry")}
    </button>
  );
}

function CancelBtn(props) {
  const { i18n, bulky } = props;

  return (
    <button
      type="button"
      className="bulky-u-reset bulky-StatusBar-actionCircleBtn"
      title={i18n("cancel")}
      aria-label={i18n("cancel")}
      onClick={() => bulky.cancelAll()}
      data-cy="cancel"
      data-bulky-super-focusable
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="bulky-c-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#888" cx="8" cy="8" r="8" />
          <path
            fill="#FFF"
            d="M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
          />
        </g>
      </svg>
    </button>
  );
}

function PauseResumeButton(props) {
  const { isAllPaused, i18n, isAllComplete, resumableUploads, bulky } = props;
  const title = isAllPaused ? i18n("resume") : i18n("pause");

  function togglePauseResume() {
    if (isAllComplete) return null;

    if (!resumableUploads) {
      return bulky.cancelAll();
    }

    if (isAllPaused) {
      return bulky.resumeAll();
    }

    return bulky.pauseAll();
  }

  return (
    <button
      title={title}
      aria-label={title}
      className="bulky-u-reset bulky-StatusBar-actionCircleBtn"
      type="button"
      onClick={togglePauseResume}
      data-bulky-super-focusable
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="bulky-c-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#888" cx="8" cy="8" r="8" />
          <path
            fill="#FFF"
            d={
              isAllPaused
                ? "M6 4.25L11.5 8 6 11.75z"
                : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
            }
          />
        </g>
      </svg>
    </button>
  );
}

function DoneBtn(props) {
  const { i18n, doneButtonHandler } = props;

  return (
    <button
      type="button"
      className="bulky-u-reset bulky-c-btn bulky-StatusBar-actionBtn bulky-StatusBar-actionBtn--done"
      onClick={doneButtonHandler}
      data-bulky-super-focusable
    >
      {i18n("done")}
    </button>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="bulky-StatusBar-spinner"
      aria-hidden="true"
      focusable="false"
      width="14"
      height="14"
    >
      <path
        d="M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0"
        fillRule="evenodd"
      />
    </svg>
  );
}

function ProgressBarProcessing(props) {
  const { progress } = props;
  const { value, mode, message } = progress;
  const roundedValue = Math.round(value * 100);
  const dot = `\u00B7`;

  return (
    <div className="bulky-StatusBar-content">
      <LoadingSpinner />
      {mode === "determinate" ? `${roundedValue}% ${dot} ` : ""}
      {message}
    </div>
  );
}

function ProgressDetails(props) {
  const { numUploads, complete, totalUploadedSize, totalSize, totalETA, i18n } =
    props;

  const ifShowFilesUploadedOfTotal = numUploads > 1;

  return (
    <div className="bulky-StatusBar-statusSecondary">
      {ifShowFilesUploadedOfTotal &&
        i18n("filesUploadedOfTotal", {
          complete,
          smart_count: numUploads,
        })}
      <span className="bulky-StatusBar-additionalInfo">
        {/* When should we render this dot?
          1. .-additionalInfo is shown (happens only on desktops)
          2. AND 'filesUploadedOfTotal' was shown
        */}
        {ifShowFilesUploadedOfTotal && renderDot()}

        {i18n("dataUploadedOfTotal", {
          complete: prettierBytes(totalUploadedSize),
          total: prettierBytes(totalSize),
        })}

        {renderDot()}

        {i18n("xTimeLeft", {
          time: prettyETA(totalETA),
        })}
      </span>
    </div>
  );
}

function FileUploadCount(props) {
  const { i18n, complete, numUploads } = props;

  return (
    <div className="bulky-StatusBar-statusSecondary">
      {i18n("filesUploadedOfTotal", { complete, smart_count: numUploads })}
    </div>
  );
}

function UploadNewlyAddedFiles(props) {
  const { i18n, newFiles, startUpload } = props;
  const uploadBtnClassNames = classNames(
    "bulky-u-reset",
    "bulky-c-btn",
    "bulky-StatusBar-actionBtn",
    "bulky-StatusBar-actionBtn--uploadNewlyAdded"
  );

  return (
    <div className="bulky-StatusBar-statusSecondary">
      <div className="bulky-StatusBar-statusSecondaryHint">
        {i18n("xMoreFilesAdded", { smart_count: newFiles })}
      </div>
      <button
        type="button"
        className={uploadBtnClassNames}
        aria-label={i18n("uploadXFiles", { smart_count: newFiles })}
        onClick={startUpload}
      >
        {i18n("upload")}
      </button>
    </div>
  );
}

const ThrottledProgressDetails = throttle(ProgressDetails, 500, {
  leading: true,
  trailing: true,
});

function ProgressBarUploading(props) {
  const {
    i18n,
    supportsUploadProgress,
    totalProgress,
    showProgressDetails,
    isUploadStarted,
    isAllComplete,
    isAllPaused,
    newFiles,
    numUploads,
    complete,
    totalUploadedSize,
    totalSize,
    totalETA,
    startUpload,
  } = props;
  const showUploadNewlyAddedFiles = newFiles && isUploadStarted;

  if (!isUploadStarted || isAllComplete) {
    return null;
  }

  const title = isAllPaused ? i18n("paused") : i18n("uploading");

  function renderProgressDetails() {
    if (!isAllPaused && !showUploadNewlyAddedFiles && showProgressDetails) {
      if (supportsUploadProgress) {
        return (
          <ThrottledProgressDetails
            numUploads={numUploads}
            complete={complete}
            totalUploadedSize={totalUploadedSize}
            totalSize={totalSize}
            totalETA={totalETA}
            i18n={i18n}
          />
        );
      }
      return (
        <FileUploadCount
          i18n={i18n}
          complete={complete}
          numUploads={numUploads}
        />
      );
    }
    return null;
  }

  return (
    <div className="bulky-StatusBar-content" aria-label={title} title={title}>
      {!isAllPaused ? <LoadingSpinner /> : null}
      <div className="bulky-StatusBar-status">
        <div className="bulky-StatusBar-statusPrimary">
          {supportsUploadProgress ? `${title}: ${totalProgress}%` : title}
        </div>

        {renderProgressDetails()}

        {showUploadNewlyAddedFiles ? (
          <UploadNewlyAddedFiles
            i18n={i18n}
            newFiles={newFiles}
            startUpload={startUpload}
          />
        ) : null}
      </div>
    </div>
  );
}

function ProgressBarComplete(props) {
  const { i18n } = props;

  return (
    <div
      className="bulky-StatusBar-content"
      role="status"
      title={i18n("complete")}
    >
      <div className="bulky-StatusBar-status">
        <div className="bulky-StatusBar-statusPrimary">
          <svg
            aria-hidden="true"
            focusable="false"
            className="bulky-StatusBar-statusIndicator bulky-c-icon"
            width="15"
            height="11"
            viewBox="0 0 15 11"
          >
            <path d="M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z" />
          </svg>
          {i18n("complete")}
        </div>
      </div>
    </div>
  );
}

function ProgressBarError(props) {
  const { error, i18n, complete, numUploads } = props;

  function displayErrorAlert() {
    const errorMessage = `${i18n("uploadFailed")} \n\n ${error}`;
    // eslint-disable-next-line no-alert
    alert(errorMessage); // TODO: move to custom alert implementation
  }

  return (
    <div className="bulky-StatusBar-content" title={i18n("uploadFailed")}>
      <svg
        aria-hidden="true"
        focusable="false"
        className="bulky-StatusBar-statusIndicator bulky-c-icon"
        width="11"
        height="11"
        viewBox="0 0 11 11"
      >
        <path d="M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z" />
      </svg>
      <div className="bulky-StatusBar-status">
        <div className="bulky-StatusBar-statusPrimary">
          {i18n("uploadFailed")}

          <button
            className="bulky-u-reset bulky-StatusBar-details"
            aria-label={i18n("showErrorDetails")}
            data-microtip-position="top-right"
            data-microtip-size="medium"
            onClick={displayErrorAlert}
            type="button"
          >
            ?
          </button>
        </div>

        <FileUploadCount
          i18n={i18n}
          complete={complete}
          numUploads={numUploads}
        />
      </div>
    </div>
  );
}
export {
  UploadBtn,
  RetryBtn,
  CancelBtn,
  PauseResumeButton,
  DoneBtn,
  LoadingSpinner,
  ProgressDetails,
  ProgressBarProcessing,
  ProgressBarError,
  ProgressBarUploading,
  ProgressBarComplete,
};