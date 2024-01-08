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
    <div className="font-conforter max-w-7xl mx-auto flex flex-col relative">
      <Navbar />
      <div class="md:mt-[110px]">{children}</div>

      <Footer />
    </div>
  );
};
export default Template;
