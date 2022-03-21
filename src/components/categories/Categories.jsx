import React from "react";
import "components/categories/categories.css";

const Categories = () => {
  return (
    <>
      <div>
        <h1 class="section-title">CATEGORIES</h1>
        <section class="grid-container">
          <div class="card-display-container">
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/Cricket-bat.jpg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">CRICKET BATS</h2>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-ball.jpeg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">CRICKET BALLS</h2>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-gloves.jpg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">CRICKET GLOVES</h2>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-pads.jpg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">CRICKET PADS</h2>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-clothing.jpg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">CRICKET CLOTHINGS</h2>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket%20shoe.jpg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">CRICKET SHOES</h2>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-protection-kit.png"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">PROTECTION GEAR</h2>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket%20bags.jpg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">ACCESSORIES</h2>
              </div>
            </div>
          </div>
        </section>
        <section class="featured-section">
          <h1 class="section-title">DEAL OF THE DAY</h1>
          <div class="featured-cards">
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/Cricket-bat.jpg"
                  alt="bat-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">Kookaburra Bat</h2>
                <h3 class="subtitle">Extreme power</h3>
                <div class="card-body">
                  <div>
                    <p class="disc-price">₹7000</p>
                    <p class="actual-price">₹3500</p>
                    <p class="offer-info">(50% OFF)</p>
                  </div>
                </div>
                <div class="card-footer">
                  <button class="btn-link call-to-action vertical-btn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div class="card vertical-card-container card-with-shadow">
              <div class="card-img">
                <img
                  class="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket%20shoe.jpg"
                  alt="Shoe-img"
                />
              </div>
              <div class="card-info">
                <h2 class="card-title">Kookaburra Shoe</h2>
                <h3 class="subtitle">With Spikes</h3>
                <div class="card-body">
                  <div>
                    <p class="disc-price">₹3000</p>
                    <p class="actual-price">₹1500</p>
                    <p class="offer-info">(50% OFF)</p>
                  </div>
                </div>
                <div class="card-footer">
                  <button class="btn-link call-to-action vertical-btn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
