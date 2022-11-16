import type { PluginOptions, UIPlugin, PluginTarget } from "@bulky/core";
import type {
  PublicProviderOptions,
  TokenStorage,
} from "@bulky/companion-client";

export interface GoogleDriveOptions
  extends PluginOptions,
    PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class GoogleDrive extends UIPlugin<GoogleDriveOptions> {}

export default GoogleDrive;
