# @bulky/store-default

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/store-default.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/store-default)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

A basic object-based store for bulky. This one is used by default, you do not need to add it manually.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import DefaultStore from "@bulky/store-default";

const bulky = new bulky({
  store: new DefaultStore(),
});
```

## Installation

```bash
$ npm install @bulky/store-default
```

Alternatively, you can also use this package in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/stores#DefaultStore).

## License

[The MIT License](./LICENSE).
