import React, { useEffect } from "react";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import Product from "components/product/Product";

const Products = () => {
  useEffect(() => {
    document.title = "Products | CricBazzar";
  });
  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
    </div>
  );
};

export default Products;
