/* eslint-disable jsx-a11y/no-noninteractive-element-interactions  */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { h } from "preact";
import { UIPlugin } from "@bulky/core";
import FadeIn from "./FadeIn.jsx";
import TransitionGroup from "./TransitionGroup.js";

import packageJson from "../package.json";

/**
 * Informer
 * Shows rad message bubbles
 * used like this: `bulky.info('hello world', 'info', 5000)`
 * or for errors: `bulky.info('Error uploading img.jpg', 'error', 5000)`
 *
 */
export default class Informer extends UIPlugin {
  static VERSION = packageJson.version;

  constructor(bulky, opts) {
    super(bulky, opts);
    this.type = "progressindicator";
    this.id = this.opts.id || "Informer";
    this.title = "Informer";

    // set default options
    const defaultOptions = {};
    // merge default options with the ones set by user
    this.opts = { ...defaultOptions, ...opts };
  }

  render = (state) => {
    return (
      <div className="bulky bulky-Informer">
        <TransitionGroup>
          {state.info.map((info) => (
            <FadeIn key={info.message}>
              <p role="alert">
                {info.message}{" "}
                {info.details && (
                  <span
                    aria-label={info.details}
                    data-microtip-position="top-left"
                    data-microtip-size="medium"
                    role="tooltip"
                    // eslint-disable-next-line no-alert
                    onClick={() =>
                      alert(`${info.message} \n\n ${info.details}`)
                    }
                  >
                    ?
                  </span>
                )}
              </p>
            </FadeIn>
          ))}
        </TransitionGroup>
      </div>
    );
  };

  install() {
    const { target } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }
}
