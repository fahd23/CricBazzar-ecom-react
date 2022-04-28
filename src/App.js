import "App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  Carts,
  LoginPage,
  SignupPage,
  WishListPage,
  NotFound,
} from "pages";
import { RequiresAuth } from "components/router/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/carts"
          element={<RequiresAuth>{<Carts />}</RequiresAuth>}
        />
        <Route
          path="/wishlist"
          element={<RequiresAuth>{<WishListPage />}</RequiresAuth>}
        />
      </Routes>
    </div>
  );
}

export default App;
