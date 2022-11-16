import type { PluginOptions, BasePlugin } from "@bulky/core";
import { bulkyFile } from "@bulky/utils";
import type CompressorLocale from "./generatedLocale";

export interface CompressorOptions extends PluginOptions {
  quality?: number;
  limit?: number;
  locale?: CompressorLocale;
}

export type CompressorCompleteCallback<TMeta> = (
  files: bulkyFile<TMeta>[]
) => void;

declare module "@bulky/core" {
  export interface bulkyEventMap<TMeta> {
    "compressor:complete": CompressorCompleteCallback<TMeta>;
  }
}

declare class Compressor extends BasePlugin<CompressorOptions> {}

export default Compressor;
