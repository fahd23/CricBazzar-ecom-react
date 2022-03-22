import "./auth.css";
import { useEffect } from "react";
import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import ForgetPass from "components/auth/ForgetPass";

const ForgetPassPage = () => {
  useEffect(() => {
    document.title = "Forget Password | CricBazzar";
  });
  return (
    <>
      <Navbar />
      <ForgetPass />
      <Footer />
    </>
  );
};
export default ForgetPassPage;
