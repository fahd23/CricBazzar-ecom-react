import "App.css";
import "./product.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { products } from "backend/db/products";
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
                defaultValue="4500"
              />
            </div>
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

        <div>
          <h2 className="margin-btm">Category</h2>

          <div className="flex-clm gap-10 para-sm">
            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Bat</span>
            </label>

            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Ball</span>
            </label>
            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Protection Kits</span>
            </label>
            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Shoes</span>
            </label>
            <label className="checkbox">
              <input className="check-input" type="checkbox" />
              <span>Accessories</span>
            </label>
            <label className="checkbox">
              <input className="check-input" type="checkbox" />
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
                <span className="favorite-btn">
                  <BsSuitHeart />
                </span>
              </div>

              <div className="card-info">
                <h2 className="card-title">{product.productName}</h2>
                <h3 className="subtitle flex gap-10 para-sm">
                  {product.description}
                  <span
                    className="flex align-itm-c"
                    style={{
                      border: "2px solid gold",
                      borderRadius: "8px",
                      padding: "0 5px",
                      gap: "5px",
                    }}
                  >
                    {product.rating}
                    <i className="fas fa-star filled rating-icon"> </i>
                  </span>
                </h3>
                <div className="card-body">
                  <div>
                    <p className="disc-price">{product.price}</p>
                    <p className="actual-price">{product.mrp}</p>
                    <p className="offer-info">({product.offer})</p>
                  </div>
                </div>

                <div className="card-footer">
                  <button className="btn-link call-to-action vertical-btn">
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
