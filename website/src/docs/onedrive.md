---
type: docs
order: 13
title: "OneDrive"
menu_prefix: "<span title='Requires Companion'>ⓒ </span>"
module: "@bulky/onedrive"
permalink: docs/onedrive/
category: "Sources"
tagline: "import files from OneDrive"
---

The `@bulky/onedrive` plugin lets users import files from their OneDrive account.

A Companion instance is required for the `@bulky/onedrive` plugin to work. Companion handles authentication with OneDrive, downloads the pictures and videos, and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

```js
import OneDrive from "@bulky/onedrive";

bulky.use(OneDrive, {
  // Options
});
```

<a class="TryButton" href="/examples/dashboard/">Try it live</a>

## Installation

> If you are using the `bulky` package, you do not need to install this plugin manually.

This plugin is published as the `@bulky/onedrive` package.

Install from NPM:

```shell
npm install @bulky/onedrive
```

## CSS

Dashboard plugin is recommended as a container to all Provider plugins, including OneDrive. If you are using Dashboard, it [comes with all the necessary styles](/docs/dashboard/#CSS) for OneDrive as well.

⚠️ If you are feeling adventurous, and want to use OneDrive plugin separately, without Dashboard, make sure to include `@bulky/provider-views/dist/style.css` (or `style.min.css`) CSS file. This is experimental, not officialy supported and not recommended.

## Options

The `@bulky/onedrive` plugin has the following configurable options:

```js
bulky.use(OneDrive, {
  target: Dashboard,
  companionUrl: "https://companion.bulky.io/",
});
```

### `id: 'OneDrive'`

A unique identifier for this plugin. It defaults to `'OneDrive'`.

### `title: 'OneDrive'`

Configures the title / name shown in the UI, for instance, on Dashboard tabs. It defaults to `'OneDrive'`.

### `target: null`

DOM element, CSS selector, or plugin to mount the OneDrive provider into. This should normally be the [`@bulky/dashboard`](/docs/dashboard) plugin.

### `companionUrl: null`

URL to a [Companion](/docs/companion) instance.

### `companionHeaders: {}`

Custom headers that should be sent along to [Companion](/docs/companion) on every request.

### `companionAllowedHosts: companionUrl`

The valid and authorised URL(s) from which OAuth responses should be accepted.

This value can be a `String`, a `Regex` pattern, or an `Array` of both.

This is useful when you have your [Companion](/docs/companion) running on many hosts. Otherwise, the default value should be good enough.

### `companionCookiesRule: 'same-origin'`

This option correlates to the [RequestCredentials value](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials), which tells the plugin whether to send cookies to [Companion](/docs/companion).

### `locale: {}`

```js
export default {
  strings: {
    pluginNameOneDrive: "OneDrive",
  },
};
```
