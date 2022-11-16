import bulky from "@bulky/core";
import Unsplash from "..";

{
  const bulky = new bulky();
  bulky.use(Unsplash, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
