import { describe, expect, it } from "@jest/globals";
import Core from "@bulky/core";
import Tus from "./index.js";

describe("Tus", () => {
  it("Throws errors if autoRetry option is true", () => {
    const bulky = new Core();

    expect(() => {
      bulky.use(Tus, { autoRetry: true });
    }).toThrowError(
      /The `autoRetry` option was deprecated and has been removed/
    );
  });

  it("Throws errors if autoRetry option is false", () => {
    const bulky = new Core();

    expect(() => {
      bulky.use(Tus, { autoRetry: false });
    }).toThrowError(
      /The `autoRetry` option was deprecated and has been removed/
    );
  });

  it("Throws errors if autoRetry option is `undefined`", () => {
    const bulky = new Core();

    expect(() => {
      bulky.use(Tus, { autoRetry: undefined });
    }).toThrowError(
      /The `autoRetry` option was deprecated and has been removed/
    );
  });
});
