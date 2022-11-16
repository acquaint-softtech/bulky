import type { PluginOptions, UIPlugin, PluginTarget } from "@bulky/core";
import FileInputLocale from "./generatedLocale";

export interface FileInputOptions extends PluginOptions {
  target?: PluginTarget;
  pretty?: boolean;
  inputName?: string;
  locale?: FileInputLocale;
}

declare class FileInput extends UIPlugin<FileInputOptions> {}

export default FileInput;
