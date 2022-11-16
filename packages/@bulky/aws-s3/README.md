# @bulky/aws-s3

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/aws-s3.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/aws-s3)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The AwsS3 plugin can be used to upload files directly to an S3 bucket. Uploads can be signed using Companion or a custom signing function.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import AwsS3 from "@bulky/aws-s3";

const bulky = new bulky();
bulky.use(AwsS3, {
  limit: 2,
  timeout: ms("1 minute"),
  companionUrl: "https://companion.myapp.com/",
});
```

## Installation

```bash
$ npm install @bulky/aws-s3
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/aws-s3).

## License

[The MIT License](./LICENSE).
