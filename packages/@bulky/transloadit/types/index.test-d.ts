import { expectError, expectType } from "tsd";
import bulky from "@bulky/core";
import type { bulkyFile } from "@bulky/core";
import Transloadit, { COMPANION_ALLOWED_HOSTS, COMPANION_URL } from "..";

expectType<string>(Transloadit.COMPANION);
expectType<string>(COMPANION_URL);
expectType<RegExp>(Transloadit.COMPANION_PATTERN);
expectType<RegExp>(COMPANION_ALLOWED_HOSTS);

const validParams = {
  auth: { key: "not so secret key" },
};

{
  const bulky = new bulky();
  bulky.use(Transloadit, {
    getAssemblyOptions(file) {
      expectType<bulkyFile>(file);
      return { params: validParams };
    },
    waitForEncoding: false,
    waitForMetadata: true,
    importFromUploadURLs: false,
    params: {
      auth: { key: "abc" },
      steps: {},
    },
  });
  // Access to both transloadit events and core events
  bulky.on("transloadit:assembly-created", (assembly) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const status = assembly.ok;
  });

  bulky.on("complete", (result) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const success = result.successful;
  });
}

{
  const bulky = new bulky();
  // must be bools
  expectError(
    bulky.use(Transloadit, { waitForEncoding: null, params: validParams })
  );
  expectError(
    bulky.use(Transloadit, { waitForMetadata: null, params: validParams })
  );
}

{
  const bulky = new bulky();
  // params.auth.key must be string
  expectError(bulky.use(Transloadit, { params: {} }));
  expectError(bulky.use(Transloadit, { params: { auth: {} } }));
  expectError(
    bulky.use(Transloadit, {
      params: {
        auth: { key: null },
      },
    })
  );
  expectError(
    bulky.use(Transloadit, {
      params: {
        auth: { key: "abc" },
        steps: "test",
      },
    })
  );
  bulky.use(Transloadit, {
    params: {
      auth: { key: "abc" },
      steps: { name: {} },
    },
  });
}
