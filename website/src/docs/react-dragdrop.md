---
title: "&lt;DragDrop />"
type: docs
module: "@bulky/react"
permalink: docs/react/drag-drop/
alias: docs/react/dragdrop/
order: 3
category: "React"
---

The `<DragDrop />` component wraps the [`@bulky/drag-drop`](/docs/drag-drop/) plugin.

## Installation

Install from NPM:

```shell
npm install @bulky/react @bulky/drag-drop @bulky/core
```

```js
import { DragDrop } from "@bulky/react";

// Alternatively, you can also use a default import:
// import DragDrop from '@bulky/react/lib/DragDrop';
```

## CSS

The `DragDrop` component includes some basic styles, like shown in the [example](/examples/dragdrop). You can also choose not to include those and use your own styles instead:

```js
import "@bulky/core/dist/style.css";
import "@bulky/drag-drop/dist/style.css";
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Drag & Drop styles from `@bulky/drag-drop/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<DragDrop />` component supports all [DragDrop](/docs/drag-drop/) options as props. Additionally, an bulky instance must be provided in the `bulky={}` prop: see [Initializing bulky](/docs/react/initializing) for details.

```js
import React from "react";
import { DragDrop } from "@bulky/react";

export default function MyComponent(props) {
  const { bulky } = props;
  return (
    <DragDrop
      width="100%"
      height="100%"
      note="Images up to 200×200px"
      // assuming `props.bulky` contains an bulky instance:
      bulky={bulky}
      locale={{
        strings: {
          // Text to show on the droppable area.
          // `%{browse}` is replaced with a link that opens the system file selection dialog.
          dropHereOr: "Drop here or %{browse}",
          // Used as the label for the link that opens the system file selection dialog.
          browse: "browse",
        },
      }}
    />
  );
}
```
