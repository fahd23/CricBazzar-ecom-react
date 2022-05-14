import "App.css";
import "./product.css";
import React, { useEffect } from "react";
import { BsSuitHeart, BsSuitHeartFill, BsFilterLeft } from "react-icons/bs";
import { useCart, useProduct, useWishlist, useAuth } from "context";
import { FilterOperations } from "./FilterOperations";
import { Link, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Product = ({ products }) => {
  const { state, dispatch, showFilter, setShowFilter } = useProduct();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const [searchParams] = useSearchParams();
  const categorySelected = searchParams.get("categories");
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch({ type: categorySelected });
    return () => {
      dispatch({ type: "CLEAR" });
    };
  }, [categorySelected]);

  return (
    <div>
      <aside
        className={`filters-aside ${showFilter ? "trans-on" : "trans-off"}`}
      >
        <FilterOperations state={state} dispatch={dispatch} />
      </aside>

      <div className="products-container">
        <div
          className="show-filter"
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          <BsFilterLeft />
          {showFilter ? "Hide filters" : "Show filters"}
        </div>
        <h2 className="title">Showing {products.length} Products</h2>
        <div className="product-display align-itm-c">
          {products.map((product) => (
            <div
              className="card vertical-card-container card-with-shadow"
              key={product._id}
            >
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src={product.img}
                  alt={product.productName}
                />
                {Number(product.rating) > 4 && (
                  <span className="card-badge"> Best seller </span>
                )}
                <span
                  className="favorite-btn"
                  onClick={() => {
                    if (isLoggedIn) {
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: product,
                      });
                    } else toast.error("Please Login to Add to Wishlist");
                  }}
                >
                  {wishlist.find((item) => item._id === product._id) ? (
                    <BsSuitHeartFill
                      onClick={() => toast.error("Removed from Wishlist")}
                    />
                  ) : (
                    <BsSuitHeart
                      onClick={() =>
                        isLoggedIn && toast.success("Added to Wishlist")
                      }
                    />
                  )}
                </span>
              </div>

              <div className="card-info">
                <h2 className="card-title">{product.productName}</h2>
                <h3 className="subtitle flex gap-10 para-sm align-itm-c">
                  {product.description}
                  <span className="flex align-itm-c rating-outline">
                    {product.rating}
                    <i className="fas fa-star filled rating-icon"> </i>
                  </span>
                </h3>
                <div className="card-body">
                  <div>
                    <p className="disc-price">₹ {product.price}</p>
                    <p className="actual-price">₹ {product.mrp}</p>
                    <p className="offer-info">({product.offer})</p>
                  </div>
                </div>
                <div className="card-footer">
                  {cart.some(({ product: prd }) => prd._id === product._id) ? (
                    <Link
                      to="/carts"
                      className="btn-link call-to-action vertical-btn"
                    >
                      Go to cart
                    </Link>
                  ) : (
                    <button
                      className="btn-link call-to-action vertical-btn"
                      onClick={() => {
                        if (isLoggedIn) {
                          cartDispatch({
                            type: "ADD_TO_CART",
                            payload: product,
                          });
                          toast.success("Added to cart");
                        } else toast.error("Please Login to Add to Cart");
                      }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
                <ToastContainer position="bottom-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
