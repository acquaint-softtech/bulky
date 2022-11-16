# @bulky/tus

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/tus.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/tus)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The Tus plugin brings [tus.io][] resumable file uploading to bulky by wrapping the [tus-js-client][].

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Tus from "@bulky/tus";

const bulky = new bulky();
bulky.use(Tus, {
  endpoint: "https://tusd.tusdemo.net/files/", // use your tus endpoint here
  resume: true,
  retryDelays: [0, 1000, 3000, 5000],
});
```

## Installation

```bash
$ npm install @bulky/tus
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/tus).

## License

[The MIT License](./LICENSE).

[tus.io]: https://tus.io
[tus-js-client]: https://github.com/tus/tus-js-client
