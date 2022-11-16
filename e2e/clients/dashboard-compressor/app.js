import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import Compressor from "@bulky/compressor";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

const bulky = new bulky()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: "image/webp",
  });

// Keep this here to access bulky in tests
window.bulky = bulky;
