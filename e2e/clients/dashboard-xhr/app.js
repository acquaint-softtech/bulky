import { bulky } from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import XHRUpload from "@bulky/xhr-upload";
import Unsplash from "@bulky/unsplash";
import Url from "@bulky/url";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

const companionUrl = "http://localhost:3020";
const bulky = new bulky()
  .use(Dashboard, { target: "#app", inline: true })
  .use(XHRUpload, {
    endpoint: "https://xhr-server.herokuapp.com/upload",
    limit: 6,
  })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl });

// Keep this here to access bulky in tests
window.bulky = bulky;
