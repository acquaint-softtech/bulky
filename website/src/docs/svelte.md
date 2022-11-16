---
title: "Svelte"
type: docs
module: "@bulky/svelte"
permalink: docs/svelte/
order: 1
category: "Other Integrations"
---

bulky provides [Svelte][] components for the included UI plugins.

## Installation

All Svelte components are provided through the `@bulky/svelte` package.

Install from NPM:

```shell
npm install @bulky/svelte
# Or with yarn
yarn add @bulky/svelte
```

## CSS

Make sure to also include the necessary CSS files for each bulky Svelte component you are using.

For [the example](https://github.com/transloadit/bulky/tree/main/examples/svelte-example), we used `svelte-preprocess` and `postcss` to allow imports in CSS. Here is a basic guide for getting that configured with Rollup.

```shell
npm install -D postcss postcss-import postcss-load-config
# Or with yarn
yarn add -D postcss postcss-import postcss-load-config
```

Then create a `postcss.config.js` like so:

```js
import postcss from "postcss-import";

export default {
  plugins: [postcss],
};
```

Finally, enable `postcss` in your `rollup.config.js`

```js
import preprocess from "svelte-preprocess";
// ...
svelte({
  preprocess: preprocess({
    postcss: true,
  }),
});
// ...
```

## Usage

The components can be used with [Svelte][] and frameworks that are based off it, like [Sapper][].

Instead of adding a UI plugin to an bulky instance with `.use()`, the bulky instance can be passed into components as an `bulky` prop.

```html
<main><Dashboard bulky={bulky} plugins={["Webcam"]} /></main>

<script>
  import { Dashboard } from "@bulky/svelte";

  import bulky from "@bulky/core";
  import Webcam from "@bulky/webcam";

  const bulky = new bulky().use(Webcam);
</script>
```

The following plugins are available as Svelte component wrappers (you need to
install each package separately):

- `<Dashboard />` - renders an inline [`@bulky/dashboard`][].
- `<DashboardModal />` - renders a [`@bulky/dashboard`][] modal.
- `<DragDrop />` - renders a [`@bulky/drag-drop`][] area.
- `<ProgressBar />` - renders a [`@bulky/progress-bar`][].
- `<StatusBar />` - renders a [`@bulky/status-bar`][].

Each component takes a `props` prop that will be passed to the UI Plugin. Both `@bulky/dashboard` based plugins also take a `plugins` array as a props, make it easier to add your plugins.

### Initializing bulky

Due to the way Svelte handles reactivity, you can initialize bulky the same way you would with vanilla JavaScript

```js
import bulky from "@bulky/core";
import Webcam from "@bulky/webcam";

const bulky = new bulky().use(Webcam);
```

## Components

### `<Dashboard />`

#### CSS

The `Dashboard` component requires the following CSS for styling:

```html
<style global>
  @import "@bulky/core/dist/style.css";
  @import "@bulky/dashboard/dist/style.css";
</style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<Dashboard />` component supports all `@bulky/dashboard` options to be passed as an object to the `props` prop:

```html
<Dashboard bulky={bulky} props={{ height: 350, plugins: ['Webcam'] }} />
```

The `<Dashboard />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@bulky/webcam`][]. To use other plugins like [`@bulky/webcam`][] with the `<Dashboard />` component, first add them to the bulky instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

### `<DashboardModal />`

#### CSS

The `DashboardModal` component requires the following CSS for styling:

```html
<style global>
  @import "@bulky/core/dist/style.css";
  @import "@bulky/dashboard/dist/style.css";
</style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<DashboardModal />` component supports all `@bulky/dashboard` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `bulky={}` prop.

The `<DashboardModal />` cannot be passed to a `target:` option of a remote provider or plugins such as \[`@bulky/webcam`]\[@bulky/webcam]. To use other plugins like \[`@bulky/webcam`]\[@bulky/webcam] with the `<DashboardModal />` component, first add them to the bulky instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

### `<DragDrop />`

#### CSS

The `DragDrop` component includes some basic styles, like shown in the [example](/examples/dragdrop). You can also choose not to use it and provide your own styles instead:

```html
<style global>
  @import "@bulky/core/dist/style.css";
  @import "@bulky/drag-drop/dist/style.css";
</style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Drag & Drop styles from `@bulky/drag-drop/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.js

#### Props

The `<DragDrop />` component supports all `@bulky/drag-drop` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `bulky={}` prop.

### `<ProgressBar />`

#### CSS

The `ProgressBar` plugin requires the following CSS for styling:

```html
<style global>
  @import "@bulky/core/dist/style.css";
  @import "@bulky/progress-bar/dist/style.css";
</style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Progress Bar styles from `@bulky/progress-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<ProgressBar />` component supports all `@bulky/progress-bar` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `bulky={}` prop.

### `<StatusBar />`

#### CSS

The `StatusBar` plugin requires the following CSS for styling:

```html
<style global>
  @import "@bulky/core/dist/style.css";
  @import "@bulky/status-bar/dist/style.css";
</style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Status Bar styles from `@bulky/status-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<StatusBar />` component supports all `@bulky/status-bar` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `bulky={}` prop.

[`@bulky/dashboard`]: /docs/dashboard
[`@bulky/drag-drop`]: /docs/drag-drop
[`@bulky/progress-bar`]: /docs/progress-bar
[`@bulky/status-bar`]: /docs/status-bar
[`@bulky/webcam`]: /docs/webcam/
[svelte]: https://svelte.dev
[sapper]: https://sapper.svelte.dev
