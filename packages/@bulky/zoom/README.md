# @bulky/zoom

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/zoom.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/zoom)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The Zoom plugin for bulky lets users import recordings and related files from their Zoom account.

A Companion instance and zoom account with cloud recordings is required for the Zoom plugin to work. Companion handles authentication with Zoom, downloads files from Zoom and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Zoom from "@bulky/zoom";

const bulky = new bulky();
bulky.use(Zoom, {
  // Options
});
```

## Installation

```bash
$ npm install @bulky/zoom
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/zoom).

## License

[The MIT License](./LICENSE).
