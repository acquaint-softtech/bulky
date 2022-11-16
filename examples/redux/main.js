const {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
} = require("redux");
const logger = require("redux-logger").default;
const bulky = require("@bulky/core");
const bulkyReduxStore = require("@bulky/store-redux");
const Dashboard = require("@bulky/dashboard");
const Tus = require("@bulky/tus");

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const reducer = combineReducers({
  counter,
  // You don't have to use the `bulky` key. But if you don't,
  // you need to provide a custom `selector` to the `bulkyReduxStore` call below.
  bulky: bulkyReduxStore.reducer,
});

let enhancer = applyMiddleware(bulkyReduxStore.middleware(), logger);
if (typeof __REDUX_DEVTOOLS_EXTENSION__ !== "undefined") {
  // eslint-disable-next-line no-undef
  enhancer = compose(enhancer, __REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducer, enhancer);

// Counter example from https://github.com/reactjs/redux/blob/master/examples/counter-vanilla/index.html
const valueEl = document.querySelector("#value");

function getCounter() {
  return store.getState().counter;
}
function render() {
  valueEl.innerHTML = getCounter().toString();
}
render();
store.subscribe(render);

document.querySelector("#increment").onclick = () => {
  store.dispatch({ type: "INCREMENT" });
};
document.querySelector("#decrement").onclick = () => {
  store.dispatch({ type: "DECREMENT" });
};
document.querySelector("#incrementIfOdd").onclick = () => {
  if (getCounter() % 2 !== 0) {
    store.dispatch({ type: "INCREMENT" });
  }
};
document.querySelector("#incrementAsync").onclick = () => {
  setTimeout(() => store.dispatch({ type: "INCREMENT" }), 1000);
};

// bulky using the same store
const bulky = new bulky({
  id: "redux",
  store: bulkyReduxStore({ store }),
  // If we had placed our `reducer` elsewhere in Redux, eg. under an `bulky` key in the state for a profile page,
  // we'd do something like:
  //
  // store: bulkyReduxStore({
  //   store: store,
  //   id: 'avatar',
  //   selector: state => state.pages.profile.bulky
  // }),
  debug: true,
});
bulky.use(Dashboard, {
  target: "#app",
  inline: true,
  width: 400,
});
bulky.use(Tus, { endpoint: "https://tusd.tusdemo.net/" });

window.bulky = bulky;
