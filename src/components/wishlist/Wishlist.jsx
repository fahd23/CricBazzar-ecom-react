import "components/wishlist/wishlist.css";
import { useCart, useWishlist } from "context";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

const Wishlist = () => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  return (
    <div className="wishlist-display flex-clm">
      <h2 className="h2 cart-title">
        {wishlist.length ? `My wishlist ${wishlist.length}` : `Empty wishlist`}
      </h2>
      {wishlist.length === 0 ? (
        <>
          <h3>You Don't Have Any Items In Wishlist.</h3>
          <img
            src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1648393191/CricBazzar%20Ecommerce/res-console.cloudinary-removebg-preview_ffxaq7.png"
            alt="No items"
          />
        </>
      ) : (
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
                      <BsSuitHeartFill
                        onClick={() => toast.error("Removed from Wishlist")}
                      />
                    ) : (
                      <BsSuitHeart
                        onClick={() => toast.error("Removed from Wishlist")}
                      />
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
                      <p className="offer-info">({product.offer})</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      disabled={cart.find(
                        ({ product: prd }) => prd._id === product._id
                      )}
                      className="btn-link call-to-action vertical-btn"
                      onClick={() => {
                        cartDispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        });
                        wishlistDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: product,
                        });
                        toast.success("Moved to cart");
                      }}
                    >
                      {cart.find((item) => item.product._id === product._id)
                        ? "Already in cart"
                        : "Move to cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <ToastContainer position="bottom-center" />
    </div>
  );
};
export default Wishlist;
