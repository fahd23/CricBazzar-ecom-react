import React, { useEffect } from "react";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import Wishlist from "components/wishlist/Wishlist";

const WishListPage = () => {
  useEffect(() => {
    document.title = "My Wishlist | CricBazzar";
  }, []);
  return (
    <div>
      <Navbar />
      <Wishlist />
      <Footer />
    </div>
  );
};

export default WishListPage;
