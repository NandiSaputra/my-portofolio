import Typing from "react-typing-effect";
import Template from "../component/layouts/Template";
import Button from "../component/utility/Button";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function App() {
  const phoneNumber = "6281993520678"; // Ganti dengan nomor WhatsApp Anda
  const message = "Halo, saya tertarik dengan layanan Anda!"; // Ganti dengan pesan yang diinginkan

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Template>
        <div className="flex md:flex md:flex-row flex-col-reverse min-h-[65vh] mt-[10px] md:mt-0 items-center justify-center md:min-h-[75vh] md:gap-16">
          <div className="px-10  flex flex-col md:items-start items-center">
            <p className="mt-3 text-sm  ">hello world, I'am</p>
            <h1
              data-aos="fade-right"
              className="md:text-5xl text-lg  md:my-2 font-bold   "
            >
              Nandi Saputra
            </h1>
            <Typing
              data-aos="fade-right"
              data-aos-delay="500"
              className=" md:my-2 mt-1 md:text-3xl text-sm font-bold text-transparent  bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500"
              speed={100}
              eraseDelay={300}
              text={["Web Developer", "Junior Fullstack"]}
            />
            <p className="md:text-lg text-sm mt-1">
              Welcome to my personal website.<span className="wave">👋🏼</span>
            </p>
            <div className=" hidden md:flex fadedin-bot order-2 gap-2">
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
            <Button
              onClick={handleClick}
              classname=" mt-1  mb-5 font-semibold bg-amber-500 hover:bg-amber-600 md:w-[200px] md:h-[40px] w-[150px] h-[30px] rounded-[5px]"
            >
              Hire
            </Button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src="assets/profil.jpeg"
              className="hadow-2xl  rounded-full border-4 border-amber-200 pict w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cover bg-no-repeat bg-center"
              alt=""
            />
          </div>
        </div>
      </Template>
    </>
  );
}

export default App;
