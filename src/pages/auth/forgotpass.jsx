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
    <div>
      <Navbar />
      <ForgetPass />
      <Footer />
    </div>
  );
};
export default ForgetPassPage;
