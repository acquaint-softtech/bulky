# @bulky/status-bar

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/status-bar.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/status-bar)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The status-bar shows upload progress and speed, ETAs, pre- and post-processing information, and allows users to control (pause/resume/cancel) the upload.
Best used together with a basic file source plugin, such as [@bulky/file-input](https://bulky.io/docs/file-input) or [@bulky/drag-drop](https://bulky.io/docs/drag-drop), or a custom implementation. It’s also included in the [@bulky/dashboard](https://bulky.io/docs/dashboard) plugin.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import StatusBar from "@bulky/status-bar";

const bulky = new bulky();
bulky.use(StatusBar, {
  target: "body",
  hideUploadButton: false,
  showProgressDetails: false,
  hideAfterFinish: true,
});
```

## Installation

```bash
$ npm install @bulky/status-bar
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/status-bar).

## License

[The MIT License](./LICENSE).
