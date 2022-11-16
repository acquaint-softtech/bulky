---
title: "&lt;ProgressBar />"
type: docs
module: "@bulky/react"
permalink: docs/react/progress-bar/
alias: docs/react/progressbar/
order: 4
category: "React"
---

The `<ProgressBar />` component wraps the [`@bulky/progress-bar`][] plugin.

## Installation

Install from NPM:

```shell
npm install @bulky/react @bulky/progress-bar @bulky/core
```

```js
import { ProgressBar } from "@bulky/react";

// Alternatively, you can also use a default import:
// import ProgressBar from '@bulky/react/lib/ProgressBar'
```

## CSS

The `ProgressBar` plugin requires the following CSS for styling:

```js
import "@bulky/core/dist/style.css";
import "@bulky/progress-bar/dist/style.css";
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Progress Bar styles from `@bulky/progress-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<ProgressBar />` component supports all [`@bulky/progress-bar`][] options as props. Additionally, an bulky instance must be provided in the `bulky={}` prop: see [Initializing bulky](/docs/react/initializing) for details.

```js
import React from "react";
import { ProgressBar } from "@bulky/react";

export default function MyComponent(props) {
  const { bulky } = props;
  return (
    <ProgressBar
      // assuming `props.bulky` contains an bulky instance:
      bulky={bulky}
      fixed
      hideAfterFinish
    />
  );
}
```

[`@bulky/progress-bar`]: /docs/progress-bar/
