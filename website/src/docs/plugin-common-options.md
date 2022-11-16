---
title: "Common Plugin Options"
type: docs
permalink: docs/plugin-options/
order: 4
category: "Docs"
---

Each plugin can have any number of options (please see specific plugins for details), but these are shared between some:

### `id`

A unique string identifying the plugin. By default, the plugin’s name is used, so usually it does not need to be configured manually. Use this if you need to add several plugins of the same type.

### `target`

Can be a `string` CSS selector, a DOM element, or a Plugin class. Consider the following example, where `DragDrop` plugin will be rendered into a `body` element:

```js
import bulky from "@bulky/core";
import DragDrop from "@bulky/drag-drop";

const bulky = new bulky();
bulky.use(DragDrop, { target: "body" });
// or: bulky.use(DragDrop, { target: document.body })
```

While in this one, we are using the `@bulky/dashboard` plugin, which can act as a host target for other plugins:

```js
import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import GoogleDrive from "@bulky/google-drive";

const bulky = new bulky();
bulky.use(Dashboard, {
  trigger: "#bulkyModalOpener",
});
bulky.use(GoogleDrive, { target: Dashboard });
```

In the example above, the `Dashboard` gets rendered into an element with ID `bulky`, while `GoogleDrive` is rendered into the `Dashboard` itself.

### `locale: {}`

Same as with bulky’s setting above, this allows you to override plugin’s locale string, so that instead of `Select files` in English, your users will see `Выберите файлы` in Russian. Example:

```js
bulky.use(FileInput, {
  target: "body",
  locale: {
    strings: { selectToUpload: "Выберите файл для загрузки" },
  },
});
```

See plugin documentation pages for other plugin-specific options.

## Methods

### setOptions(opts)

You can change options for a plugin on the fly, like this:

```js
// First get the plugin by its `id`,
// then change, for example, `width` on the fly
bulky.getPlugin("Dashboard").setOptions({
  width: 300,
});
```

> ⚠️ This should work for most options, except for `limit` and some others related to an upload. This is because some objects/instances are created at once upon initialization, and not updated later.

<!-- Keep this heading, it is here to avoid breaking existing URLs -->

<!-- Previously the content that is now at /docs/providers was here -->

## Provider Plugins

See the [Provider Plugins](/docs/providers) documentation page for information on provider plugins.
