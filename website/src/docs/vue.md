---
title: "Vue"
type: docs
module: "@bulky/vue"
permalink: docs/vue/
order: 0
category: "Other Integrations"
---

bulky provides [Vue][] components for some bulky UI plugins.

Note: _All plugin names are in kebab-case for the HTML element, and in CamelCase for the JavaScript imports, following Vue conventions_

## Installation

All Vue components are provided through the `@bulky/vue` package, note that the
underling bulky plugin is no longer provided and you would need to install it
explicitly. See [Usage](#usage) for more info.

Install from NPM:

```shell
npm install @bulky/vue
# Or with yarn
yarn add @bulky/vue
```

## CSS

Make sure to also include the necessary CSS files for each bulky Vue component you are using.

## Usage

The components can be used with [Vue][] and frameworks that use it, like [Nuxt][].

Instead of adding a UI plugin to an bulky instance with `.use()`, the bulky instance can be passed into components as an `bulky` prop.

```html
<template>
  <div id="app">
    <dashboard :bulky="bulky" :plugins="['Webcam']" :props="{theme: 'light'}" />
  </div>
</template>

<script>
  import { Dashboard } from "@bulky/vue";

  import "@bulky/core/dist/style.css";
  import "@bulky/dashboard/dist/style.css";

  import bulky from "@bulky/core";
  import Webcam from "@bulky/webcam";

  export default {
    name: "App",
    components: {
      Dashboard,
    },
    computed: {
      bulky: () => new bulky().use(Webcam),
    },
    beforeDestroy() {
      this.bulky.close({ reason: "unmount" });
    },
  };
</script>
```

The following plugins are available as Vue component wrappers (you need to
install each package separately):

- `<dashboard />` - renders an inline [`@bulky/dashboard`][].
- `<dashboard-modal />` - renders a [`@bulky/dashboard`][] modal.
- `<drag-drop />` - renders a [`@bulky/drag-drop`][] area.
- `<file-input />` - renders a [`@bulky/file-input`][] area.
- `<progress-bar />` - renders a [`@bulky/progress-bar`][].
- `<status-bar />` - renders a [`@bulky/status-bar`][].

Each component takes a `props` prop that will be passed to the UI Plugin. Both `@bulky/dashboard` based plugins also take a `plugins` array as a props, making it easier to add your plugins.

### Initializing bulky

The easiest way to initialize bulky is creating a new instance in your `data` or `computed` and to run `bulky.close()` in the `beforeDestroy` method. You can do extra configuration with plugins where-ever you are initializing bulky

```js
import bulky from "@bulky/core";
import Webcam from "@bulky/webcam";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";

export default {
  computed: {
    bulky: () =>
      new bulky().use(Webcam, {
        // Config
      }),
  },
  beforeDestroy() {
    this.bulky.close({ reason: "unmount" });
  },
};
```

## Components

### `<dashboard />`

#### CSS

The `Dashboard` component requires the following CSS for styling:

```html
<style src="@bulky/core/dist/style.css"></style>
<style src="@bulky/dashboard/dist/style.css"></style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system. With default Vue, you can add a `style` tag and make the `src` attribute the file you need.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<dashboard />` component supports all `@bulky/dashboard` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `:bulky=''` prop.

The `<dashboard />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@bulky/webcam`][]. To use other plugins like [`@bulky/webcam`][] with the `<dashboard />` component, first add them to the bulky instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

### `<dashboard-modal />`

#### CSS

The `DashboardModal` component requires the following CSS for styling:

```html
<style src="@bulky/core/dist/style.css"></style>
<style src="@bulky/dashboard/dist/style.css"></style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system. With default Vue, you can add a `style` tag and make the `src` attribute the file you need.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<dashboard-modal />` component supports all `@bulky/dashboard` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `:bulky=''` prop.

The `<dashboard-modal />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@bulky/webcam`][]. To use other plugins like [`@bulky/webcam`][] with the `<dashboard-modal />` component, first add them to the bulky instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

### `<drag-drop />`

#### CSS

The `DragDrop` component includes some basic styles, like shown in the [example](/examples/dragdrop). You can also choose not to include those and use your own styles instead:

```html
<style src="@bulky/core/dist/style.css"></style>
<style src="@bulky/drag-drop/dist/style.css"></style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Drag & Drop styles from `@bulky/drag-drop/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<drag-drop />` component supports all `@bulky/drag-drop` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `:bulky=''` prop.

### `<progress-bar />`

#### CSS

The `ProgressBar` plugin requires the following CSS for styling:

```html
<style src="@bulky/core/dist/style.css"></style>
<style src="@bulky/progress-bar/dist/style.css"></style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Progress Bar styles from `@bulky/progress-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<progress-bar />` component supports all `@bulky/progress-bar` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `:bulky=''` prop.

### `<status-bar />`

#### CSS

The `StatusBar` plugin requires the following CSS for styling:

```html
<style src="@bulky/core/dist/style.css"></style>
<style src="@bulky/status-bar/dist/style.css"></style>
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Status Bar styles from `@bulky/status-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<status-bar />` component supports all `@bulky/status-bar` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `:bulky=''` prop.

[`@bulky/dashboard`]: /docs/dashboard
[`@bulky/drag-drop`]: /docs/drag-drop
[`@bulky/file-input`]: /docs/file-input
[`@bulky/progress-bar`]: /docs/progress-bar
[`@bulky/status-bar`]: /docs/status-bar
[`@bulky/webcam`]: /docs/webcam/
[nuxt]: https://nuxtjs.org
[vue]: https://vuejs.org
