import UIPlugin from "../UIPlugin.js";

export default class InvalidPluginWithoutName extends UIPlugin {
  constructor(bulky, opts) {
    super(bulky, opts);
    this.type = "acquirer";
    this.name = this.constructor.name;
  }

  run(results) {
    this.bulky.log({
      class: this.constructor.name,
      method: "run",
      results,
    });

    return Promise.resolve("success");
  }
}
