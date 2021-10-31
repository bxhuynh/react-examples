const { combineReducers } = require("redux");
const productReducers = require("./product");
const cartReducers = require("./cart");

const reducer = combineReducers({
  product: productReducers,
  card: cartReducers,
});

module.exports = reducer;
