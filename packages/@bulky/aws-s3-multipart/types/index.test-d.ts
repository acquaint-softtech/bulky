import { expectError, expectType } from "tsd";
import bulky from "@bulky/core";
import type { bulkyFile } from "@bulky/core";
import AwsS3Multipart from "..";
import type { AwsS3Part } from "..";

{
  const bulky = new bulky();
  bulky.use(AwsS3Multipart, {
    createMultipartUpload(file) {
      expectType<bulkyFile>(file);
      return { uploadId: "", key: "" };
    },
    listParts(file, opts) {
      expectType<bulkyFile>(file);
      expectType<string>(opts.uploadId);
      expectType<string>(opts.key);
      return [];
    },
    prepareUploadParts(file, partData) {
      expectType<bulkyFile>(file);
      expectType<string>(partData.uploadId);
      expectType<string>(partData.key);
      expectType<[{ number: number; chunk: Blob }]>(partData.parts);
      return { presignedUrls: {} };
    },
    abortMultipartUpload(file, opts) {
      expectType<bulkyFile>(file);
      expectType<string>(opts.uploadId);
      expectType<string>(opts.key);
    },
    completeMultipartUpload(file, opts) {
      expectType<bulkyFile>(file);
      expectType<string>(opts.uploadId);
      expectType<string>(opts.key);
      expectType<AwsS3Part>(opts.parts[0]);
      return {};
    },
  });
}

{
  const bulky = new bulky();
  expectError(bulky.use(AwsS3Multipart, { getChunkSize: 100 }));
  expectError(
    bulky.use(AwsS3Multipart, { getChunkSize: () => "not a number" })
  );
  bulky.use(AwsS3Multipart, { getChunkSize: () => 100 });
  bulky.use(AwsS3Multipart, { getChunkSize: (file) => file.size });
}
