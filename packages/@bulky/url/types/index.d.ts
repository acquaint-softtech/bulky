import type {
  PluginOptions,
  UIPlugin,
  PluginTarget,
  IndexedObject,
} from "@bulky/core";
import type { RequestClientOptions } from "@bulky/companion-client";
import UrlLocale from "./generatedLocale";

export interface UrlOptions extends PluginOptions, RequestClientOptions {
  target?: PluginTarget;
  title?: string;
  locale?: UrlLocale;
}

declare class Url extends UIPlugin<UrlOptions> {
  public addFile(
    url: string,
    meta?: IndexedObject<any>
  ): undefined | string | never;
}

export default Url;
