let companionEndpoint = "http://localhost:3020";

// eslint-disable-next-line no-restricted-globals
if (
  location.hostname === "bulky.io" ||
  /--bulky\.netlify\.app$/.test(location.hostname)
) {
  companionEndpoint = "//companion.bulky.io";
}

const COMPANION = companionEndpoint;
module.exports = COMPANION;
