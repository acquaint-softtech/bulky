import { bulky } from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import Transloadit from "@bulky/transloadit";

import generateSignatureIfSecret from "./generateSignatureIfSecret.js";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

// Environment variables:
// https://en.parceljs.org/env.html
const bulky = new bulky()
  .use(Dashboard, { target: "#app", inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () =>
      generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
        auth: { key: process.env.VITE_TRANSLOADIT_KEY },
        template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
      }),
  });

// Keep this here to access bulky in tests
window.bulky = bulky;
