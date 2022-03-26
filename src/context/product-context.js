import { createContext, useReducer, useContext } from "react";
import { productReducerFunc } from "reducer/product-reducer";
import { products } from "backend/db/products";
import {
  sortPrice,
  FilterPrice,
  FilterRating,
  categoryFilter,
} from "utilities";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducerFunc, {
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
    price: 0,
  });

  const sortedProduct = sortPrice(products, state.sortBy);

  const ratingProduct = FilterRating(sortedProduct, state.sortRating);

  const pirceFilteredProduct = FilterPrice(ratingProduct, state.price);

  const categoriesFilterd = categoryFilter(
    pirceFilteredProduct,
    state.categoryName.bat,
    state.categoryName.ball,
    state.categoryName.shoes,
    state.categoryName.protection,
    state.categoryName.clothings,
    state.categoryName.accessories
  );

  const updatedDataList = categoriesFilterd;
  return (
    <productContext.Provider value={{ state, dispatch, updatedDataList }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { useProduct, ProductProvider };
