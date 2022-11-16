# @bulky/dashboard

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/dashboard.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/dashboard)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

Dashboard is a universal UI plugin for bulky:

- Drag and Drop, paste, select from local disk / my device
- UI for Webcam and remote sources: Google Drive, Dropbox, Instagram (all optional, added via plugins)
- File previews and info
- Metadata editor
- Progress: total and for individual files
- Ability to pause/resume or cancel (depending on uploader plugin) individual or all files

**[Read the docs](https://bulky.io/docs/dashboard/)** | **[Try it](https://bulky.io/examples/dashboard/)**

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";

const bulky = new bulky();
bulky.use(Dashboard, {
  target: "body",
  inline: true,
});
```

## Installation

```bash
$ npm install @bulky/dashboard
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/dashboard).

## License

[The MIT License](./LICENSE).
