import bulky from "@bulky/core";
import OneDrive from "..";

{
  const bulky = new bulky();
  bulky.use(OneDrive, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
