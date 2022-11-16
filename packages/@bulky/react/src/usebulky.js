import { useEffect, useRef } from "react";
import { bulky as bulkyCore } from "@bulky/core";

export default function usebulky(factory) {
  if (typeof factory !== "function") {
    throw new TypeError(
      "usebulky: expected a function that returns a new bulky instance"
    );
  }

  const bulky = useRef(undefined);
  if (bulky.current === undefined) {
    bulky.current = factory();

    if (!(bulky.current instanceof bulkyCore)) {
      throw new TypeError(
        `usebulky: factory function must return an bulky instance, got ${typeof bulky.current}`
      );
    }
  }

  useEffect(() => {
    return () => {
      bulky.current?.close({ reason: "unmount" });
      bulky.current = undefined;
    };
  }, [bulky]);

  return bulky.current;
}
