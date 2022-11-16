import { bulky } from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import Tus from "@bulky/tus";
import Unsplash from "@bulky/unsplash";
import Url from "@bulky/url";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

function onShouldRetry(err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true;
  }
  return next(err);
}

const companionUrl = "http://localhost:3020";
const bulky = new bulky()
  .use(Dashboard, { target: "#app", inline: true })
  .use(Tus, { endpoint: "https://tusd.tusdemo.net/files", onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl });

// Keep this here to access bulky in tests
window.bulky = bulky;
