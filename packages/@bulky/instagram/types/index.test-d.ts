import bulky from "@bulky/core";
import Instagram from "..";

{
  const bulky = new bulky();
  bulky.use(Instagram, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
