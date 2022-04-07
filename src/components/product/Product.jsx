import "App.css";
import "./product.css";
import { useEffect } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useWishlist } from "context/wishlist-context";
import { useProduct } from "context/product-context";
import { useCart } from "context/cart-context";
import { FilterOperations } from "./FilterOperations";
import { Link, useSearchParams } from "react-router-dom";

const Product = ({ products }) => {
  const { state, dispatch } = useProduct();
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
  useEffect(() => {
    dispatch({ type: categorySelected });
    return () => {
      dispatch({ type: "CLEAR" });
    };
  }, [categorySelected]);
  return (
    <div className="flex">
      <aside className="filters-aside">
        <FilterOperations state={state} dispatch={dispatch} />
      </aside>
      <div>
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
                {Number(product.rating) > 4 ? (
                  <span className="card-badge"> Best seller </span>
                ) : (
                  ""
                )}
                <span
                  className="favorite-btn"
                  onClick={() => {
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    });
                  }}
                >
                  {wishlist.filter((item) => item._id === product._id)
                    .length === 1 ? (
                    <BsSuitHeartFill />
                  ) : (
                    <BsSuitHeart />
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
                    <p className="offer-info" style={{ color: "#21f88c" }}>
                      ({product.offer})
                    </p>
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
                      onClick={() =>
                        cartDispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        })
                      }
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
