import { h } from "preact";
import classNames from "classnames";
import AddFiles from "./AddFiles.jsx";

const AddFilesPanel = (props) => {
  return (
    <div
      className={classNames("bulky-Dashboard-AddFilesPanel", props.className)}
      data-bulky-panelType="AddFiles"
      aria-hidden={props.showAddFilesPanel}
    >
      <div className="bulky-DashboardContent-bar">
        <div
          className="bulky-DashboardContent-title"
          role="heading"
          aria-level="1"
        >
          {props.i18n("addingMoreFiles")}
        </div>
        <button
          className="bulky-DashboardContent-back"
          type="button"
          onClick={() => props.toggleAddFilesPanel(false)}
        >
          {props.i18n("back")}
        </button>
      </div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AddFiles {...props} />
    </div>
  );
};

export default AddFilesPanel;
