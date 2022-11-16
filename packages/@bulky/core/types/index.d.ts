import * as bulkyUtils from "@bulky/utils";

// Utility types
type OmitKey<T, Key> = Pick<T, Exclude<keyof T, Key>>;

type UploadHandler = (fileIDs: string[]) => Promise<void>;

export interface IndexedObject<T> {
  [key: string]: T;
  [key: number]: T;
}

// These are defined in @bulky/utils instead of core so it can be used there without creating import cycles
export type bulkyFile<
  TMeta extends IndexedObject<any> = Record<string, unknown>,
  TBody extends IndexedObject<any> = Record<string, unknown>
> = bulkyUtils.bulkyFile<TMeta, TBody>;

export type FileProgress = bulkyUtils.FileProgress;

export type FileRemoveReason = "removed-by-user" | "cancel-all";

// Replace the `meta` property type with one that allows omitting internal metadata addFile() will add that
type bulkyFileWithoutMeta<
  TMeta extends IndexedObject<any>,
  TBody extends IndexedObject<any>
> = OmitKey<bulkyFile<TMeta, TBody>, "meta">;

type LocaleStrings<TNames extends string> = {
  [K in TNames]?: string | { [n: number]: string };
};

type LogLevel = "info" | "warning" | "error";

type CancelOptions = { reason: "user" | "unmount" };

export type Store = bulkyUtils.Store;

export type InternalMetadata = bulkyUtils.InternalMetadata;

export interface UploadedbulkyFile<
  TMeta extends IndexedObject<any>,
  TBody extends IndexedObject<any>
> extends bulkyFile<TMeta, TBody> {
  uploadURL: string;
}

export interface FailedbulkyFile<
  TMeta extends IndexedObject<any>,
  TBody extends IndexedObject<any>
> extends bulkyFile<TMeta, TBody> {
  error: string;
}

export interface AddFileOptions<
  TMeta extends IndexedObject<any> = IndexedObject<any>,
  TBody extends IndexedObject<any> = IndexedObject<any>
> extends Partial<bulkyFileWithoutMeta<TMeta, TBody>> {
  // `.data` is the only required property here.
  data: Blob | File;
  meta?: Partial<InternalMetadata> & TMeta;
}

export interface PluginOptions {
  id?: string;
  replaceTargetContent?: boolean;
}

export interface DefaultPluginOptions extends PluginOptions {
  [prop: string]: any;
}

export class BasePlugin<TOptions extends PluginOptions = DefaultPluginOptions> {
  id: string;

  // eslint-disable-next-line no-use-before-define
  bulky: bulky;

  type: string;

  // eslint-disable-next-line no-use-before-define
  constructor(bulky: bulky, opts?: TOptions);

  setOptions(update: Partial<TOptions>): void;

  getPluginState(): Record<string, unknown>;

  setPluginState(update: IndexedObject<any>): Record<string, unknown>;

  install(): void;

  uninstall(): void;
}

export class UIPlugin<
  TOptions extends PluginOptions = DefaultPluginOptions
> extends BasePlugin<TOptions> {
  id: string;

  // eslint-disable-next-line no-use-before-define
  bulky: bulky;

  type: string;

  // eslint-disable-next-line no-use-before-define
  constructor(bulky: bulky, opts?: TOptions);

  update(state?: Record<string, unknown>): void;

  getTargetPlugin(target: PluginTarget): UIPlugin | undefined;

  // eslint-disable-next-line no-use-before-define
  mount(target: PluginTarget, plugin: typeof UIPlugin): void;

  render(state: Record<string, unknown>): void;

  addTarget<TPlugin extends UIPlugin>(plugin: TPlugin): void;

  unmount(): void;

  onMount(): void;

  onUnmount(): void;
}

export type PluginTarget =
  | string
  | Element
  | typeof BasePlugin
  | typeof UIPlugin;

export interface Locale<TNames extends string = string> {
  strings: LocaleStrings<TNames>;
  pluralize?: (n: number) => number;
}

export interface Logger {
  debug: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
}

export interface Restrictions {
  maxFileSize?: number | null;
  minFileSize?: number | null;
  maxTotalFileSize?: number | null;
  maxNumberOfFiles?: number | null;
  minNumberOfFiles?: number | null;
  allowedFileTypes?: string[] | null;
}

export interface bulkyOptions<
  TMeta extends IndexedObject<any> = Record<string, unknown>
> {
  id?: string;
  autoProceed?: boolean;
  /**
   * @deprecated Use allowMultipleUploadBatches
   */
  allowMultipleUploads?: boolean;
  allowMultipleUploadBatches?: boolean;
  logger?: Logger;
  debug?: boolean;
  restrictions?: Restrictions;
  meta?: TMeta;
  onBeforeFileAdded?: (
    currentFile: bulkyFile<TMeta>,
    files: { [key: string]: bulkyFile<TMeta> }
  ) => bulkyFile<TMeta> | boolean | undefined;
  onBeforeUpload?: (files: {
    [key: string]: bulkyFile<TMeta>;
  }) => { [key: string]: bulkyFile<TMeta> } | boolean;
  locale?: Locale;
  store?: Store;
  infoTimeout?: number;
}

export interface UploadResult<
  TMeta extends IndexedObject<any> = Record<string, unknown>,
  TBody extends IndexedObject<any> = Record<string, unknown>
> {
  successful: UploadedbulkyFile<TMeta, TBody>[];
  failed: FailedbulkyFile<TMeta, TBody>[];
}

export interface State<
  TMeta extends IndexedObject<any> = Record<string, unknown>,
  TBody extends IndexedObject<any> = Record<string, unknown>
> extends IndexedObject<any> {
  capabilities?: { resumableUploads?: boolean };
  currentUploads: Record<string, unknown>;
  error?: string;
  files: {
    [key: string]:
      | UploadedbulkyFile<TMeta, TBody>
      | FailedbulkyFile<TMeta, TBody>;
  };
  info?: {
    isHidden: boolean;
    type: string;
    message: string;
    details: string;
  };
  plugins?: IndexedObject<any>;
  totalProgress: number;
}

export interface ErrorResponse {
  status: number;
  body: any;
}

export interface SuccessResponse {
  uploadURL?: string;
  status?: number;
  body?: any;
  bytesUploaded?: number;
}

export type GenericEventCallback = () => void;
export type FileAddedCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta>
) => void;
export type FilesAddedCallback<TMeta extends IndexedObject<any>> = (
  files: bulkyFile<TMeta>[]
) => void;
export type FileRemovedCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta>,
  reason: FileRemoveReason
) => void;
export type UploadCallback = (data: { id: string; fileIDs: string[] }) => void;
export type ProgressCallback = (progress: number) => void;
export type PreProcessCompleteCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta> | undefined
) => void;
export type UploadProgressCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta> | undefined,
  progress: FileProgress
) => void;
export type UploadSuccessCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta> | undefined,
  response: SuccessResponse
) => void;
export type UploadCompleteCallback<TMeta extends IndexedObject<any>> = (
  result: UploadResult<TMeta>
) => void;
export type ErrorCallback = (error: Error) => void;
export type UploadErrorCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta> | undefined,
  error: Error,
  response?: ErrorResponse
) => void;
export type UploadRetryCallback = (fileID: string) => void;
export type RetryAllCallback = (fileIDs: string[]) => void;
export type RestrictionFailedCallback<TMeta extends IndexedObject<any>> = (
  file: bulkyFile<TMeta> | undefined,
  error: Error
) => void;

export interface bulkyEventMap<
  TMeta extends IndexedObject<any> = Record<string, unknown>
> {
  "file-added": FileAddedCallback<TMeta>;
  "files-added": FilesAddedCallback<TMeta>;
  "file-removed": FileRemovedCallback<TMeta>;
  upload: UploadCallback;
  progress: ProgressCallback;
  "preprocess-complete": PreProcessCompleteCallback<TMeta>;
  "upload-progress": UploadProgressCallback<TMeta>;
  "upload-success": UploadSuccessCallback<TMeta>;
  complete: UploadCompleteCallback<TMeta>;
  error: ErrorCallback;
  "upload-error": UploadErrorCallback<TMeta>;
  "upload-retry": UploadRetryCallback;
  "retry-all": RetryAllCallback;
  "info-visible": GenericEventCallback;
  "info-hidden": GenericEventCallback;
  "cancel-all": GenericEventCallback;
  "restriction-failed": RestrictionFailedCallback<TMeta>;
  "reset-progress": GenericEventCallback;
}

export class bulky {
  constructor(opts?: bulkyOptions);

  on<K extends keyof bulkyEventMap>(event: K, callback: bulkyEventMap[K]): this;

  on<K extends keyof bulkyEventMap, TMeta extends IndexedObject<any>>(
    event: K,
    callback: bulkyEventMap<TMeta>[K]
  ): this;

  once<K extends keyof bulkyEventMap>(
    event: K,
    callback: bulkyEventMap[K]
  ): this;

  once<K extends keyof bulkyEventMap, TMeta extends IndexedObject<any>>(
    event: K,
    callback: bulkyEventMap<TMeta>[K]
  ): this;

  off<K extends keyof bulkyEventMap>(
    event: K,
    callback: bulkyEventMap[K]
  ): this;

  off<K extends keyof bulkyEventMap, TMeta extends IndexedObject<any>>(
    event: K,
    callback: bulkyEventMap<TMeta>[K]
  ): this;

  /**
   * For use by plugins only.
   */
  emit(event: string, ...args: any[]): void;

  updateAll(state: Record<string, unknown>): void;

  setOptions(update: Partial<bulkyOptions>): void;

  setState(patch: Record<string, unknown>): void;

  getState<
    TMeta extends IndexedObject<any> = Record<string, unknown>
  >(): State<TMeta>;

  readonly state: State;

  setFileState(fileID: string, state: Record<string, unknown>): void;

  resetProgress(): void;

  addPreProcessor(fn: UploadHandler): void;

  removePreProcessor(fn: UploadHandler): void;

  addPostProcessor(fn: UploadHandler): void;

  removePostProcessor(fn: UploadHandler): void;

  addUploader(fn: UploadHandler): void;

  removeUploader(fn: UploadHandler): void;

  setMeta<TMeta extends IndexedObject<any> = Record<string, unknown>>(
    data: TMeta
  ): void;

  setFileMeta<TMeta extends IndexedObject<any> = Record<string, unknown>>(
    fileID: string,
    data: TMeta
  ): void;

  getFile<
    TMeta extends IndexedObject<any> = Record<string, unknown>,
    TBody extends IndexedObject<any> = Record<string, unknown>
  >(fileID: string): bulkyFile<TMeta, TBody>;

  getFiles<
    TMeta extends IndexedObject<any> = Record<string, unknown>,
    TBody extends IndexedObject<any> = Record<string, unknown>
  >(): Array<bulkyFile<TMeta, TBody>>;

  getObjectOfFilesPerState(): {
    newFiles: Array<bulkyFile>;
    startedFiles: Array<bulkyFile>;
    uploadStartedFiles: Array<bulkyFile>;
    pausedFiles: Array<bulkyFile>;
    completeFiles: Array<bulkyFile>;
    erroredFiles: Array<bulkyFile>;
    inProgressFiles: Array<bulkyFile>;
    inProgressNotPausedFiles: Array<bulkyFile>;
    processingFiles: Array<bulkyFile>;
    isUploadStarted: boolean;
    isAllComplete: boolean;
    isAllErrored: boolean;
    isAllPaused: boolean;
    isUploadInProgress: boolean;
    isSomeGhost: boolean;
  };

  addFile<TMeta extends IndexedObject<any> = Record<string, unknown>>(
    file: AddFileOptions<TMeta>
  ): string;

  addFiles<TMeta extends IndexedObject<any> = Record<string, unknown>>(
    files: AddFileOptions<TMeta>[]
  ): void;

  removeFile(fileID: string, reason?: FileRemoveReason): void;

  pauseResume(fileID: string): boolean;

  pauseAll(): void;

  resumeAll(): void;

  retryAll<
    TMeta extends IndexedObject<any> = Record<string, unknown>
  >(): Promise<UploadResult<TMeta>>;

  cancelAll(options?: CancelOptions): void;

  retryUpload<TMeta extends IndexedObject<any> = Record<string, unknown>>(
    fileID: string
  ): Promise<UploadResult<TMeta>>;

  getID(): string;

  use<
    TOptions extends PluginOptions,
    TInstance extends UIPlugin | BasePlugin<TOptions>
  >(
    pluginClass: new (bulky: this, opts?: TOptions) => TInstance,
    opts?: TOptions
  ): this;

  getPlugin<TPlugin extends UIPlugin | BasePlugin>(
    name: string
  ): TPlugin | undefined;

  iteratePlugins(callback: (plugin: UIPlugin | BasePlugin) => void): void;

  removePlugin(instance: UIPlugin | BasePlugin): void;

  close(options?: CancelOptions): void;

  logout(): void;

  info(
    message: string | { message: string; details: string },
    type?: LogLevel,
    duration?: number
  ): void;

  hideInfo(): void;

  log(msg: string, type?: LogLevel): void;

  restore<TMeta extends IndexedObject<any> = Record<string, unknown>>(
    uploadID: string
  ): Promise<UploadResult<TMeta>>;

  addResultData(uploadID: string, data: Record<string, unknown>): void;

  upload<TMeta extends IndexedObject<any> = Record<string, unknown>>(): Promise<
    UploadResult<TMeta>
  >;
}

export default bulky;
