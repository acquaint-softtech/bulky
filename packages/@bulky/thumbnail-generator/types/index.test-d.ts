import bulky from "@bulky/core";
import ThumbnailGenerator from "..";

{
  const bulky = new bulky();
  bulky.use(ThumbnailGenerator, {
    thumbnailWidth: 100,
    thumbnailHeight: 100,
    thumbnailType: "type",
    waitForThumbnailsBeforeUpload: true,
    lazy: true,
    locale: {
      strings: {
        generatingThumbnails: "",
      },
    },
  });

  bulky.on("thumbnail:generated", (file, preview) => {
    const img = document.createElement("img");
    img.src = preview;
    img.width = 100;
    document.body.appendChild(img);
  });
}
