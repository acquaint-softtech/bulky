import { BasePlugin } from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import Dropbox from "@bulky/dropbox";
import GoogleDrive from "@bulky/google-drive";
import Instagram from "@bulky/instagram";
import Facebook from "@bulky/facebook";
import OneDrive from "@bulky/onedrive";
import Box from "@bulky/box";
import Unsplash from "@bulky/unsplash";
import Url from "@bulky/url";
import Zoom from "@bulky/zoom";

import packageJson from "../package.json";

const availablePlugins = {
  // Using a null-prototype object to avoid prototype pollution.
  __proto__: null,
  Box,
  Dropbox,
  Facebook,
  GoogleDrive,
  Instagram,
  OneDrive,
  Unsplash,
  Url,
  Zoom,
};

export default class RemoteSources extends BasePlugin {
  static VERSION = packageJson.version;

  #installedPlugins = new Set();

  constructor(bulky, opts) {
    super(bulky, opts);
    this.id = this.opts.id || "RemoteSources";
    this.type = "acquirer";

    const defaultOptions = {
      sources: Object.keys(availablePlugins),
      target: Dashboard,
    };
    this.opts = { ...defaultOptions, ...opts };

    if (this.opts.companionUrl == null) {
      throw new Error(
        "Please specify companionUrl for RemoteSources to work, see https://bulky.io/docs/remote-sources#companionUrl"
      );
    }
  }

  setOptions(newOpts) {
    this.uninstall();
    super.setOptions(newOpts);
    this.install();
  }

  install() {
    this.opts.sources.forEach((pluginId) => {
      const optsForRemoteSourcePlugin = { ...this.opts, sources: undefined };
      const plugin = availablePlugins[pluginId];
      if (plugin == null) {
        const pluginNames = Object.keys(availablePlugins);
        const formatter = new Intl.ListFormat("en", {
          style: "long",
          type: "disjunction",
        });
        throw new Error(
          `Invalid plugin: "${pluginId}" is not one of: ${formatter.format(
            pluginNames
          )}.`
        );
      }
      this.bulky.use(plugin, optsForRemoteSourcePlugin);
      // `plugin` is a class, but we want to track the instance object
      // so we have to do `getPlugin` here.
      this.#installedPlugins.add(this.bulky.getPlugin(pluginId));
    });
  }

  uninstall() {
    for (const plugin of this.#installedPlugins) {
      this.bulky.removePlugin(plugin);
    }
    this.#installedPlugins.clear();
  }
}
