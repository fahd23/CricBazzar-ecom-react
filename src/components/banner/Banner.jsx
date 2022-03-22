import React from "react";
import "components/banner/banner.css";

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
            <a href="/" className="link-btn shop-now-btn">
              SHOP NOW
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
