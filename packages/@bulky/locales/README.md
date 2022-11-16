# @bulky/locales

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/locales.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/locales)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

This package includes all the locale packs that you can use to make bulky speak your language! If your language is missing, please consider [contributing](https://github.com/transloadit/bulky/tree/main/packages/%40bulky/locales/src), starting with `en_US`, which is always up-to-date automatically.

## Installation

```bash
$ npm install @bulky/locales
```

## Documentation

```bash
$ npm install @bulky/core @bulky/locales
```

```js
import bulky from "@bulky/core";
import Russian from "@bulky/locales/lib/ru_RU";

const bulky = new bulky({
  debug: true,
  meta: {
    username: "John",
    license: "Creative Commons",
  },
  locale: Russian,
});
```

Please see [locale docs](https://bulky.io/docs/bulky/#locale) for more details.

## License

[The MIT License](./LICENSE).
