import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import AwsS3 from "@bulky/aws-s3";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

const bulky = new bulky({
  debug: true,
});

bulky.use(Dashboard, {
  inline: true,
  target: "body",
});

// No client side changes needed!
bulky.use(AwsS3, { companionUrl: "/companion" });
