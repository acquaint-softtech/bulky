---
title: "React Native"
type: docs
module: "@bulky/react-native"
permalink: docs/react/native/
order: 8
category: "React"
---

⚠️ In Beta

`@bulky/react-native` is a basic bulky component for React Native with Expo. This plugin is still in development, and is not fully featured. You can select local images or videos, take pictures with a camera or add any files from [remote urls](/docs/url) with the help of a server-side component, [bulky Companion](/docs/companion).

Make sure to check out the example in [examples/react-native-expo](https://github.com/transloadit/bulky/tree/main/examples/react-native-expo).

<img width="400" src="/images/2019-04-11-react-native-ui-1.png">

## Installation

Install from NPM:

```shell
npm install @bulky/react-native
```

```js
import React from "react";
import bulkyFilePicker from "@bulky/react-native";

export default function MyComponent(props) {
  return (
    <bulkyFilePicker
      bulky={props.bulky}
      show={props.isFilePickerVisible}
      onRequestClose={props.hideFilePicker}
      companionUrl="https://server.bulky.io"
    />
  );
}
```

## Props

The `<bulkyFilePicker>` component supports the following props:

### bulky

The bulky instance. Initialize in constructor, add all the nessesary plugins, set up event listeners, before passing as a prop.

### show

Boolean — the `<bulkyFilePicker>` modal component will be rendered when set to `true`.

### onRequestClose

A callback that’s called when a file is picked or a “close” button is pressed. Use it to hide `<bulkyFilePicker>`, like in the example above.

### companionUrl

[bulky Companion](/docs/companion/) url.
