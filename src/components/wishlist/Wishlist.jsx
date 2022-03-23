import "components/wishlist/wishlist.css";
import { BsSuitHeartFill } from "react-icons/bs";

const Wishlist = () => {
  return (
    <>
      <h2 className="h2 wishlist-title">My Wishlist</h2>
      <div className="wishlist-display">
        <div className="card vertical-card-container card-with-shadow">
          <div className="card-img">
            <img
              className="vertical-card-img"
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921594/CricBazzar%20Ecommerce/Cricket-bat_lwscgk.jpg"
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
                Move to cart
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
              <BsSuitHeartFill />
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
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921629/CricBazzar%20Ecommerce/cricket_shoe_v3mnpp.jpg"
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
      </div>
    </>
  );
};
export default Wishlist;
