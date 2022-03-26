import { useState, createContext, useContext } from "react";

const defaultWishlistContextValue = {
  items: 0,
};
const WishlistContext = createContext(defaultWishlistContextValue);

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(0);
  const [isActive, setActive] = useState(false);
  const addToWishlist = () => {
    setActive(!isActive);
    setWishlistItems((item) => item + 1);
  };
  const removeFromWishlist = () => {
    setWishlistItems((item) => item - 1);
  };
  return (
    <div>
      <WishlistContext.Provider
        value={{ wishlistItems, isActive, addToWishlist, removeFromWishlist }}
      >
        {children}
      </WishlistContext.Provider>
    </div>
  );
};
const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
