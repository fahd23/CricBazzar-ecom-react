import React, { useEffect } from "react";
import Navbar from "components/navbar/Navbar";
import Banner from "components/banner/Banner";
import Categories from "components/categories/Categories";
import Footer from "components/footer/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Home | CricBazzar";
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
