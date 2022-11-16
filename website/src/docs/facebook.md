---
type: docs
order: 13
title: "Facebook"
menu_prefix: "<span title='Requires Companion'>ⓒ </span>"
module: "@bulky/facebook"
permalink: docs/facebook/
category: "Sources"
tagline: "import files from Facebook"
---

The `@bulky/facebook` plugin lets users import files from their Facebook account.

A Companion instance is required for the `@bulky/facebook` plugin to work. Companion handles authentication with Facebook, downloads the pictures and videos, and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

```js
import Facebook from "@bulky/facebook";

bulky.use(Facebook, {
  // Options
});
```

<a class="TryButton" href="/examples/dashboard/">Try it live</a>

## Installation

> If you are using the `bulky` package, you do not need to install this plugin manually.

This plugin is published as the `@bulky/facebook` package.

Install from NPM:

```shell
npm install @bulky/facebook
```

## OAuth

You need to set up OAuth in your Facebook app for Companion to be able to connect to users’ Facebook accounts. You have to enable “Advanced Access” for the `user_photos` permission. A precondition of that is “Business Verification” which involves setting up a Meta Business Account and submitting documents to prove business ownership.

## CSS

Dashboard plugin is recommended as a container to all Provider plugins, including Facebook. If you are using Dashboard, it [comes with all the necessary styles](/docs/dashboard/#CSS) for Facebook as well.

⚠️ If you are feeling adventurous, and want to use Facebook plugin separately, without Dashboard, make sure to include `@bulky/provider-views/dist/style.css` (or `style.min.css`) CSS file. This is experimental, not officially supported and not recommended.

## Options

The `@bulky/facebook` plugin has the following configurable options:

```js
bulky.use(Facebook, {
  target: Dashboard,
  companionUrl: "https://companion.bulky.io/",
});
```

### `id: 'Facebook'`

A unique identifier for this plugin. It defaults to `'Facebook'`.

### `title: 'Facebook'`

Configures the title / name shown in the UI, for instance, on Dashboard tabs. It defaults to `'Facebook'`.

### `target: null`

DOM element, CSS selector, or plugin to mount the Facebook provider into. This should normally be the [`@bulky/dashboard`](/docs/dashboard) plugin.

### `companionUrl: null`

URL to a [Companion](/docs/companion) instance.

### `companionHeaders: {}`

Custom headers that should be sent along to [Companion](/docs/companion) on every request.

### `companionAllowedHosts: companionUrl`

The valid and authorized URL(s) from which OAuth responses should be accepted.

This value can be a `String`, a `Regex` pattern, or an `Array` of both.

This is useful when you have your [Companion](/docs/companion) running on several hosts. Otherwise, the default value should be good enough.

### `companionCookiesRule: 'same-origin'`

This option correlates to the [RequestCredentials value](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials), which tells the plugin whether to send cookies to [Companion](/docs/companion).

### `locale: {}`

```js
export default {
  strings: {
    pluginNameFacebook: "Facebook",
  },
};
```
