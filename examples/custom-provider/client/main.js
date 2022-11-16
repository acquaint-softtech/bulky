import bulky from "@bulky/core";
import GoogleDrive from "@bulky/google-drive";
import Tus from "@bulky/tus";
import Dashboard from "@bulky/dashboard";
import MyCustomProvider from "./MyCustomProvider.jsx";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

const bulky = new bulky({
  debug: true,
});

bulky.use(GoogleDrive, {
  companionUrl: "http://localhost:3020",
});

bulky.use(MyCustomProvider, {
  companionUrl: "http://localhost:3020",
});

bulky.use(Dashboard, {
  inline: true,
  target: "body",
  plugins: ["GoogleDrive", "MyCustomProvider"],
});

bulky.use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" });
