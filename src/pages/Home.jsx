import Typing from "react-typing-effect";
import Template from "../component/layouts/Template";
import Button from "../component/utility/Button";

function App() {
  return (
    <>
      <Template>
        <div className=" pb-5relative mt-5 flex md:flex md:flex-row flex-col-reverse min-h-[65vh]  items-center justify-center md:min-h-screen md:gap-16">
          <div className="px-10 flex flex-col md:items-start items-center">
            <p className="mt-3 mb-1 ">hello world, I'am</p>
            <h1
              data-aos="fade-right"
              className="md:text-5xl text-4xl  md:my-2 font-bold   "
            >
              Nandi Saputra
            </h1>
            <Typing
              data-aos="fade-right"
              data-aos-delay="500"
              className=" md:my-2 mt-3 text-3xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500"
              speed={100}
              eraseDelay={300}
              text={["Web Developer", "Junior Fullstack"]}
            />
            <p className="text-lg mt-1">
              Welcome to my personal website.<span className="wave">👋🏼</span>
            </p>
            <Button classname="  mb-5 font-semibold bg-amber-500 hover:bg-amber-600 md:w-[200px] md:h-[40px] w-[150px] h-[30px] rounded-[5px]">
              Hire
            </Button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            className="bg-[url(assets/profil.jpeg)] shadow-2xl  rounded-full border-4 border-amber-200 pict w-[300px] h-[300px] bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
      </Template>
    </>
  );
}

export default App;
