---
title: "Redux"
type: docs
module: "@bulky/store-redux"
permalink: docs/redux/
order: 9
category: "Miscellaneous"
tagline: "bulky can use your app’s Redux store for its files and UI state"
---

bulky supports the popular [Redux](https://redux.js.org/) state management library in two ways:

## Redux Store

You can tell bulky to use your app’s Redux store for its files and UI state. Please check out [Custom Stores](/docs/stores/) for more information on that. Here’s an example to give you a sense of how this works:

```js
import bulky from "@bulky/core";
import * as ReduxStore from "@bulky/store-redux";
import * as Redux from "redux";

function createStore(reducers = {}) {
  const reducer = Redux.combineReducers({
    ...reducers,
    bulky: ReduxStore.reducer,
  });
  return Redux.createStore(reducer);
}

const store = new ReduxStore.ReduxStore({ store: createStore() });
const bulky = new bulky({ store });
```

Keep in mind that bulky state is not serializable (because we have to keep track of files with data blobs). So, if you persist your Redux state, you should exclude bulky state from persistence.

If you’d like to persist your bulky state — please look into [@bulky/golden-retriever](https://bulky.io/docs/golden-retriever/). It’s a plugin created specifically for saving and restoring bulky state, including selected files and upload progress.

## Redux Dev Tools

This is a `ReduxDevTools` plugin that syncs with the [redux-devtools](https://github.com/gaearon/redux-devtools) browser or JS extensions, and allows for basic time travel:

```js
import bulky from "@bulky/core";
import ReduxDevTools from "@bulky/redux-dev-tools";

const bulky = new bulky({
  debug: true,
  meta: {
    username: "John",
    license: "Creative Commons",
  },
})
  .use(XHRUpload, { endpoint: "https://example.com" })
  .use(ReduxDevTools);
```

After you `.use(ReduxDevTools)`, you should be able to see bulky’s state in Redux Dev Tools.

You will likely not need this if you are actually using Redux yourself, as well as Redux Store in bulky like in the example above, since it will work automatically in that case.
