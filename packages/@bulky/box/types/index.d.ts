import type { PluginOptions, PluginTarget, UIPlugin } from "@bulky/core";
import type {
  PublicProviderOptions,
  TokenStorage,
} from "@bulky/companion-client";

interface BoxOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class Box extends UIPlugin<BoxOptions> {}

export default Box;
