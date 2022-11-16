import bulky from "@bulky/core";
import Dropbox from "..";

{
  const bulky = new bulky();
  bulky.use(Dropbox, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
