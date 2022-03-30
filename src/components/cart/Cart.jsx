import React from "react";
import "./cart.css";
import { useCart } from "context/cart-context";
import { useWishlist } from "context/wishlist-context";
import { BsPlus } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { cart } = cartState;

  const priceDetailsReducer = (acc, cur) => {
    return cart.length
      ? {
          ...acc,
          price: acc.price + Number(cur.product.price) * Number(cur.quantity),
          mrp: acc.mrp + Number(cur.product.mrp) * Number(cur.quantity),
        }
      : acc;
  };

  const toatlPriceDetails = cart.reduce(priceDetailsReducer, {
    price: 0,
    mrp: 0,
  });
  return (
    <>
      <div className="cart-display flex-clm">
        <h2 className="cart-title">
          {cart.length ? `My Cart ${cart.length}` : `Empty Cart`}
        </h2>
        {cart.length === 0 ? (
          <>
            <h3>You Don't Have Any Items In Cart.</h3>
            <img
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1648393191/CricBazzar%20Ecommerce/res-console.cloudinary-removebg-preview_ffxaq7.png"
              alt="No items"
            />
          </>
        ) : (
          <div className="flex gap-3 flex-wrp sp-around">
            <div className="flex flex-clm gap-10 ">
              {cart?.map(({ product, quantity }) => {
                return (
                  <div className="card horizontal-card-container card-with-shadow">
                    <div className="card-img">
                      <img
                        className="horizontal-card-img"
                        src={product.img}
                        alt={product.productName}
                      />
                    </div>
                    <div className="card-info cart-card-info">
                      <h2 className="card-title">{product.productName}</h2>
                      <div className="card-body">
                        <div>
                          <p className="disc-price">₹ {product.price}</p>
                          <p className="actual-price">₹ {product.mrp}</p>
                          <p className="offer-info">({product.offer})</p>
                        </div>
                        <div>
                          <h3>
                            Quantity:
                            <button
                              className="quantity-btn default"
                              onClick={() =>
                                cartDispatch({
                                  type: "INC_CART_QUANTITY",
                                  payload: product,
                                })
                              }
                            >
                              <BsPlus />
                            </button>
                            <input
                              className="quantity-input"
                              value={quantity}
                            />
                            <button
                              className="quantity-btn default"
                              onClick={() =>
                                cartDispatch({
                                  type: "DEC_CART_QUANTITY",
                                  payload: product,
                                })
                              }
                            >
                              <HiMinusSm />
                            </button>
                          </h3>
                        </div>
                      </div>
                      <div className="card-footer cart-card-footer">
                        <button
                          className="btn default"
                          onClick={() =>
                            cartDispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                        >
                          Remove from Cart
                        </button>
                        <button
                          className="btn otld-default"
                          onClick={() => {
                            wishlistDispatch({
                              type: "ADD_TO_WISHLIST",
                              payload: product,
                            });
                            cartDispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            });
                          }}
                        >
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="card text-only-card card-with-shadow align-self-start">
              <h2>Price details</h2>
              <hr />
              <div className="card-body">
                <div className="flex sp-bwtn">
                  <h4>
                    Price (
                    <span className="grey-text">
                      {cart.length === 1
                        ? `${cart.length} item`
                        : `${cart.length} items`}{" "}
                    </span>
                    )
                  </h4>
                  <p>₹ {toatlPriceDetails.price}</p>
                </div>

                <div className="flex sp-bwtn">
                  <h4>Delivery Charges</h4>
                  <p>₹50</p>
                </div>
                <hr />
                <div className="flex sp-bwtn">
                  <h3>Total Amount</h3>
                  <p>{Number(toatlPriceDetails.price) + 50}</p>
                </div>
                <hr />
                <h4 className="pric-savings">
                  {`You will save ₹${
                    toatlPriceDetails.mrp -
                    (Number(toatlPriceDetails.price) + 50)
                  }
                   on this order`}
                </h4>
                <button className="btn success">Place Order</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
