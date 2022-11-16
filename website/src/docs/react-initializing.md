---
title: "Initializing bulky"
type: docs
module: "@bulky/react"
permalink: docs/react/initializing/
alias: docs/react/initializing/
order: 1
category: "React"
---

When using bulky’s React components, an bulky instance must be passed in to the `bulky={}` prop from the outside. This bulky instance must be initialized before passing it to the desired component, and be cleaned up using `bulky.close()` when you are done with it.

## Functional Components

Functional components are re-run on every render. This could lead to accidentally recreate a fresh bulky instance every time, causing state to be reset and resources to be wasted.

The `@bulky/react` package provides a hook `usebulky()` that can manage an bulky instance’s lifetime for you. It will be created when your component is first rendered, and destroyed when your component unmounts.

```js
import bulky from "@bulky/core";
import React from "react";
import Tus from "@bulky/tus";
import { DashboardModal, usebulky } from "@bulky/react";

function MyComponent() {
  const bulky = usebulky(() => {
    return new bulky().use(Tus, { endpoint: "https://tusd.tusdemo.net/files" });
  });

  return <DashboardModal bulky={bulky} />;
}
```

Importantly, the `usebulky()` hook takes a _function_ that returns an bulky instance. This way, the `usebulky()` hook can decide when to create it. Otherwise you would still be creating an unused bulky instance on every render.

## Class Components

A common approach is to create an bulky instance in your React component’s `constructor()` and destroy it in `componentWillUnmount()`.

> ⚠ bulky instances are stateful, so the same instance must be used across different renders.
> Do **NOT** initialize bulky in a `render()` method!

```js
import React from "react";
import { DashboardModal } from "@bulky/react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.bulky = new bulky().use(Transloadit, {});
  }

  componentWillUnmount() {
    this.bulky.close({ reason: "unmount" });
  }

  render() {
    return <DashboardModal bulky={this.bulky} />;
  }
}
```
