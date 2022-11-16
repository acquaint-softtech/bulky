import bulky from "@bulky/core";
import Url from "..";

{
  const bulky = new bulky();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  bulky
    .use(Url, {
      companionUrl: "",
      companionCookiesRule: "same-origin",
      target: "body",
      title: "title",
      locale: {
        strings: {
          import: "",
          enterUrlToImport: "",
          failedToFetch: "",
          enterCorrectUrl: "",
        },
      },
    })
    .getPlugin<Url>("Url")!
    .addFile("https://via.placeholder.com/150");
}
