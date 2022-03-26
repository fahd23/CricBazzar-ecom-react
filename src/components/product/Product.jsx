import "App.css";
import "./product.css";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useCart } from "context/cart-context";
import { useWishlist } from "context/wishlist-context";
import { useProduct } from "context/product-context";

const Product = ({ products }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { state, dispatch } = useProduct();
  return (
    <div className="flex">
      <aside className="filters-aside">
        <div className="filter-title flex sp-bwtn align-itm-c">
          <h2>Filters</h2>
          <a className="clear-txt" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </a>
        </div>

        <div>
          <h2 className="margin-btm">Price</h2>
          <div>
            <div className="range flex sp-bwtn para-sm">
              <p>250</p>
              <p>4500</p>
              <p>10000</p>
            </div>

            <div className="slider">
              <input
                type="range"
                className="range-slider"
                min="300"
                max="10000"
                step="100"
                value={state.price}
                onChange={(e) =>
                  dispatch({ type: "PRICE", payload: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="sort">
          <h2 className="margin-btm">Sort by</h2>

          <div className="flex-clm gap-10">
            <label>
              <input
                type="radio"
                name="sort"
                checked={state.sortBy === "HIGH_TO_LOW"}
                onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
              />
              <span>Price - High to Low</span>
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                checked={state.sortBy === "LOW_TO_HIGH"}
                onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
              />
              <span>Price - Low to High </span>
            </label>
          </div>
        </div>

        <div className="product-rating">
          <h2 className="margin-btm">Rating</h2>

          <div className="flex-clm gap-10 para-sm">
            <label>
              <input
                type="radio"
                name="rate"
                value="4"
                checked={state.sortRating === "4"}
                onClick={(e) =>
                  dispatch({ type: "RATING", payload: e.target.value })
                }
              />
              <span> 4 Stars and above</span>
            </label>
            <label>
              <input
                type="radio"
                name="rate"
                value="3"
                checked={state.sortRating === "3"}
                onClick={(e) =>
                  dispatch({ type: "RATING", payload: e.target.value })
                }
              />
              <span>3 Stars and above </span>
            </label>
            <label>
              <input
                type="radio"
                name="rate"
                value="2"
                checked={state.sortRating === "2"}
                onClick={(e) =>
                  dispatch({ type: "RATING", payload: e.target.value })
                }
              />
              <span>2 Stars and above </span>
            </label>
            <label>
              <input
                type="radio"
                name="rate"
                value="1"
                checked={state.sortRating === "1"}
                onClick={(e) =>
                  dispatch({ type: "RATING", payload: e.target.value })
                }
              />
              <span>1 Stars and above </span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="margin-btm">Category</h2>

          <div className="flex-clm gap-10 para-sm">
            <label className="checkbox">
              <input
                className="check-input"
                type="checkbox"
                value="bat"
                checked={state.categoryName.bat}
                onClick={() => dispatch({ type: "BAT" })}
              />
              <span>Bat</span>
            </label>

            <label className="checkbox">
              <input
                className="check-input"
                type="checkbox"
                value="ball"
                checked={state.categoryName.ball}
                onClick={() => dispatch({ type: "BALL" })}
              />
              <span>Ball</span>
            </label>
            <label className="checkbox">
              <input
                className="check-input"
                type="checkbox"
                value="protection"
                checked={state.categoryName.protection}
                onClick={() => dispatch({ type: "PROTECTION" })}
              />
              <span>Protection Kits</span>
            </label>
            <label className="checkbox">
              <input
                className="check-input"
                type="checkbox"
                value="shoes"
                checked={state.categoryName.shoes}
                onClick={() => dispatch({ type: "SHOES" })}
              />
              <span>Shoes</span>
            </label>
            <label className="checkbox">
              <input
                className="check-input"
                type="checkbox"
                value="accessories"
                checked={state.categoryName.accessories}
                onClick={() => dispatch({ type: "ACCESSORIES" })}
              />
              <span>Accessories</span>
            </label>
            <label className="checkbox">
              <input
                className="check-input"
                type="checkbox"
                value="clothings"
                checked={state.categoryName.clothings}
                onClick={() => dispatch({ type: "CLOTHINGS" })}
              />
              <span>Clothings</span>
            </label>
          </div>
        </div>
      </aside>
      <div>
        <h2 className="title">
          Showing All Products
          <span className="para-sm grey-text">
            {" "}
            (Showing {products.length} products)
          </span>
        </h2>
        <div className="product-display align-itm-c">
          {products.map((product) => (
            <div className="card vertical-card-container card-with-shadow">
              <div className="card-img">
                <img
                  className="vertical-card-img"
                  src={product.img}
                  alt={product.productName}
                />
                <span className="favorite-btn" onClick={addToWishlist}>
                  <BsSuitHeart />
                </span>
              </div>

              <div className="card-info">
                <h2 className="card-title">{product.productName}</h2>
                <h3 className="subtitle flex gap-10 para-sm">
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
                  <button
                    className="btn-link call-to-action vertical-btn"
                    onClick={addToCart}
                  >
                    Add to cart
                  </button>
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
