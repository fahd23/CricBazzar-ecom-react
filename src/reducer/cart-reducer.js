export const cartReducer = (state, action) => {
  const { cart, quantity } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      if (cart.filter((item) => item._id === payload._id).length === 1)
        return {
          ...state,
          cart: [...cart.filter((item) => item._id !== payload._id)],
          quantity: quantity + 1,
        };

      return {
        ...state,
        cart: [...cart, payload],
        quantity: 1,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...cart.filter((item) => item._id !== payload._id)],
      };
    case "DEC_CART_QUANTITY":
      return {
        ...state,
        quantity: quantity > 1 ? quantity - 1 : quantity,
      };

    case "INC_CART_QUANTITY":
      return {
        ...state,
        quantity: quantity + 1,
      };
    case "default":
      return state;
  }
};
