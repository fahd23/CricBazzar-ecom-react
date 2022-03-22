import "./auth.css";
import { useEffect } from "react";
import Navbar from "components/navbar/Navbar";
import Signup from "components/auth/Signup";
import Footer from "components/footer/Footer";

const SignupPage = () => {
  useEffect(() => {
    document.title = "Signup | CricBazzar";
  });
  return (
    <>
      <Navbar />
      <Signup />
      <Footer />
    </>
  );
};
export default SignupPage;
