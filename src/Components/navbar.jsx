import "./navbar.css";
import logo from "../Assets/logo.png";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="gu-navbar">
        <div className="nav-logo">
          <img className="logo" src={logo} alt="img" />
          CricBazzar
        </div>

        <div className="nav-search-div">
          <input className="nav-search" type="search" placeholder="search..." />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>
        <div className="nav-list">
          <ul id="login-btn" className="nav-list-item">
            Login
          </ul>
          <ul className="nav-list-item">
            <div className="gu-badge">
              <span className="gu-icon">
                <i className="fas fa-heart"></i>
                <span className="notify-num">3</span>
              </span>
            </div>
          </ul>
          <ul className="nav-list-item">
            <div className="gu-badge">
              <span className="gu-icon">
                <i className="fas fa-shopping-cart"></i>
                <span className="notify-num">1</span>
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

export { Navbar };
