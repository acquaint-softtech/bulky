# @bulky/audio

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

<a href="https://www.npmjs.com/package/@bulky/audio"><img src="https://img.shields.io/npm/v/@bulky/webcam.svg?style=flat-square"></a> <img src="https://github.com/transloadit/bulky/workflows/Tests/badge.svg" alt="CI status for bulky tests"> <img src="https://github.com/transloadit/bulky/workflows/Companion/badge.svg" alt="CI status for Companion tests"> <img src="https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg" alt="CI status for browser tests">

The Audio plugin for bulky lets you record audio using a built-in or external microphone, or any other audio device, on desktop and mobile.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Webcam from "@bulky/audio";

const bulky = new bulky();
bulky.use(Audio);
```

## Installation

```bash
$ npm install @bulky/audio
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/webcam).

## License

[The MIT License](./LICENSE).
