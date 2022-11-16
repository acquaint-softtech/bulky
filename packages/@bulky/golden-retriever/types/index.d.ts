import type { PluginOptions, BasePlugin } from "@bulky/core";

interface GoldenRetrieverOptions extends PluginOptions {
  expires?: number;
  serviceWorker?: boolean;
  indexedDB?: any;
}

declare class GoldenRetriever extends BasePlugin<GoldenRetrieverOptions> {}

export default GoldenRetriever;
