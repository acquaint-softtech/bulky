# @bulky/aws-s3-multipart

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/aws-s3-multipart.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/aws-s3-multipart)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The AwsS3Multipart plugin can be used to upload files directly to an S3 bucket using S3’s Multipart upload strategy. With this strategy, files are chopped up in parts of 5MB+ each, so they can be uploaded concurrently. It’s also reliable: if a single part fails to upload, only that 5MB has to be retried.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import AwsS3Multipart from "@bulky/aws-s3-multipart";

const bulky = new bulky();
bulky.use(AwsS3Multipart, {
  limit: 2,
  companionUrl: "https://companion.myapp.com/",
});
```

## Installation

```bash
$ npm install @bulky/aws-s3-multipart
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/aws-s3-multipart).

## License

[The MIT License](./LICENSE).
