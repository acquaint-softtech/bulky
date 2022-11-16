# @bulky/redux-dev-tools

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/redux-dev-tools.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/redux-dev-tools)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

ReduxDevTools plugin that syncs with redux-devtools browser or JS extensions, and allows for basic time travel:

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import ReduxDevTools from "bulky/redux-dev-tools";

const bulky = new bulky();
bulky.use(ReduxDevTools);
```

## Installation

```bash
$ npm install @bulky/redux-dev-tools
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/redux-dev-tools).

## License

[The MIT License](./LICENSE).
