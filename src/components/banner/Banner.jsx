import React from "react";
import "components/banner/banner.css";

const Banner = () => {
  return (
    <>
      <div>
        <section class="banner-img-container">
          <img
            class="banner-img"
            src="https://cricbazzar.netlify.app/Assets/banner1.jpg"
            alt="Banner-img"
          />
          <div class="text-overlay-container">
            <h2 class="text-overlay">Branded Products boost your confidence</h2>
            <a href="/products/products.html" class="link-btn shop-now-btn">
              SHOP NOW
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
