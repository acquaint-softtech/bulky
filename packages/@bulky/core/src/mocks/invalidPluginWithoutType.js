import UIPlugin from "../UIPlugin.js";

export default class InvalidPluginWithoutType extends UIPlugin {
  constructor(bulky, opts) {
    super(bulky, opts);
    this.id = "InvalidPluginWithoutType";
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
