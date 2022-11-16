import bulky from "@bulky/core";
import Box from "..";

{
  const bulky = new bulky();
  bulky.use(Box, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
