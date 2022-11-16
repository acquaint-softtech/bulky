import { h } from "preact";
import classNames from "classnames";
import ignoreEvent from "../utils/ignoreEvent.js";

function PickerPanelContent({
  activePickerPanel,
  className,
  hideAllPanels,
  i18n,
  state,
  bulky,
}) {
  return (
    <div
      className={classNames("bulky-DashboardContent-panel", className)}
      role="tabpanel"
      data-bulky-panelType="PickerPanel"
      id={`bulky-DashboardContent-panel--${activePickerPanel.id}`}
      onDragOver={ignoreEvent}
      onDragLeave={ignoreEvent}
      onDrop={ignoreEvent}
      onPaste={ignoreEvent}
    >
      <div className="bulky-DashboardContent-bar">
        <div
          className="bulky-DashboardContent-title"
          role="heading"
          aria-level="1"
        >
          {i18n("importFrom", { name: activePickerPanel.name })}
        </div>
        <button
          className="bulky-DashboardContent-back"
          type="button"
          onClick={hideAllPanels}
        >
          {i18n("cancel")}
        </button>
      </div>
      <div className="bulky-DashboardContent-panelBody">
        {bulky.getPlugin(activePickerPanel.id).render(state)}
      </div>
    </div>
  );
}

export default PickerPanelContent;
