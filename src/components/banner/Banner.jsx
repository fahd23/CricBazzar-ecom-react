import React from "react";
import "components/banner/banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div>
        <section className="banner-img-container">
          <img
            className="banner-img"
            src="https://cricbazzar.netlify.app/Assets/banner1.jpg"
            alt="Banner-img"
          />
          <div className="text-overlay-container">
            <h2 className="text-overlay">
              Branded Products boost your confidence
            </h2>
            <Link to="/products" className="link-btn shop-now-btn">
              SHOP NOW
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
