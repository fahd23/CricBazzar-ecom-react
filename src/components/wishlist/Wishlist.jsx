import "components/wishlist/wishlist.css";
import { BsSuitHeartFill } from "react-icons/bs";

const Wishlist = () => {
  return (
    <>
      <h2 class="h2 wishlist-title">My Wishlist</h2>
      <div class="wishlist-display">
        <div class="card vertical-card-container card-with-shadow">
          <div class="card-img">
            <img
              class="vertical-card-img"
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921594/CricBazzar%20Ecommerce/Cricket-bat_lwscgk.jpg"
              alt="bat-img"
            />
            <span class="favorite-btn">
              <BsSuitHeartFill />
            </span>
          </div>

          <div class="card-info">
            <h2 class="card-title">Kookaburra Bat</h2>
            <h3 class="subtitle">Extreme power</h3>
            <div class="card-body">
              <div>
                <p class="disc-price">₹3500</p>
                <p class="actual-price">₹7000</p>
                <p class="offer-info">(50% OFF)</p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn-link call-to-action vertical-btn">
                Move to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card vertical-card-container card-with-shadow">
          <div class="card-img">
            <img
              class="vertical-card-img"
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921638/CricBazzar%20Ecommerce/cricket-ball_lco1zt.jpg"
              alt="bat-img"
            />
            <span class="favorite-btn">
              <BsSuitHeartFill />
            </span>
          </div>

          <div class="card-info">
            <h2 class="card-title">Leather Ball</h2>
            <h3 class="subtitle">Standard Size</h3>
            <div class="card-body">
              <div>
                <p class="disc-price">₹300</p>
                <p class="actual-price">₹399</p>
                <p class="offer-info">(25% OFF)</p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn-link call-to-action vertical-btn">
                Move to cart
              </button>
            </div>
          </div>
        </div>

        <div class="card vertical-card-container card-with-shadow">
          <div class="card-img">
            <img
              class="vertical-card-img"
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921629/CricBazzar%20Ecommerce/cricket_shoe_v3mnpp.jpg"
              alt="bat-img"
            />
            <span class="favorite-btn">
              <BsSuitHeartFill />
            </span>
          </div>

          <div class="card-info">
            <h2 class="card-title">Kookaburra Shoe</h2>
            <h3 class="subtitle">With Spikes</h3>
            <div class="card-body">
              <div>
                <p class="disc-price">₹1500</p>
                <p class="actual-price">₹3000</p>
                <p class="offer-info">(50% OFF)</p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn-link call-to-action vertical-btn">
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
