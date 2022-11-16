# @bulky/provider-views

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/provider-views.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/provider-views)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

View library for bulky remote provider plugins.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Plugin from "@bulky/core/lib/plugin";
import { ProviderViews } from "@bulky/provider-views";

class GoogleDrive extends UIPlugin {
  install() {
    this.view = new ProviderViews(this);
    // snip
  }

  onFirstRender() {
    return Promise.all([
      this.provider.fetchPreAuthToken(),
      this.view.getFolder("root", "/"),
    ]);
  }

  render(state) {
    return this.view.render(state);
  }
}
```

## Installation

> Unless you are creating a custom provider plugin, you do not need to install this.

```bash
$ npm install @bulky/provider-views
```

<!-- Undocumented currently
## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/DOC_PAGE_HERE).
-->

## License

[The MIT License](./LICENSE).
