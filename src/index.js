import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "context/product-context";
import { WishlistProvider } from "context/wishlist-context";
import { CartProvider } from "context/cart-context";
import { AuthProvider } from "context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <CartProvider>
          <WishlistProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </WishlistProvider>
        </CartProvider>
      </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
