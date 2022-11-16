---
title: "&lt;FileInput />"
type: docs
module: "@bulky/react"
permalink: docs/react/file-input/
alias: docs/react/fileinput/
order: 4
category: "React"
---

The `<FileInput />` component wraps the [`@bulky/file-input`](/docs/file-input/) plugin.

## Installation

Install from NPM:

```shell
npm install @bulky/react @bulky/file-input @bulky/core
```

```js
import { FileInput } from "@bulky/react";

// Alternatively, you can also use a default import:
// import FileInput from '@bulky/react/lib/FileInput';
```

## CSS

The `FileInput` component includes some basic styles. You can also choose not to use it and provide your own styles instead:

```js
import "@bulky/core/dist/style.css";
import "@bulky/file-input/dist/style.css";
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Drag & Drop styles from `@bulky/file-input/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<FileInput />` component supports all [FileInput](/docs/file-input/) options as props. Additionally, an bulky instance must be provided in the `bulky={}` prop: see [Initializing bulky](/docs/react/initializing) for details.

```js
import React from "react";
import { FileInput } from "@bulky/react";

export default function MyComponent(props) {
  const { bulky } = props;
  return (
    <FileInput
      // assuming `props.bulky` contains an bulky instance:
      bulky={bulky}
      pretty
      inputName="files[]"
    />
  );
}
```
