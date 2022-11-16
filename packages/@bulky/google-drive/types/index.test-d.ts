import bulky, { UIPlugin, PluginOptions } from "@bulky/core";
import GoogleDrive from "..";

class SomePlugin extends UIPlugin<PluginOptions> {}

const bulky = new bulky();
bulky.use(GoogleDrive, { companionUrl: "" });
bulky.use(GoogleDrive, { target: SomePlugin, companionUrl: "" });
bulky.use(GoogleDrive, {
  target: document.querySelector("#gdrive") || (undefined as never),
  companionUrl: "",
});
