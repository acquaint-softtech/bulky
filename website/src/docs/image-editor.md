---
type: docs
order: 2
title: "Image Editor"
module: "@bulky/image-editor"
permalink: docs/image-editor/
category: "Miscellaneous"
tagline: "allows users to crop, rotate, zoom and flip images that are added to bulky"
---

`@bulky/image-editor` allows users to crop, rotate, zoom and flip images that are added to bulky.

Designed to be used with the Dashboard UI (can in theory work without it).

![Screenshor of the Image Editor plugin UI in Dashboard](https://user-images.githubusercontent.com/1199054/87208710-654db400-c307-11ea-9471-6e3c6582d2a5.png)

```js
import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import ImageEditor from "@bulky/image-editor";

const bulky = new bulky();
bulky.use(Dashboard);
bulky.use(ImageEditor, {
  target: Dashboard,
  quality: 0.8,
});
```

## Installation

This plugin is published as the `@bulky/image-editor` package.

Install from NPM:

```shell
npm install @bulky/image-editor
```

The `@bulky/image-editor` plugin is in beta and is not yet available in the [CDN package](/docs/#With-a-script-tag).

## CSS

The `@bulky/image-editor` plugin requires the following CSS for styling:

```js
import "@bulky/image-editor/dist/style.css";
```

A minified version is also available as `style.min.css` at the same path. Include this import after your import of the core stylesheet and the dashboard stylesheet.

## Options

The `@bulky/image-editor` plugin has the following configurable options:

```js
bulky.use(ImageEditor, {
  id: "ImageEditor",
  quality: 0.8,
  cropperOptions: {
    viewMode: 1,
    background: false,
    autoCropArea: 1,
    responsive: true,
    croppedCanvasOptions: {},
  },
  actions: {
    revert: true,
    rotate: true,
    granularRotate: true,
    flip: true,
    zoomIn: true,
    zoomOut: true,
    cropSquare: true,
    cropWidescreen: true,
    cropWidescreenVertical: true,
  },
});
```

### `id: 'ImageEditor'`

A unique identifier for this plugin. It defaults to `'ImageEditor'`.

### `quality: 0.8`

Quality of the resulting blob that will be saved in bulky after editing/cropping.

### `cropperOptions`

Image Editor is using the excellent [Cropper.js](https://fengyuanchen.github.io/cropperjs/).
`cropperOptions` will be directly passed to `Cropper` and thus can expect the same values as documented
in their [README](https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#options),
with the addition of `croppedCanvasOptions`, which will be passed to [`getCroppedCanvas`](https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#getcroppedcanvasoptions).

### `actions`

Image Editor actions buttons, which will be shown. If you you’d like to hide any action pass `false` to it. By default all the actions are visible.

## Events

### file-editor:start

Emitted when `selectFile(file)` is called.

```js
bulky.on("file-editor:start", (file) => {
  console.log(file);
});
```

### file-editor:complete

Emitted after `save(blob)` is called.

```js
bulky.on("file-editor:complete", (updatedFile) => {
  console.log(updatedFile);
});
```

### file-editor:cancel

Emitted when `uninstall` is called or when the current image editing changes are discarded.

```js
bulky.on("file-editor:cancel", (file) => {
  console.log(file);
});
```

### `locale: {}`

```js
export default {
  strings: {
    revert: "Revert",
    rotate: "Rotate",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    flipHorizontal: "Flip horizontal",
    aspectRatioSquare: "Crop square",
    aspectRatioLandscape: "Crop landscape (16:9)",
    aspectRatioPortrait: "Crop portrait (9:16)",
  },
};
```
