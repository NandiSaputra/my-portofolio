import { VscGithub } from "react-icons/vsc";
import Links from "../utility/Link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);
  return (
    <div
      data-aos="fade-down"
      className=" max-w-7xl mx-auto flex flex-col relative"
    >
      <nav className="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
        <div className="container mx-auto flex flex-wrap items-center justify-between my-7">
          <span className="self-center text-3xl text-amber-200 font-bold">
            NandiSaputra();
          </span>
          <div className=" flex fadedin-bot order-2">
            <VscGithub className="text-[50px]" />
          </div>
          <div
            className="flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="text-xl flex gap-5 font-bold  ">
              <li>
                <Links classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  Home
                </Links>
              </li>
              <li>
                <Links classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  About
                </Links>
              </li>
              <li>
                <Links classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  Portofolio
                </Links>
              </li>
              <li>
                <Links classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  Contact
                </Links>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
