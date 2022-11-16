/* eslint-disable @typescript-eslint/no-unused-vars */
import { expectError, expectType } from "tsd";
import DefaultStore from "@bulky/store-default";
// eslint-disable-next-line import/no-named-as-default
import bulky, { UIPlugin } from "..";
import type {
  UploadedbulkyFile,
  FailedbulkyFile,
  PluginOptions,
  bulkyFile,
  SuccessResponse,
} from "..";

type anyObject = Record<string, unknown>;

{
  const bulky = new bulky();
  bulky.addFile({
    data: new Blob([new ArrayBuffer(1024)], {
      type: "application/octet-stream",
    }),
  });

  bulky.upload().then((result) => {
    expectType<UploadedbulkyFile<anyObject, anyObject>>(result.successful[0]);
    expectType<FailedbulkyFile<anyObject, anyObject>>(result.failed[0]);
  });
}

{
  const store = new DefaultStore();
  new bulky({ store }); // eslint-disable-line no-new
}

{
  const bulky = new bulky();
  // this doesn't exist but type checking works anyway :)
  const f = bulky.getFile("virtual");
  if (f && f.progress && f.progress.uploadStarted === null) {
    f.progress.uploadStarted = Date.now();
  }

  if (f && f.response && f.response.status === 200) {
    expectType(f.response.body);
  }
  expectType<number>(f.response!.status); // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

{
  type Meta = Record<string, never>;
  type ResponseBody = {
    averageColor: string;
  };
  const bulky = new bulky();
  const f = bulky.getFile<Meta, ResponseBody>("virtual");
  expectType<ResponseBody>(f.response!.body); // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

{
  const bulky = new bulky();
  bulky.addFile({
    name: "empty.json",
    data: new Blob(["null"], { type: "application/json" }),
    meta: { path: "path/to/file" },
  });
}

{
  interface SomeOptions extends PluginOptions {
    types: "are checked";
  }
  class SomePlugin extends UIPlugin<SomeOptions> {}
  const typedbulky = new bulky();

  expectError(typedbulky.use(SomePlugin, { types: "error" }));

  typedbulky.use(SomePlugin, { types: "are checked" });
}

{
  /* eslint-disable @typescript-eslint/no-empty-function */
  const bulky = new bulky();
  // can emit events with internal event types
  bulky.emit("upload");
  bulky.emit("complete", () => {});
  bulky.emit("error", () => {});

  // can emit events with custom event types
  bulky.emit("dashboard:modal-closed", () => {});

  // can register listeners for internal events
  bulky.on("upload", () => {});
  bulky.on("complete", () => {});
  bulky.on("error", () => {});
  bulky.once("upload", () => {});
  bulky.once("complete", () => {});
  bulky.once("error", () => {});
  /* eslint-enable @typescript-eslint/no-empty-function */

  // Normal event signature
  bulky.on("complete", (result) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const successResults = result.successful;
  });

  // Meta signature
  type Meta = { myCustomMetadata: string };
  bulky.on<"complete", Meta>("complete", (result) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const meta = result.successful[0].meta.myCustomMetadata;
  });

  // Separate event handlers
  const handleUpload = (file?: bulkyFile<Meta>) => {
    const meta = file?.meta.myCustomMetadata;
  };

  bulky.off<"upload-success", Meta>("upload-success", handleUpload);

  interface CustomResponse extends SuccessResponse {
    body?: { someValue: string };
  }

  const onUploadSuccess = async (
    file: bulkyFile<Meta, any> | undefined,
    response: CustomResponse
  ) => {
    const res = response.body?.someValue;
  };
  bulky.on<"upload-success", Meta>("upload-success", onUploadSuccess);
}

{
  const bulky = new bulky();
  bulky.setOptions({
    restrictions: {
      allowedFileTypes: [".png"],
    },
  });
  expectError(bulky.setOptions({ restrictions: false }));
  expectError(bulky.setOptions({ unknownKey: false }));
}

{
  interface TestOptions extends PluginOptions {
    testOption: string;
  }
  class TestPlugin extends UIPlugin<TestOptions> {}

  const strict = new bulky().use(TestPlugin, { testOption: "hello" });

  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  strict
    .getPlugin<TestPlugin>("TestPlugin")!
    .setOptions({ testOption: "world" });

  expectError(
    strict.getPlugin<TestPlugin>("TestPlugin")!.setOptions({ testOption: 0 })
  );

  expectError(
    strict
      .getPlugin<TestPlugin>("TestPlugin")!
      .setOptions({ unknownKey: false })
  );
  /* eslint-enable @typescript-eslint/no-non-null-assertion */
}
