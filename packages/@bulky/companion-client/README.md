# @bulky/companion-client

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/companion-client.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/companion-client)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

Client library for communication with Companion. Intended for use in bulky plugins.

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import bulky from "@bulky/core";
import { Provider, RequestClient, Socket } from "@bulky/companion-client";

const bulky = new bulky();

const client = new RequestClient(bulky, {
  companionUrl: "https://bulky.mywebsite.com/",
});
client.get("/drive/list").then(() => {});

const provider = new Provider(bulky, {
  companionUrl: "https://bulky.mywebsite.com/",
  provider: providerPluginInstance,
});
provider.checkAuth().then(() => {});

const socket = new Socket({ target: "wss://bulky.mywebsite.com/" });
socket.on("progress", () => {});
```

## Installation

> Unless you are writing a custom provider plugin, you do not need to install this.

```bash
$ npm install @bulky/companion-client
```

<!-- Undocumented currently
## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/DOC_PAGE_HERE).
-->

## License

[The MIT License](./LICENSE).
