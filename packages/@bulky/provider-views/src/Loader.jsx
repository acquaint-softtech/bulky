import { h } from "preact";

export default ({ i18n }) => {
  return (
    <div className="bulky-Provider-loading">
      <span>{i18n("loading")}</span>
    </div>
  );
};
