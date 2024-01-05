import Footer from "../fragment/Footer";
import Navbar from "../fragment/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Template = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-conforter">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Template;
