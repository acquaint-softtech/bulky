import bulky from "@bulky/core";
import Zoom from "..";

{
  const bulky = new bulky();
  bulky.use(Zoom, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
