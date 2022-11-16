# @bulky/image-editor

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/image-editor.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/image-editor)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

Image Editor is an image cropping and editing plugin for bulky. Designed to be used with the Dashboard UI (can in theory work without it).

⚠ In beta.

**[Read the docs](https://bulky.io/docs/image-editor)** | **[Try it](https://bulky.io/examples/dashboard/)**

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import ImageEditor from "@bulky/image-editor";

const bulky = new bulky();
bulky.use(Dashboard);
bulky.use(ImageEditor, {
  target: Dashboard,
  quality: 0.7,
});
```

## Installation

```bash
$ npm install @bulky/image-editor
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/image-editor).

## License

[The MIT License](./LICENSE).
