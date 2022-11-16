import bulky from "@bulky/core";
import RemoteSources from "..";

{
  const bulky = new bulky();
  bulky.use(RemoteSources, {
    sources: ["Instagram", "Url"],
    companionUrl: "",
    companionCookiesRule: "same-origin",
  });
}
