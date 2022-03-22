import React from "react";
import "components/footer/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <p className="footer-titles">Quick Links</p>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/products">Products</Link>
          </ul>
          <ul>
            <Link to="/carts">My Cart</Link>
          </ul>
          <ul>
            <Link to="/wishlist">My Wish List</Link>
          </ul>
        </div>

        <div>
          <p className="footer-titles">Connect with me</p>
          <div className="footer-icon-container">
            <a
              className="footer-icon fab fa-github-square"
              target="_blank"
              href="https://github.com/fahd23"
              aria-hidden="true"
            ></a>
            <a
              className="footer-icon fab fa-linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/sn-fahd/"
              aria-hidden="true"
            ></a>
            <a
              className="footer-icon fab fa-twitter"
              target="_blank"
              href="https://twitter.com/Snfahd_"
              aria-hidden="true"
            ></a>
          </div>
          <p className="footer-text">© Code by Fahd | CricBazzar | 2022</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
