import type {
  PluginOptions,
  UIPlugin,
  PluginTarget,
  bulkyFile,
} from "@bulky/core";
import type Cropper from "cropperjs";
import ImageEditorLocale from "./generatedLocale";

type Actions = {
  revert: boolean;
  rotate: boolean;
  granularRotate: boolean;
  flip: boolean;
  zoomIn: boolean;
  zoomOut: boolean;
  cropSquare: boolean;
  cropWidescreen: boolean;
  cropWidescreenVertical: boolean;
};

interface bulkyCropperOptions extends Cropper.Options {
  croppedCanvasOptions: Cropper.GetCroppedCanvasOptions;
}

export interface ImageEditorOptions extends PluginOptions {
  cropperOptions?: bulkyCropperOptions;
  actions?: Actions;
  quality?: number;
  target?: PluginTarget;
  locale?: ImageEditorLocale;
}

declare class ImageEditor extends UIPlugin<ImageEditorOptions> {}

export default ImageEditor;

// Events

export type FileEditorStartCallback<TMeta> = (file: bulkyFile<TMeta>) => void;
export type FileEditorCompleteCallback<TMeta> = (
  updatedFile: bulkyFile<TMeta>
) => void;
export type FileEditorCancelCallback<TMeta> = (file: bulkyFile<TMeta>) => void;

declare module "@bulky/core" {
  export interface bulkyEventMap<TMeta> {
    "file-editor:start": FileEditorStartCallback<TMeta>;
    "file-editor:complete": FileEditorCompleteCallback<TMeta>;
    "file-editor:cancel": FileEditorCancelCallback<TMeta>;
  }
}
