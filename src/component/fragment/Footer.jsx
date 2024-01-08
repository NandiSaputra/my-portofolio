import Links from "../utility/Link";

const Footer = () => {
  return (
    <div>
      <footer className=" md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
        <nav className="flex justify-around py-4 text-xs">
          <Links to="/" classname="text-gray-300 hover:text-white">
            Home
          </Links>
          <Links to="/about" classname="text-gray-300 hover:text-white">
            About
          </Links>
          <Links to="/portofolio" classname="text-gray-300 hover:text-white">
            Portfolio
          </Links>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
