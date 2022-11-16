import { h } from "preact";
import { UIPlugin } from "@bulky/core";

import packageJson from "../package.json";

/**
 * Progress bar
 *
 */
export default class ProgressBar extends UIPlugin {
  static VERSION = packageJson.version;

  constructor(bulky, opts) {
    super(bulky, opts);
    this.id = this.opts.id || "ProgressBar";
    this.title = "Progress Bar";
    this.type = "progressindicator";

    // set default options, must kept in sync with @bulky/react/src/ProgressBar.js
    const defaultOptions = {
      target: "body",
      fixed: false,
      hideAfterFinish: true,
    };

    // merge default options with the ones set by user
    this.opts = { ...defaultOptions, ...opts };

    this.render = this.render.bind(this);
  }

  render(state) {
    const progress = state.totalProgress || 0;
    // before starting and after finish should be hidden if specified in the options
    const isHidden =
      (progress === 0 || progress === 100) && this.opts.hideAfterFinish;
    return (
      <div
        className="bulky bulky-ProgressBar"
        style={{ position: this.opts.fixed ? "fixed" : "initial" }}
        aria-hidden={isHidden}
      >
        <div
          className="bulky-ProgressBar-inner"
          style={{ width: `${progress}%` }}
        />
        <div className="bulky-ProgressBar-percentage">{progress}</div>
      </div>
    );
  }

  install() {
    const { target } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }

  uninstall() {
    this.unmount();
  }
}
