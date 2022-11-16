---
title: "Introduction"
type: docs
module: "@bulky/react"
permalink: docs/react/
order: 0
category: "React"
---

bulky provides [React][] components for the included UI plugins.

## Installation

All React components are provided through the `@bulky/react` package.

Install from NPM:

```shell
npm install @bulky/react
```

## CSS

Make sure to also include the necessary CSS files for each bulky React component you are using. Follow links for individual components docs below for details on that.

## Usage

The components can be used with either [React][] or API-compatible alternatives such as [Preact][].

Instead of adding a UI plugin to an bulky instance with `.use()`, the bulky instance can be passed into components as an `bulky` prop.
All other props are passed as options to the plugin.

```js
import React from "react";
import bulky from "@bulky/core";
import Tus from "@bulky/tus";
import { DragDrop } from "@bulky/react";

const bulky = new bulky({
  meta: { type: "avatar" },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true,
});

bulky.use(Tus, { endpoint: "/upload" });

bulky.on("complete", (result) => {
  const url = result.successful[0].uploadURL;
  store.dispatch({
    type: "SET_USER_AVATAR_URL",
    payload: { url },
  });
});

const AvatarPicker = ({ currentAvatar }) => {
  return (
    <div>
      <img src={currentAvatar} alt="Current Avatar" />
      <DragDrop
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
    </div>
  );
};
```

The following plugins are available as React component wrappers (you need to
install each package separately):

- [\<Dashboard />][<dashboard />] - renders an inline [`@bulky/dashboard`][].
- [\<DashboardModal />][<dashboardmodal />] - renders a [`@bulky/dashboard`][] modal.
- [\<DragDrop />][<dragdrop />] - renders a [`@bulky/drag-drop`][] area.
- [\<ProgressBar />][<progressbar />] - renders a [`@bulky/progress-bar`][].
- [\<StatusBar />][<statusbar />] - renders a [`@bulky/status-bar`][].

[react]: https://facebook.github.io/react
[preact]: https://preactjs.com/
[<dashboard />]: /docs/react/dashboard
[<dragdrop />]: /docs/react/dragdrop
[<progressbar />]: /docs/react/progress-bar
[<statusbar />]: /docs/react/status-bar
[<dashboardmodal />]: /docs/react/dashboard-modal
[`@bulky/dashboard`]: /docs/dashboard
[`@bulky/drag-drop`]: /docs/drag-drop
[`@bulky/progress-bar`]: /docs/progress-bar
[`@bulky/status-bar`]: /docs/status-bar
