import "components/navbar/navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
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
          <Link to="/login" id="login-btn" className="nav-list-item">
            Login
          </Link>
          <ul className="nav-list-item">
            <div className="gu-badge">
              <span className="gu-icon">
                <Link to="/wishlist" className="linkStyle">
                  <i className="fas fa-heart"></i>
                  <span className="notify-num">3</span>
                </Link>
              </span>
            </div>
          </ul>
          <ul className="nav-list-item">
            <div className="gu-badge">
              <span className="gu-icon">
                <Link to="/carts" className="linkStyle">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="notify-num">1</span>
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