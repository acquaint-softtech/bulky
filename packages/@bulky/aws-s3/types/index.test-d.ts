import { expectType } from "tsd";
import bulky from "@bulky/core";
import type { bulkyFile } from "@bulky/core";
import AwsS3 from "..";

{
  const bulky = new bulky();
  bulky.use(AwsS3, {
    getUploadParameters(file) {
      expectType<bulkyFile>(file);
      return { url: "" };
    },
  });
}
