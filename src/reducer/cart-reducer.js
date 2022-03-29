export const cartReducer = (state, action) => {
  const { cart, quantity } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      if (cart.filter((item) => item._id === payload._id).length === 1)
        return {
          ...state,
          cart: [...cart.filter((item) => item._id !== payload._id)],
        };

      return {
        ...state,
        cart: [...cart, payload],
        quantity: [...quantity, payload, (payload.value = 1)],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...cart.filter((item) => item._id !== payload._id)],
      };
    case "INC_CART_QUANTITY":
      if (quantity.filter((item) => item._id === payload._id)) {
        console.log(state);
        return {
          ...state,
          quantity: [...quantity, (payload.value += 1)],
        };
      }
    case "DEC_CART_QUANTITY":
      if (quantity.filter((item) => item._id === payload._id))
        return {
          ...state,
          quantity: [
            ...quantity,
            (payload.value =
              payload.value > 1 ? payload.value - 1 : payload.value),
          ],
        };
    case "default":
      return state;
  }
};
