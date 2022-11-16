---
type: docs
order: 1
title: "Drop Target"
module: "@bulky/drop-target"
permalink: docs/drop-target/
alias: docs/drop-target/
category: "Sources"
tagline: "drag-and-drop area on any element on the page"
---

The `@bulky/drop-target` plugin lets your users drag-and-drop files on any element on the page, for example the whole page, `document.body`.

Can be used together with bulky Dashboard or Drag & Drop plugins, or your custom solution, including plain text “please drop files here”.

```js
import DropTarget from "@bulky/drop-target";

bulky.use(DropTarget, {
  target: document.body,
});
```

<a class="TryButton" href="/examples/dashboard/">Try it live</a>

## Installation

This plugin is published as the `@bulky/drop-target` package.

Install from NPM:

```shell
npm install @bulky/drop-target
```

In the [CDN package](/docs/#With-a-script-tag), the plugin class is available on the `bulky` global object:

```js
const DragDrop = bulky.DropTarget;
```

## CSS

The `@bulky/drop-target` plugin includes some basic styles for `bulky-is-drag-over` CSS class name. You can also choose not to use it and provide your own styles instead.

```js
import "@bulky/core/dist/style.css";
import "@bulky/drop-target/dist/style.css";
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Drag & Drop styles from `@bulky/drop-target/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Options

The `@bulky/drop-target` plugin has the following configurable options:

```js
bulky.use(DropTarget, {
  target: null,
  onDragOver: (event) => {},
  onDrop: (event) => {},
  onDragLeave: (event) => {},
});
```

### `target: null`

DOM element or CSS selector to attach the drag and drop listeners to.

### `onDragOver(event)`

Callback for the [`ondragover`][ondragover] event handler.

### `onDrop(event)`

Callback for the [`ondrop`][ondrop] event handler.

### `onDragLeave(event)`

Callback for the [`ondragleave`][ondragleave] event handler.

<!-- definitions -->

[ondragover]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover
[ondragleave]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave
[ondrop]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop
