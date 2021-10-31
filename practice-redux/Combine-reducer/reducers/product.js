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

module.exports = productReducers;
