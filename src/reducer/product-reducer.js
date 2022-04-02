export const productReducerFunc = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        sortBy: "",
        sortRating: "",
        categoryName: {
          bat: false,
          ball: false,
          shoes: false,
          protection: false,
          clothings: false,
          accessories: false,
        },
        price: "",
      };
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "RATING":
      return { ...state, sortRating: action.payload };
    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "BAT":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          bat: !state.categoryName.bat,
        },
      };
    case "BALL":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          ball: !state.categoryName.ball,
        },
      };
    case "SHOES":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          shoes: !state.categoryName.shoes,
        },
      };
    case "ACCESSORIES":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          accessories: !state.categoryName.accessories,
        },
      };
    case "PROTECTION":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          protection: !state.categoryName.protection,
        },
      };
    case "CLOTHINGS":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          clothings: !state.categoryName.clothings,
        },
      };
    default:
      return state;
  }
};
