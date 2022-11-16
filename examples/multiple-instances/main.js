import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import GoldenRetriever from "@bulky/golden-retriever";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

// Initialise two bulky instances with the GoldenRetriever plugin,
// but with different `id`s.
const a = new bulky({
  id: "a",
  debug: true,
})
  .use(Dashboard, {
    target: "#a",
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false });

const b = new bulky({
  id: "b",
  debug: true,
})
  .use(Dashboard, {
    target: "#b",
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false });

window.a = a;
window.b = b;
