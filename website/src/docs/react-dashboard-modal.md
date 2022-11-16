---
title: "&lt;DashboardModal />"
type: docs
module: "@bulky/react"
permalink: docs/react/dashboard-modal/
order: 6
category: "React"
---

The `<DashboardModal />` component wraps the [`@bulky/dashboard`][] plugin, allowing control over the modal `open` state using a prop.

## Installation

Install from NPM:

```shell
npm install @bulky/react @bulky/dashboard @bulky/core
```

```js
import { DashboardModal } from "@bulky/react";

// Alternatively, you can also use a default import:
// import DashboardModal from '@bulky/react/lib/DashboardModal'
```

## CSS

The `DashboardModal` component requires the following CSS for styling:

```js
import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
```

Import general Core styles from `@bulky/core/dist/style.css` first, then add the Dashboard styles from `@bulky/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ The `@bulky/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@bulky/status-bar`](/docs/status-bar) and [`@bulky/informer`](/docs/informer)). If you also use the `@bulky/status-bar` or `@bulky/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@bulky/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@bulky/url` and `@bulky/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

<!-- Make sure the old name of this section still works -->

<a id="Options"></a>

## Props

The `<DashboardModal />` component supports most [`@bulky/dashboard`][] options as props. It adds two more:

- `open` - Boolean true or false, setting this to `true` opens the modal and setting it to `false` closes it.
- `onRequestClose` - Callback called when the user attempts to close the modal, either by clicking the close button or by clicking outside the modal (if the `closeModalOnClickOutside` prop is set).

An bulky instance must be provided in the `bulky={}` prop: see [Initializing bulky](/docs/react/initializing) for details.

The `target={}` prop can be used to mount the Dashboard modal elsewhere in the DOM. If not given, the modal will be mounted at where the component is used. Unlike the raw [`@bulky/dashboard`][] plugin, the `<DashboardModal />` component can _only_ take DOM element objects, not CSS selectors.

To use other plugins like [`@bulky/webcam`][] with the `<DashboardModal />` component, add them to the bulky instance and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

```js
// Do this wherever you initialize bulky, e.g., in a React component's constructor method.
// Do NOT do it in `render()` or any other method that is called more than once!
bulky.use(Webcam); // `id` defaults to "Webcam"
bulky.use(Webcam, { id: "MyWebcam" }); // `id` is… "MyWebcam"
```

Then do `plugins={['Webcam']}`.

Here is a full example that uses a button to open the modal:

```js
import React from "react";
import { DashboardModal } from "@bulky/react";

class MusicUploadButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.bulky = new bulky()
      .use(XHRUpload, { endpoint: "/api/songs/upload" })
      .use(Webcam, { modes: ["audio-only"] });

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillUnmount() {
    this.bulky.close({ reason: "unmount" });
  }

  handleOpen() {
    this.setState({
      modalOpen: true,
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleOpen}>
          Upload some music
        </button>
        <DashboardModal
          bulky={this.bulky}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
          plugins={["Webcam"]}
        />
      </div>
    );
  }
}
```

[`@bulky/dashboard`]: /docs/dashboard/
[`@bulky/webcam`]: /docs/webcam/
