import { h } from "preact";
import classNames from "classnames";

function EditorPanel(props) {
  const file = props.files[props.fileCardFor];

  return (
    <div
      className={classNames("bulky-DashboardContent-panel", props.className)}
      role="tabpanel"
      data-bulky-panelType="FileEditor"
      id="bulky-DashboardContent-panel--editor"
    >
      <div className="bulky-DashboardContent-bar">
        <div
          className="bulky-DashboardContent-title"
          role="heading"
          aria-level="1"
        >
          {props.i18nArray("editing", {
            file: (
              <span className="bulky-DashboardContent-titleFile">
                {file.meta ? file.meta.name : file.name}
              </span>
            ),
          })}
        </div>
        <button
          className="bulky-DashboardContent-back"
          type="button"
          onClick={props.hideAllPanels}
        >
          {props.i18n("cancel")}
        </button>
        <button
          className="bulky-DashboardContent-save"
          type="button"
          onClick={props.saveFileEditor}
        >
          {props.i18n("save")}
        </button>
      </div>
      <div className="bulky-DashboardContent-panelBody">
        {props.editors.map((target) => {
          return props.bulky.getPlugin(target.id).render(props.state);
        })}
      </div>
    </div>
  );
}

export default EditorPanel;
