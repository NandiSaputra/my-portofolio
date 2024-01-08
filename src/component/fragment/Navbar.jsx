import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Links from "../utility/Link";

const Navbar = () => {
  return (
    <nav
      data-aos="fade-down"
      data-aos-delay="500"
      className="max-w-7xl md:fixed  px-5  top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between my-7">
        <span className="self-center md:text-2xl text-xl text-amber-200 font-bold">
          NandiSaputra();
        </span>
        <div className=" md:hidden flex fadedin-bot order-2 gap-2">
          <a
            href="https://www.linkedin.com/in/nandi-saputra/"
            className="hover:text-amber-500"
          >
            <FaLinkedin className="text-[20px]" />
          </a>
          <a
            href="https://github.com/NandiSaputra"
            className="hover:text-amber-500"
          >
            <VscGithub className=" text-[20px]" />
          </a>
          <a
            href="https://www.instagram.com/_nansa11"
            className="hover:text-amber-500"
          >
            <FaInstagramSquare className="text-[20px]" />
          </a>
        </div>
        <div
          className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="text-sm flex gap-5 font-bold  ">
            <Links
              to="/"
              classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
            >
              Home
            </Links>

            <Links
              to="/about"
              classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
            >
              About
            </Links>

            <Links
              to="/portofolio"
              classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
            >
              Portofolio
            </Links>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
