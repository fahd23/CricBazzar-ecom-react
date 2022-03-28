export const FilterOperations = ({ state, dispatch }) => {
  return (
    <>
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
            <span>Price - Low to High</span>
          </label>
        </div>
      </div>

      <div className="product-rating">
        <h2 className="margin-btm">Rating</h2>
        <div className="flex-clm gap-10 para-sm">
          {[4, 3, 2, 1].map((rating) => (
            <label>
              <input
                type="radio"
                name="rate"
                value={rating}
                checked={state.sortRating === `${rating}`}
                onClick={(e) =>
                  dispatch({ type: "RATING", payload: e.target.value })
                }
              />
              <span> {rating} Stars and above</span>
            </label>
          ))}
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
    </>
  );
};
