import "App.css";
import "./product.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";

const Product = () => {
  return (
    <div className="flex">
      <aside className="filters-aside">
        <div className="filter-title flex sp-bwtn align-itm-c">
          <h2>Filters</h2>
          <a className="clear-txt">Clear</a>
        </div>

        <div>
          <h2 className="margin-btm">Price</h2>
          <div>
            <div className="range flex sp-bwtn para-sm">
              <p>100</p>
              <p>4500</p>
              <p>10000</p>
            </div>

            <div className="slider">
              <input
                type="range"
                className="range-slider"
                min="100"
                max="10000"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="margin-btm">Category</h2>

          <div className="flex-clm gap-10 para-sm">
            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Men</span>
            </label>

            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Women </span>
            </label>

            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Kids </span>
            </label>
          </div>
        </div>

        <div className="product-rating">
          <h2 className="margin-btm">Rating</h2>

          <div className="flex-clm gap-10 para-sm">
            <label>
              <input type="radio" name="rate" />
              <span> 4 Stars and above</span>
            </label>
            <label>
              <input type="radio" name="rate" />
              <span>3 Stars and above </span>
            </label>
            <label>
              <input type="radio" name="rate" />
              <span>2 Stars and above </span>
            </label>
            <label>
              <input type="radio" name="rate" />
              <span>1 Stars and above </span>
            </label>
          </div>
        </div>

        <div className="sort">
          <h2 className="margin-btm">Sort by</h2>

          <div className="flex-clm gap-10">
            <label>
              <input type="radio" name="sort" />
              <span>Price - High to Low</span>
            </label>
            <label>
              <input type="radio" name="sort" />
              <span>Price - Low to High </span>
            </label>
          </div>
        </div>
      </aside>
      <div>
        <h2 className="title">
          Showing All Products
          <span className="para-sm grey-text"> (Showing 6 products)</span>
        </h2>
        <div className="product-display">
          <div className="card vertical-card-container card-with-shadow">
            <div className="card-img">
              <img
                className="vertical-card-img"
                src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921594/CricBazzar%20Ecommerce/Cricket-bat_lwscgk.jpg"
                alt="bat-img"
              />
              <span className="favorite-btn">
                <BsSuitHeart />
              </span>
            </div>

            <div className="card-info">
              <h2 className="card-title">Kookaburra Bat</h2>
              <h3 className="subtitle">Extreme power</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹3500</p>
                  <p className="actual-price">₹7000</p>
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
                src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921638/CricBazzar%20Ecommerce/cricket-ball_lco1zt.jpg"
                alt="bat-img"
              />
              <span className="favorite-btn">
                <BsSuitHeart />
              </span>
            </div>

            <div className="card-info">
              <h2 className="card-title">Leather Ball</h2>
              <h3 className="subtitle">Standard Size</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹300</p>
                  <p className="actual-price">₹399</p>
                  <p className="offer-info">(25% OFF)</p>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn-link call-to-action vertical-btn">
                  Move to cart
                </button>
              </div>
            </div>
          </div>

          <div className="card vertical-card-container card-with-shadow">
            <div className="card-img">
              <img
                className="vertical-card-img"
                src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921655/CricBazzar%20Ecommerce/cricket-gloves_jswvvp.jpg"
                alt="bat-img"
              />
              <span className="favorite-btn">
                <BsSuitHeartFill />
              </span>
            </div>

            <div className="card-info">
              <h2 className="card-title">Kookaburra Shoe</h2>
              <h3 className="subtitle">With Spikes</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹1500</p>
                  <p className="actual-price">₹3000</p>
                  <p className="offer-info">(50% OFF)</p>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn-link call-to-action vertical-btn">
                  Move to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card vertical-card-container card-with-shadow">
            <div className="card-img">
              <img
                className="vertical-card-img"
                src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921622/CricBazzar%20Ecommerce/cricket_bags_r7olq7.jpg"
                alt="bat-img"
              />
              <span className="favorite-btn">
                <BsSuitHeart />
              </span>
            </div>

            <div className="card-info">
              <h2 className="card-title">Kookaburra Bat</h2>
              <h3 className="subtitle">Extreme power</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹3500</p>
                  <p className="actual-price">₹7000</p>
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
                src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921629/CricBazzar%20Ecommerce/cricket_shoe_v3mnpp.jpg"
                alt="bat-img"
              />
              <span className="favorite-btn">
                <BsSuitHeartFill />
              </span>
            </div>

            <div className="card-info">
              <h2 className="card-title">Kookaburra Bat</h2>
              <h3 className="subtitle">Extreme power</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹3500</p>
                  <p className="actual-price">₹7000</p>
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
                src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921662/CricBazzar%20Ecommerce/cricket-pads_qjpl23.jpg"
                alt="bat-img"
              />
              <span className="favorite-btn">
                <BsSuitHeart />
              </span>
            </div>

            <div className="card-info">
              <h2 className="card-title">Kookaburra Bat</h2>
              <h3 className="subtitle">Extreme power</h3>
              <div className="card-body">
                <div>
                  <p className="disc-price">₹3500</p>
                  <p className="actual-price">₹7000</p>
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
      </div>
    </div>
  );
};

export default Product;
