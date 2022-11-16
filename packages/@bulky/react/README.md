# @bulky/react

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/react.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/react)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

React component wrappers around bulky’s officially maintained UI plugins.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

<!-- eslint-disable react/state-in-constructor -->

```js
import React from "react";
import bulky from "@bulky/core";
import { DashboardModal } from "@bulky/react";

const bulky = new bulky();

class Example extends React.Component {
  state = { open: false };

  render() {
    return (
      <DashboardModal
        bulky={bulky}
        open={this.state.open}
        onRequestClose={this.handleClose}
      />
    );
  }
  // ..snip..
}
```

## Installation

```bash
$ npm install @bulky/react
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/react).

## License

[The MIT License](./LICENSE).
