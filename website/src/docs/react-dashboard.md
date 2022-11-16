---
title: "&lt;Dashboard />"
type: docs
module: "@bulky/react"
permalink: docs/react/dashboard/
order: 5
category: "React"
---

The `<Dashboard />` component wraps the [`@bulky/dashboard`][] plugin. It only renders the Dashboard inline. To use the Dashboard modal (`inline: false`), use the [`<DashboardModal />`](/docs/react/dashboard-modal) component.

## Installation

Install from NPM:

```shell
npm install @bulky/react @bulky/dashboard @bulky/core
```

```js
import { Dashboard } from "@bulky/react";

// Alternatively, you can also use a default import:
// import Dashboard from '@bulky/react/lib/Dashboard'
```

## CSS

The `Dashboard` component requires the following CSS for styling:

```js
import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

## Props

The `<Dashboard />` component supports all [`@bulky/dashboard`][] options as props. Additionally, an bulky instance must be provided in the `bulky={}` prop: see [Initializing bulky](/docs/react/initializing) for details.

> The `<Dashboard />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@bulky/webcam`][]. To use other plugins like [`@bulky/webcam`][] (Image Editor, Google Drive, etc) with the `<Dashboard />` component, first add them to the bulky instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

<!-- eslint-disable react/jsx-props-no-spreading -->

```js
import React from "react";
import { Dashboard } from "@bulky/react";

function Uploader() {
  const bulky = React.useMemo(() => {
    return (
      new bulky()
        .use(Webcam) // `id` defaults to "Webcam". Note: no `target` option!
        // or
        .use(Webcam, { id: "MyWebcam" })
    ); // `id` is… "MyWebcam"
  }, []);
  React.useEffect(() => {
    return () => bulky.close({ reason: "unmount" });
  }, [bulky]);

  return <Dashboard bulky={bulky} plugins={["Webcam"]} {...props} />;
}
```

[`@bulky/dashboard`]: /docs/dashboard/
[`@bulky/webcam`]: /docs/webcam/
