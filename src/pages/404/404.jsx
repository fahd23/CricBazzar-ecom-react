import { Link } from "react-router-dom";
import "App.css";
import "./404.css";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="error_page gap-3">
        <div className="flex jtfy-c-center">
          <img
            className="img-404"
            src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1649310451/CricBazzar%20Ecommerce/images-removebg-preview_ducmai.png"
            alt="404 error img"
          />
        </div>
        <div className="flex-clm align-itm-c">
          <h1 className="description margin-btm content-404">Page Not Found</h1>
          <h2 className="description grey-text margin-btm content-404">
            Sorry we cant find that page, Looks Like You have been Lost
          </h2>

          <Link to="/">
            <button className="link-btn home-btn"> Home </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
