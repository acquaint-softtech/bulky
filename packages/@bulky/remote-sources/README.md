# @bulky/remote-sources

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

<a href="https://www.npmjs.com/package/@bulky/remote-sources"><img src="https://img.shields.io/npm/v/@bulky/compressor.svg?style=flat-square"></a> <img src="https://github.com/transloadit/bulky/workflows/Tests/badge.svg" alt="CI status for bulky tests"> <img src="https://github.com/transloadit/bulky/workflows/Companion/badge.svg" alt="CI status for Companion tests"> <img src="https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg" alt="CI status for browser tests">

## Example

```js
import bulky from "@bulky/core";
import RemoteSources from "@bulky/remote-sources";

const bulky = new bulky();
bulky.use(RemoteSources, {
  companionUrl: "https://your-companion-url",
});
```

## Installation

```bash
npm install @bulky/remote-sources
# or
yarn add @bulky/remote-sources
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky.RemoteSources` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/remote-sources).

## License

[The MIT License](./LICENSE).
