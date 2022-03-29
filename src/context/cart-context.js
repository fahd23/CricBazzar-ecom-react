import { useReducer, createContext, useContext } from "react";
import { cartReducer } from "reducer/cart-reducer";

const defaultCartValue = {
  cart: [],
  quantity: [],
};

const CartContext = createContext(defaultCartValue);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartValue);
  return (
    <div>
      <CartContext.Provider value={{ cartState, cartDispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
