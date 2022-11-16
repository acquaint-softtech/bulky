import { UIPlugin } from "@bulky/core";

import packageJson from "../package.json";

/* eslint-disable max-len */
/**
 * Add Redux DevTools support to bulky
 *
 * See https://medium.com/@zalmoxis/redux-devtools-without-redux-or-how-to-have-a-predictable-state-with-any-architecture-61c5f5a7716f
 * and https://github.com/zalmoxisus/mobx-remotedev/blob/master/src/monitorActions.js
 */
/* eslint-enable max-len */
export default class ReduxDevTools extends UIPlugin {
  static VERSION = packageJson.version;

  constructor(bulky, opts) {
    super(bulky, opts);
    this.type = "debugger";
    this.id = this.opts.id || "ReduxDevTools";
    this.title = "Redux DevTools";

    // set default options
    const defaultOptions = {};

    // merge default options with the ones set by user
    this.opts = { ...defaultOptions, ...opts };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.initDevTools = this.initDevTools.bind(this);
  }

  handleStateChange(prevState, nextState) {
    this.devTools.send("bulky_STATE_UPDATE", nextState);
  }

  initDevTools() {
    this.devTools = window.devToolsExtension.connect();
    this.devToolsUnsubscribe = this.devTools.subscribe((message) => {
      if (message.type === "DISPATCH") {
        // Implement monitors actions
        switch (message.payload.type) {
          case "RESET":
            this.bulky.cancelAll();
            return;
          case "IMPORT_STATE": {
            const { computedStates } = message.payload.nextLiftedState;
            this.bulky.store.state = {
              ...this.bulky.getState(),
              ...computedStates[computedStates.length - 1].state,
            };
            this.bulky.updateAll(this.bulky.getState());
            return;
          }
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            this.bulky.store.state = {
              ...this.bulky.getState(),
              ...JSON.parse(message.state),
            };
            this.bulky.updateAll(this.bulky.getState());
            break;

          default:
        }
      }
    });
  }

  install() {
    // eslint-disable-next-line no-underscore-dangle
    this.withDevTools =
      typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
    if (this.withDevTools) {
      this.initDevTools();
      this.bulky.on("state-update", this.handleStateChange);
    }
  }

  uninstall() {
    if (this.withDevTools) {
      this.devToolsUnsubscribe();
      this.bulky.off("state-update", this.handleStateUpdate);
    }
  }
}
