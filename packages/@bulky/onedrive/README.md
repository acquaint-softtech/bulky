# @bulky/onedrive

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/facebook.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/facebook)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The OneDrive plugin for bulky lets users import files from their OneDrive account.

A Companion instance is required for the OneDrive plugin to work. Companion handles authentication with Microsoft OneDrive, downloads files from OneDrive and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Facebook from "@bulky/onedrive";

const bulky = new bulky();
bulky.use(OneDrive, {
  // Options
});
```

## Installation

```bash
$ npm install @bulky/onedrive
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/facebook).

## License

[The MIT License](./LICENSE).
