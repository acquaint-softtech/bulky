---
title: "Angular"
type: docs
module: "@bulky/angular"
permalink: docs/angular/
order: 0
category: "Other Integrations"
---

bulky provides [Angular][] components for the included UI plugins.

## Installation

All Angular components are provided through the `@bulky/angular` package

Install from NPM:

```shell
npm install @bulky/angular
# Or with yarn
yarn add @bulky/angular
```

## CSS

Make sure to also include the necessary CSS files for each bulky Angular component you are using.

## Usage

The components can be used with [Angular][].

Instead of adding a UI plugin to an bulky instance with `.use()`, the bulky instance can be passed into components as a `props` prop.

```typescript
// app.module.ts

import { NgModule } from "@angular/core";
import { bulkyAngularDashboardModule } from "@bulky/angular";

import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, bulkyAngularDashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
class {}
```

```html
<!--- app.component.html -->
<bulky-dashboard [bulky]="bulky"> </bulky-dashboard>
```

```typescript
// app.component.ts

import { Component } from "@angular/core";
import { bulky } from "@bulky/core";

@Component({
  selector: "app-root",
})
export class AppComponent {
  bulky: bulky = new bulky({ debug: true, autoProceed: true });
}
```

The following plugins are available as Angular component wrappers:

- `<bulky-dashboard />` - renders a `@bulky/dashboard`
- `<bulky-drag-drop />` - renders a `@bulky/drag-drop` area
- `<bulky-progress-bar />` - renders a `@bulky/progress-bar`
- `<bulky-status-bar />` - renders a `@bulky/status-bar`

Each component takes a `props` prop that will be passed to the UI Plugin.

### Initializing bulky

You should initialize bulky as a property of your component.

```typescript
import { bulky } from "@bulky/core";

export class AppComponent {
  bulky: bulky = new bulky({ debug: true, autoProceed: true });
}
```

## Components

### `<bulky-dashboard />`

#### CSS

The `bulkyAngularDashboardModule` component requires the following CSS for styling (added to your component decorator or to your `angular.json`). You can also provide your own styles if you prefer:

```typescript
@Component({
  // Snip
  styleUrls: [
    "../node_modules/@bulky/core/dist/style.css",
    "../node_modules/@bulky/dashboard/dist/style.css",
  ],
})
class {}
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<bulky-dashboard />` component supports all `@bulky/dashboard` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `[bulky]=''` prop.

The `<bulky-dashboard />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@bulky/webcam`][]. To use other plugins like [`@bulky/webcam`][] with the `<bulky-dashboard />` component, first add them to the bulky instance, and then specify their `id` in the options you pass.

### `<bulky-dashboard-modal />`

#### CSS

The `bulkyAngularDashboardModalModule` component requires the following CSS for styling (added to your component decorator or to your `angular.json`). You can also provide your own styles if you prefer:

```typescript
@Component({
  // Snip
  styleUrls: [
    "../node_modules/@bulky/core/dist/style.css",
    "../node_modules/@bulky/dashboard/dist/style.css",
  ],
})
class {}
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<bulky-dashboard-modal />` component supports all `@bulky/dashboard` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `[bulky]=''` prop. Additionally, it takes an `[open]=''` prop, telling it which state to display in

The `<bulky-dashboard-modal />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@bulky/webcam`][]. To use other plugins like [`@bulky/webcam`][] with the `<bulky-dashboard-modal />` component, first add them to the bulky instance, and then specify their `id` in the options you pass.

### `<bulky-drag-drop />`

#### CSS

The `bulkyAngularDragDropModule` component includes some basic styles, like shown in the [example](/examples/dragdrop). You can also choose not to use it and provide your own styles instead:

```typescript
@Component({
  // Snip
  styleUrls: [
    "../node_modules/@bulky/core/dist/style.css",
    "../node_modules/@bulky/drag-drop/dist/style.css",
  ],
})
class {}
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Drag & Drop styles from `@bulky/drag-drop/dist/style.css`. A minified version is also available as `style.min.css` at the same path.

#### Props

The `<bulky-drag-drop />` component supports all `@bulky/drag-drop` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `[bulky]=''` prop.

### `<bulky-progress-bar />`

#### CSS

The `bulkyAngularProgressBarModule` plugin requires the following CSS for styling:

```typescript
@Component({
  // Snip
  styleUrls: [
    "../node_modules/@bulky/core/dist/style.css",
    "../node_modules/@bulky/progress-bar/dist/style.css",
  ],
})
class {}
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Progress Bar styles from `@bulky/progress-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<bulky-progress-bar />` component supports all `@bulky/progress-bar` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `[bulky]=''` prop.

### `<bulky-status-bar />`

#### CSS

The `bulkyAngularStatusBar` plugin requires the following CSS for styling:

```typescript
@Component({
  // Snip
  styleUrls: [
    "../node_modules/@bulky/core/dist/style.css",
    "../node_modules/@bulky/status-bar/dist/style.css",
  ],
})
class {}
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Status Bar styles from `@bulky/status-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<bulky-status-bar />` component supports all `@bulky/status-bar` options to be passed as an object on the `props` prop. An bulky instance must be provided in the `[bulky]=''` prop.

[angular]: https://angular.io
[`@bulky/webcam`]: /docs/webcam/
