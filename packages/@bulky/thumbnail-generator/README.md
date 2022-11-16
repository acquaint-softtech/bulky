# @bulky/thumbnail-generator

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/thumbnail-generator.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/thumbnail-generator)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

bulky plugin that generates small previews of images to show on your upload UI.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import ThumbnailGenerator from "@bulky/thumbnail-generator";

const bulky = new bulky();
bulky.use(ThumbnailGenerator, {
  thumbnailWidth: 200,
});
```

## Installation

```bash
$ npm install @bulky/thumbnail-generator
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

<!-- Undocumented currently
## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/DOC_PAGE_HERE).
-->

## License

[The MIT License](./LICENSE).
