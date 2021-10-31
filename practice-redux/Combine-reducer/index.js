const { createStore } = require("redux");
const reducer = require("./reducers");

const store = createStore(reducer);

console.log(store.getState());
