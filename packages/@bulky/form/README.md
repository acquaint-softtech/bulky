# @bulky/form

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/form.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/form)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The Form plugin collects metadata from any specified `<form>` element, right before bulky begins uploading/processing files. It optionally appends results back to the form. The appended result is a stringified version of a result returned from `bulky.upload()`.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import Form from "@bulky/form";

const bulky = new bulky();
bulky.use(Form, {
  target: document.querySelector("form"),
  getMetaFromForm: true,
  addResultToForm: true,
  resultName: "bulkyResult",
  submitOnSuccess: true,
});
```

## Installation

```bash
$ npm install @bulky/form
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/form).

## License

[The MIT License](./LICENSE).
