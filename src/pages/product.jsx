import React, { useEffect } from "react";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import Product from "components/product/Product";
import { useProduct } from "context/product-context";

const Products = () => {
  const { updatedDataList } = useProduct();
  useEffect(() => {
    document.title = "Products | CricBazzar";
  }, []);
  return (
    <div>
      <Navbar />
      <Product products={updatedDataList} />
      <Footer />
    </div>
  );
};

export default Products;
