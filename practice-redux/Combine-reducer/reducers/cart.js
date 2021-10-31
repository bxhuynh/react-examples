const initCardState = {
  cart: {
    items: [],
    total: 0,
  },
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

module.exports = cartReducers;
