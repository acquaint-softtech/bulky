import type { PluginOptions, BasePlugin, bulkyFile } from "@bulky/core";

type MaybePromise<T> = T | Promise<T>;

export interface AwsS3UploadParameters {
  method?: string;
  url: string;
  fields?: { [type: string]: string };
  headers?: { [type: string]: string };
}

export interface AwsS3Options extends PluginOptions {
  companionUrl?: string;
  getUploadParameters?: (
    file: bulkyFile
  ) => MaybePromise<AwsS3UploadParameters>;
  allowedMetaFields?: string[] | null;
  timeout?: number;
  limit?: number;
}

declare class AwsS3 extends BasePlugin<AwsS3Options> {}

export default AwsS3;
