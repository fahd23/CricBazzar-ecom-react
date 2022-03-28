import "components/wishlist/wishlist.css";
// import { useCart } from "context/cart-context";
import { useWishlist } from "context/wishlist-context";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  return (
    <>
      <div className="wishlist-display flex-clm">
        {wishlist.length === 0 ? (
          <>
            <h1>Empty Wishlist</h1>
            <h3>You Don't Have Any Items In Wishlist.</h3>
            <img
              src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1648393191/CricBazzar%20Ecommerce/res-console.cloudinary-removebg-preview_ffxaq7.png"
              alt="No items"
            />
          </>
        ) : (
          <>
            <h2 className="h2 wishlist-title">My Wishlist {wishlist.length}</h2>
            <div className="flex gap-3 flex-wrp sp-around">
              {wishlist?.map((product) => {
                return (
                  <div className="card vertical-card-container card-with-shadow">
                    <div className="card-img">
                      <img
                        className="vertical-card-img"
                        src={product.img}
                        alt={product.productName}
                      />
                      <span
                        className="favorite-btn"
                        onClick={() =>
                          wishlistDispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: product,
                          })
                        }
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
                          <p
                            className="offer-info"
                            style={{ color: "#21f88c" }}
                          >
                            ({product.offer})
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn-link call-to-action vertical-btn"
                          onClick={() =>
                            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST" })
                          }
                        >
                          Move to cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Wishlist;
