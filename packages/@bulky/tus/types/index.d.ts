import type { PluginOptions, BasePlugin, bulkyFile } from "@bulky/core";
import type { UploadOptions, HttpRequest } from "tus-js-client";

type TusUploadOptions = Pick<
  UploadOptions,
  Exclude<
    keyof UploadOptions,
    | "fingerprint"
    | "metadata"
    | "onBeforeRequest"
    | "onProgress"
    | "onChunkComplete"
    | "onShouldRetry"
    | "onSuccess"
    | "onError"
    | "uploadUrl"
    | "uploadSize"
  >
>;

type Next = (
  err: Error | undefined,
  retryAttempt?: number,
  options?: TusOptions
) => boolean;

export interface TusOptions extends PluginOptions, TusUploadOptions {
  allowedMetaFields?: string[] | null;
  limit?: number;
  useFastRemoteRetry?: boolean;
  withCredentials?: boolean;
  onShouldRetry?: (
    err: Error | undefined,
    retryAttempt: number,
    options: TusOptions,
    next: Next
  ) => boolean;
  onBeforeRequest?: (req: HttpRequest, file: bulkyFile) => Promise<void>;
}

declare class Tus extends BasePlugin<TusOptions> {}

export default Tus;
