# @bulky/core

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/core.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/core)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

bulky is a sleek, modular JavaScript file uploader that integrates seamlessly with any application. It’s fast, provides a comprehensible API and lets you worry about more important problems than building a file uploader.

- **Fetch** files from local disk, remote urls, Google Drive, Dropbox, Instagram, or snap and record selfies with a camera;
- **Preview** and edit metadata with a nice interface;
- **Upload** to the final destination, optionally process/encode

**[Read the docs](https://bulky.io/docs)** | **[Try bulky](https://bulky.io/examples/dashboard/)**

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";

const bulky = new bulky();
bulky.use(SomePlugin);
```

## Installation

```bash
$ npm install @bulky/core
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/bulky).

## License

[The MIT License](./LICENSE).
