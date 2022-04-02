import React, { useEffect } from "react";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import Cart from "components/cart/Cart";

const Carts = () => {
  useEffect(() => {
    document.title = "Cart | CricBazzar";
  }, []);
  return (
    <div>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
};

export default Carts;
