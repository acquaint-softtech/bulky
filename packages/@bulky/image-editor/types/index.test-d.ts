// TODO implement

import bulky from "@bulky/core";
import ImageEditor from "..";

{
  const bulky = new bulky();

  bulky.use(ImageEditor);

  bulky.on("file-editor:start", (file) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fileName = file.name;
  });
  bulky.on("file-editor:complete", (file) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fileName = file.name;
  });
  bulky.on("file-editor:cancel", (file) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fileName = file.name;
  });
}
