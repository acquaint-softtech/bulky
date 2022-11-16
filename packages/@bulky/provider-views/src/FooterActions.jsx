import { h } from "preact";

export default ({ cancel, done, i18n, selected }) => {
  return (
    <div className="bulky-ProviderBrowser-footer">
      <button
        className="bulky-u-reset bulky-c-btn bulky-c-btn-primary"
        onClick={done}
        type="button"
      >
        {i18n("selectX", {
          smart_count: selected,
        })}
      </button>
      <button
        className="bulky-u-reset bulky-c-btn bulky-c-btn-link"
        onClick={cancel}
        type="button"
      >
        {i18n("cancel")}
      </button>
    </div>
  );
};
