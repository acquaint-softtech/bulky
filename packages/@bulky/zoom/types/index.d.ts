import type { PluginOptions, UIPlugin, PluginTarget } from "@bulky/core";
import type {
  TokenStorage,
  PublicProviderOptions,
} from "@bulky/companion-client";

interface ZoomOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class Zoom extends UIPlugin<ZoomOptions> {}

export default Zoom;
