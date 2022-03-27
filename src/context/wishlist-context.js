import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "reducer/wishlist-reducer";
const defaultWishlistValue = {
  wishlist: [],
};

const WishlistContext = createContext(defaultWishlistValue);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  return (
    <div>
      <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
        {children}
      </WishlistContext.Provider>
    </div>
  );
};
const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
