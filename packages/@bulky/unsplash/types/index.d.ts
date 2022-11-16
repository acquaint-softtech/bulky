import type { PluginOptions, UIPlugin, PluginTarget } from "@bulky/core";
import type { RequestClientOptions } from "@bulky/companion-client";

interface UnsplashOptions extends PluginOptions, RequestClientOptions {
  target?: PluginTarget;
  title?: string;
}

declare class Unsplash extends UIPlugin<UnsplashOptions> {}

export default Unsplash;
