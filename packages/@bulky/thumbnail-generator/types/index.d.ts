import type {
  IndexedObject,
  PluginOptions,
  UIPlugin,
  bulkyFile,
} from "@bulky/core";

import ThumbnailGeneratorLocale from "./generatedLocale";

export interface ThumbnailOptions {
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  thumbnailType?: string;
  waitForThumbnailsBeforeUpload?: boolean;
  lazy?: boolean;
}

interface Options extends ThumbnailOptions {
  locale?: ThumbnailGeneratorLocale;
}

declare class ThumbnailGenerator extends UIPlugin<PluginOptions & Options> {}

export default ThumbnailGenerator;

// Events

export type ThumbnailGeneratedCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta>,
  preview: string
) => void;

declare module "@bulky/core" {
  export interface bulkyEventMap<TMeta> {
    "thumbnail:generated": ThumbnailGeneratedCallback<TMeta>;
  }
}
