# @bulky/transloadit

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/transloadit.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/transloadit)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The Transloadit plugin can be used to upload files to Transloadit for all kinds of processing, such as transcoding video, resizing images, zipping/unzipping, [and more](https://transloadit.com/services/).

[Try it live →](https://bulky.io/examples/transloadit/)

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Transloadit from "@bulky/transloadit";

const bulky = new bulky();
bulky.use(Transloadit, {
  // Plugins
});
```

## Installation

```bash
$ npm install @bulky/transloadit
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/transloadit).

## License

[The MIT License](./LICENSE).
