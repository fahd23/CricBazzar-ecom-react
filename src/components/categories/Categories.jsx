import React from "react";
import "components/categories/categories.css";

const Categories = () => {
  return (
    <>
      <div>
        <h1 className="section-title">CATEGORIES</h1>
        <section className="grid-container">
          <div className="card-display-container">
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/Cricket-bat.jpg"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">CRICKET BATS</h2>
              </div>
            </div>
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-ball.jpeg"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">CRICKET BALLS</h2>
              </div>
            </div>
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-gloves.jpg"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">CRICKET GLOVES</h2>
              </div>
            </div>
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-pads.jpg"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">CRICKET PADS</h2>
              </div>
            </div>
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-clothing.jpg"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">CRICKET CLOTHINGS</h2>
              </div>
            </div>
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket%20shoe.jpg"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">CRICKET SHOES</h2>
              </div>
            </div>
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket-protection-kit.png"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">PROTECTION GEAR</h2>
              </div>
            </div>
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src="https://cricbazzar.netlify.app/Assets/cricket%20bags.jpg"
                  alt="bat-img"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">ACCESSORIES</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
