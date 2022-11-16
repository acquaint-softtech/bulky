import type { PluginOptions, UIPlugin, PluginTarget } from "@bulky/core";
import type {
  PublicProviderOptions,
  TokenStorage,
} from "@bulky/companion-client";

export interface InstagramOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class Instagram extends UIPlugin<InstagramOptions> {}

export default Instagram;
