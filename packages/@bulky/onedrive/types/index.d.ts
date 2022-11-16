import type { PluginOptions, UIPlugin, PluginTarget } from "@bulky/core";
import type {
  PublicProviderOptions,
  TokenStorage,
} from "@bulky/companion-client";

export interface OneDriveOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class OneDrive extends UIPlugin<OneDriveOptions> {}

export default OneDrive;
