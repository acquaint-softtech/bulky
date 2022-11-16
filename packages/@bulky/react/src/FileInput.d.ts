import type { FileInputOptions } from "@bulky/file-input";
import { TobulkyProps } from "./CommonTypes";

export type FileInputProps = TobulkyProps<FileInputOptions>;

/**
 * React component that renders an area in which files can be dropped to be
 * uploaded.
 */
declare const FileInputComponent: React.ComponentType<FileInputProps>;
export default FileInputComponent;
