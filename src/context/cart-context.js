import { useState, createContext, useContext } from "react";

const defaultCartContextValue = {
  items: 6,
};
const CartContext = createContext(defaultCartContextValue);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  const addToCart = () => {
    setCartItems((item) => item + 1);
  };
  const removeFromCart = () => {
    setCartItems((item) => item - 1);
  };
  return (
    <div>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
