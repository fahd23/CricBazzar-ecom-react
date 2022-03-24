import React from "react";
import "./cart.css";
const Cart = () => {
  return (
    <>
      <h2 class="h2 cart-title">My Cart</h2>
      <div className="cart-display">
        <div className="card horizontal-card-container card-with-shadow">
          <div className="card-img">
            <img
              className="horizontal-card-img"
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921629/CricBazzar%20Ecommerce/cricket_shoe_v3mnpp.jpg"
              alt="Shoe-img"
            />
          </div>
          <div className="card-info cart-card-info">
            <h2 className="card-title">Nike Shoe</h2>
            <div className="card-body">
              <div>
                <p className="disc-price">₹850</p>
                <p className="actual-price">₹1700</p>
                <p className="offer-info">(50% OFF)</p>
              </div>
              <div>
                <h3>
                  Quantity:
                  <input
                    type="number"
                    className="quantity-input"
                    min="1"
                    defaultValue="1"
                  />
                </h3>
              </div>
            </div>
            <div className="card-footer cart-card-footer">
              <button className="btn default">Remove from Cart</button>
              <button className="btn otld-default">Move to Wishlist</button>
            </div>
          </div>
        </div>

        <div className="card text-only-card card-with-shadow">
          <h2>Price details</h2>
          <hr />
          <div className="card-body">
            <div className="flex sp-bwtn">
              <h4>Price</h4>
              <p>₹850</p>
            </div>
            <div className="flex sp-bwtn">
              <h4>Discount</h4>
              <p>50% off</p>
            </div>
            <div className="flex sp-bwtn">
              <h4>Delivery Charges</h4>
              <p>₹50</p>
            </div>
            <hr />
            <div className="flex sp-bwtn">
              <h3>Total Amount</h3>
              <p>₹900</p>
            </div>
            <hr />
            <h4 className="pric-savings">You will save ₹850 on this order</h4>
            <button className="btn success">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
