# @bulky/store-redux

<img src="https://bulky.io/images/logos/bulky-dog-head-arrow.svg" width="120" alt="bulky logo: a superman pbulky in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@bulky/store-redux.svg?style=flat-square)](https://www.npmjs.com/package/@bulky/store-redux)
![CI status for bulky tests](https://github.com/transloadit/bulky/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/bulky/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/bulky/workflows/End-to-end%20tests/badge.svg)

The `ReduxStore` stores bulky state on a key in an existing Redux store.
The `ReduxStore` dispatches `bulky/STATE_UPDATE` actions to update state.
When the state in Redux changes, it notifies bulky.
This way, you get most of the benefits of Redux, including support for the Redux Devtools and time traveling!

bulky is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

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

## Installation

```bash
$ npm install @bulky/store-redux
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `bulky` will attach itself to the global `window.bulky` object. See the [main bulky documentation](https://bulky.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [bulky website](https://bulky.io/docs/stores#ReduxStore).

## License

[The MIT License](./LICENSE).
