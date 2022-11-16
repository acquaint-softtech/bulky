# @bulky/file-input

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/file-input.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/file-input)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

FileInput is the most barebones UI for selecting files—it shows a single button that, when clicked, opens up the browser’s file selector.

**[Read the docs](https://bulky.io/docs/fileinput)** | **[Try it](https://bulky.io/examples/xhrupload/)**

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import FileInput from "@bulky/file-input";

const bulky = new bulky();
bulky.use(FileInput, {
  // Options
});
```

## Installation

```bash
$ npm install @bulky/file-input
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/fileinput).

## License

[The MIT License](./LICENSE).
