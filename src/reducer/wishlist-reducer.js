export const wishlistReducer = (state, action) => {
  const { wishlist } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_WISHLIST":
      if (wishlist.filter((item) => item._id === payload._id).length === 1)
        return {
          ...state,
          wishlist: [...wishlist.filter((item) => item._id !== payload._id)],
        };

      return {
        ...state,
        wishlist: [...wishlist, payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...wishlist.filter((item) => item._id !== payload._id)],
      };
    case "CLEAR":
      return payload;
    case "default":
      return state;
  }
};
