import { bulky } from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import AwsS3 from "@bulky/aws-s3";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

const bulky = new bulky()
  .use(Dashboard, { target: "#app", inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  });

// Keep this here to access bulky in tests
window.bulky = bulky;
