import "App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Products from "pages/product";
import Carts from "pages/cart";
import LoginPage from "pages/auth/login";
import SignupPage from "pages/auth/signup";
import ForgetPassPage from "pages/auth/forgotpass";
import WishListPage from "pages/wishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotpassword" element={<ForgetPassPage />} />
      </Routes>
    </div>
  );
}

export default App;
