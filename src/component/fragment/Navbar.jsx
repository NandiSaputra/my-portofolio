import { VscGithub } from "react-icons/vsc";
import Links from "../utility/Link";

const Navbar = () => {
  const linkActive = " border-b-2 text-amber-200";
  const deActive = "";
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="500"
      className=" max-w-7xl mx-auto flex flex-col relative"
    >
      <nav className="max-w-7xl  px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
        <div className="container mx-auto flex flex-wrap items-center justify-between my-7">
          <span className="self-center md:text-3xl text-xl text-amber-200 font-bold">
            NandiSaputra();
          </span>
          <div className=" flex fadedin-bot order-2">
            <VscGithub className="md:text-[50px] text-[30px]" />
          </div>
          <div
            className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="text-xl flex gap-5 font-bold  ">
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

              <Links
                to="/contact"
                classname="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                Contact
              </Links>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
