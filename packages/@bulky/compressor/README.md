# @bulky/compressor

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

<a href="https://www.npmjs.com/package/@bulky/compressor"><img src="https://img.shields.io/npm/v/@bulky/compressor.svg?style=flat-square"></a> <img src="https://github.com/transloadit/bulky/workflows/Tests/badge.svg" alt="CI status for bulky tests"> <img src="https://github.com/transloadit/bulky/workflows/Companion/badge.svg" alt="CI status for Companion tests"> <img src="https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg" alt="CI status for browser tests">

The Compressor plugin for bulky optimizes images (JPEG, PNG, WEBP), saving on average up to 60% in size (roughly 18 MB for 10 images). It uses [Compressor.js](https://github.com/fengyuanchen/compressorjs).

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Compressor from "@bulky/compressor";

const bulky = new bulky();
bulky.use(Compressor);
```

## Installation

```bash
npm install @bulky/compressor
```

We recommend installing from yarn or npm, and then using a module bundler such as [Parcel](https://parceljs.org/), [Vite](https://vitejs.dev/) or [Webpack](https://webpack.js.org/).

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/compressor).

## License

[The MIT License](./LICENSE).
