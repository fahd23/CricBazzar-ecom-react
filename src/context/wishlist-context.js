import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "reducer/wishlist-reducer";
const defaultWishlistValue = {
  wishlistItems: [],
};

const WishlistContext = createContext(defaultWishlistValue);

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WishlistReducer, defaultWishlistValue);
  return (
    <div>
      <WishlistContext.Provider value={{ state, dispatch }}>
        {children}
      </WishlistContext.Provider>
    </div>
  );
};
const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
