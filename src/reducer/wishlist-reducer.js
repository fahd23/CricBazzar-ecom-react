export const wishlistReducer = (state, action) => {
  const { wishlist } = state;

  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (
        wishlist.filter((item) => item._id === action.payload._id).length === 1
      )
        return {
          ...state,
          wishlist: [
            ...wishlist.filter((item) => item._id !== action.payload._id),
          ],
        };

      return {
        ...state,
        wishlist: [...wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [
          ...wishlist.filter((item) => item._id !== action.payload._id),
        ],
      };

    case "default":
      return state;
  }
};
