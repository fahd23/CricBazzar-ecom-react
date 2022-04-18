import "components/navbar/navbar.css";
import { useAuth } from "context/auth-context";
import { useCart } from "context/cart-context";
import { useProduct } from "context/product-context";
import { useWishlist } from "context/wishlist-context";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { dispatch } = useProduct();
  // const navigate = useNavigate();
  return (
    <>
      <nav className="gu-navbar">
        <div className="nav-logo">
          <img className="logo" src="./Assets/logo.png" alt="img" />
          <Link to="/">CricBazzar</Link>
        </div>

        <div className="nav-search-div">
          <input className="nav-search" type="search" placeholder="search..." />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>
        <div className="nav-list">
          <Link
            to="/login"
            id="login-btn"
            className="nav-list-item"
            onClick={() => {
              isLoggedIn ? setIsLoggedIn(() => !isLoggedIn) : "";
              dispatch({ type: "CLEAR" });
              wishlistDispatch({
                type: "CLEAR",
                payload: { wishlist: [] },
              });
              cartDispatch({
                type: "CLEAR",
                payload: { cart: [] },
              });
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
          <ul className="nav-list-item">
            <div className="gu-badge">
              <span className="gu-icon">
                <Link to="/wishlist" className="linkStyle">
                  <i className="fas fa-heart"></i>
                  {isLoggedIn && wishlist.length > 0 ? (
                    <span className="notify-num">{wishlist.length}</span>
                  ) : (
                    ""
                  )}
                </Link>
              </span>
            </div>
          </ul>
          <ul className="nav-list-item">
            <div className="gu-badge">
              <span className="gu-icon">
                <Link to="/carts" className="linkStyle">
                  <i className="fas fa-shopping-cart"></i>
                  {isLoggedIn && cart.length > 0 ? (
                    <span className="notify-num">{cart.length}</span>
                  ) : (
                    ""
                  )}
                </Link>
              </span>
            </div>
          </ul>
          <ul className="nav-list-item">
            <button id="btn-ham-burger">
              <i className="far fa-bars"></i>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
