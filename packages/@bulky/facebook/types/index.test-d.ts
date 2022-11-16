import bulky from "@bulky/core";
import Facebook from "..";

{
  const bulky = new bulky();
  bulky.use(Facebook, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
