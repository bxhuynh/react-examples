const { createStore, combineReducers } = require("redux");

const initCardState = {
  cart: {
    items: [],
    total: 0,
  },
};

const initProductState = {
  products: {
    items: [],
  },
};

const productReducers = (state = initProductState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
    //...
    case "FETCH_PRODUCTS_FAIL":
    //
    default:
      return state;
  }
};

const cartReducers = (state = initCardState, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
    //...
    case "REMOVE_FROM_CART":
    //
    default:
      return state;
  }
};

const reducer = combineReducers({
  product: productReducers,
  card: cartReducers,
});

const store = createStore(reducer);

console.log(store.getState());

/* result expected 
  {
    product: { products: { items: [] } },
    card: { cart: { items: [], total: 0 } }
  }
*/
