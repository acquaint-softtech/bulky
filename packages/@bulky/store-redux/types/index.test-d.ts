// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, combineReducers } from "redux";
// eslint-disable-next-line import/no-named-as-default
import ReduxStore, { reducer as bulky } from "..";

const reducer = combineReducers({ bulky });

const store = new ReduxStore({
  store: createStore(reducer),
});

store.setState({ a: 1 });
store.getState();
