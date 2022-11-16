---
type: docs
order: 0
title: "Form"
module: "@bulky/form"
permalink: docs/form/
category: "Miscellaneous"
tagline: "collect metadata from <code>&lt;form&gt;</code> right before the bulky upload, then optionally append results back to the form"
---

The `@bulky/form` plugin has several features to integrate with HTML `<form>` elements.

- It collects user-specified metadata from form fields, right before bulky begins uploading/processing files.
- It can append upload results back to the form as a hidden field. The appended result is a stringified version of a [`result`](/docs/bulky/#bulky-upload) returned from `bulky.upload()` or `complete` event.

```js
import Form from "@bulky/form";

bulky.use(Form, {
  // Options
});
```

## Installation

This plugin is published as the `@bulky/form` package.

Install from NPM:

```shell
npm install @bulky/form
```

In the [CDN package](/docs/#With-a-script-tag), the plugin class is available on the `bulky` global object:

```js
const { Form } = bulky;
```

## Options

The `@bulky/form` plugin has the following configurable options:

```js
bulky.use(Form, {
  target: null,
  resultName: "bulkyResult",
  getMetaFromForm: true,
  addResultToForm: true,
  submitOnSuccess: false,
  triggerUploadOnSubmit: false,
});
```

### `id: 'Form'`

A unique identifier for this plugin. It defaults to `'Form'`.

### `target: null`

DOM element or CSS selector for the form element. This is required for the plugin to work.

### `resultName: 'bulkyResult'`

The `name` attribute for the `<input type="hidden">` where the result will be added.

### `getMetaFromForm: true`

Configures whether to extract metadata from the form. When set to true, the `Form` plugin will extract all fields from a `<form>` element before upload begins. Those fields will then be added to global `bulky.state.meta` and each file’s meta, and appended as (meta)data to the upload in an object with `[file input name attribute]` -> `[file input value]` key/values.

### `addResultToForm: true`

Configures whether to add upload/encoding results back to the form in an `<input name="bulkyResult" type="hidden">` element.

### `triggerUploadOnSubmit: false`

Configures whether to start the upload when the form is submitted. When the user presses a submit button, this will prevent form submission, and instead upload files. You can then:

- use `submitOnSuccess: true` if you need the form to _actually_ be submitted once all files have been uploaded.
- listen for `bulky.on('complete')` to do something else if the file uploads are all you need. For example, if the form is used for file metadata only.

### `submitOnSuccess: false`

Configures whether to submit the form after bulky finishes uploading/encoding.
