import { describe, expect, it } from "@jest/globals";
import Core from "@bulky/core";
import Transloadit from "./index.js";
import "whatwg-fetch";

describe("Transloadit", () => {
  it("Throws errors if options are missing", () => {
    const bulky = new Core();

    expect(() => {
      bulky.use(Transloadit, { params: {} });
    }).toThrowError(/The `params\.auth\.key` option is required/);
  });

  it("Accepts a JSON string as `params` for signature authentication", () => {
    const bulky = new Core();

    expect(() => {
      bulky.use(Transloadit, {
        params: "not json",
      });
    }).toThrowError(/The `params` option is a malformed JSON string/);

    expect(() => {
      bulky.use(Transloadit, {
        params: '{"template_id":"some template id string"}',
      });
    }).toThrowError(/The `params\.auth\.key` option is required/);
    expect(() => {
      bulky.use(Transloadit, {
        params:
          '{"auth":{"key":"some auth key string"},"template_id":"some template id string"}',
      });
    }).not.toThrowError(/The `params\.auth\.key` option is required/);
  });

  it("Does not leave lingering progress if getAssemblyOptions fails", () => {
    const error = new Error("expected failure");
    const bulky = new Core();
    bulky.use(Transloadit, {
      getAssemblyOptions() {
        return Promise.reject(error);
      },
    });

    bulky.addFile({
      source: "jest",
      name: "abc",
      data: new Uint8Array(100),
    });

    return bulky
      .upload()
      .then(() => {
        throw new Error("Should not have succeeded");
      })
      .catch((err) => {
        const fileID = Object.keys(bulky.getState().files)[0];

        expect(err).toBe(error);
        expect(bulky.getFile(fileID).progress.uploadStarted).toBe(null);
      });
  });

  it("Does not leave lingering progress if creating assembly fails", () => {
    const bulky = new Core();
    bulky.use(Transloadit, {
      params: {
        auth: { key: "some auth key string" },
        template_id: "some template id string",
      },
    });

    bulky.getPlugin("Transloadit").client.createAssembly = () =>
      Promise.reject(new Error("VIDEO_ENCODE_VALIDATION"));

    bulky.addFile({
      source: "jest",
      name: "abc",
      data: new Uint8Array(100),
    });

    return bulky.upload().then(
      () => {
        throw new Error("Should not have succeeded");
      },
      (err) => {
        const fileID = Object.keys(bulky.getState().files)[0];

        expect(err.message).toBe(
          "Transloadit: Could not create Assembly: VIDEO_ENCODE_VALIDATION"
        );
        expect(bulky.getFile(fileID).progress.uploadStarted).toBe(null);
      }
    );
  });
});
