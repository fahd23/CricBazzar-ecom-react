import React from "react";
import "components/featured-card/featuredCard.css";

const FeaturedCard = () => {
  return (
    <>
      <section className="featured-section">
        <h1 className="section-title">DEAL OF THE DAY</h1>
        <div className="featured-cards">
          <div className="card vertical-card-container card-with-shadow">
            <div className="card-img">
              <img
                className="vertical-card-img"
                src="https://cricbazzar.netlify.app/Assets/Cricket-bat.jpg"
                alt="bat-img"
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Kookaburra Bat</h2>
              <h3 className="subtitle">Extreme power</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹7000</p>
                  <p className="actual-price">₹3500</p>
                  <p className="offer-info">(50% OFF)</p>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn-link call-to-action vertical-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card vertical-card-container card-with-shadow">
            <div className="card-img">
              <img
                className="vertical-card-img"
                src="https://cricbazzar.netlify.app/Assets/cricket%20shoe.jpg"
                alt="Shoe-img"
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">Kookaburra Shoe</h2>
              <h3 className="subtitle">With Spikes</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹3000</p>
                  <p className="actual-price">₹1500</p>
                  <p className="offer-info">(50% OFF)</p>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn-link call-to-action vertical-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCard;
