# @bulky/golden-retriever

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/golden-retriever.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/golden-retriever)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The GoldenRetriever plugin saves selected files in your browser cache (Local Storage for metadata, then Service Worker for all blobs + IndexedDB for small blobs), so that if the browser crashes, bulky can restore everything and continue uploading like nothing happened. Read more about it [on the blog](https://bulky.io/blog/2017/07/golden-retriever/).

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import GoldenRetriever from "@bulky/golden-retriever";

const bulky = new bulky();
bulky.use(GoldenRetriever, {
  // Options
});
```

## Installation

```bash
$ npm install @bulky/golden-retriever
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/golden-retriever).

## License

[The MIT License](./LICENSE).
