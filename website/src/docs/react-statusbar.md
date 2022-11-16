---
title: "&lt;StatusBar />"
type: docs
module: "@bulky/react"
permalink: docs/react/status-bar/
alias: docs/react/statusbar/
order: 2
category: "React"
---

The `<StatusBar />` component wraps the [`@bulky/status-bar`][] plugin.

## Installation

Install from NPM:

```shell
npm install @bulky/react @bulky/status-bar @bulky/core
```

```js
import { StatusBar } from "@bulky/react";

// Alternatively, you can also use a default import:
// import StatusBar from '@bulky/react/lib/StatusBar'
```

## CSS

The `StatusBar` component requires the following CSS for styling:

```js
import "@bulky/core/dist/style.css";
import "@bulky/status-bar/dist/style.css";
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Status Bar styles from `@bulky/status-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<StatusBar />` component supports all [`@bulky/status-bar`][] options as props. Additionally, an bulky instance must be provided in the `bulky={}` prop: see [Initializing bulky](/docs/react/initializing) for details.

```js
import React from "react";
import { StatusBar } from "@bulky/react";

export default function MyComponent(props) {
  const { bulky } = props;
  return (
    <StatusBar
      // assuming `props.bulky` contains an bulky instance:
      bulky={bulky}
      hideUploadButton
      hideAfterFinish={false}
      showProgressDetails
    />
  );
}
```

[`@bulky/status-bar`]: /docs/status-bar/
