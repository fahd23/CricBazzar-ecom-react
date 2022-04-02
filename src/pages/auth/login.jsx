import "./auth.css";
import { useEffect } from "react";
import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import Login from "components/auth/Login";
const LoginPage = () => {
  useEffect(() => {
    document.title = "Login | CricBazzar";
  }, []);
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};
export default LoginPage;
