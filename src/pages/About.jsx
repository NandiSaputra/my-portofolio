import { useState } from "react";
import Template from "../component/layouts/Template";
import Button from "../component/utility/Button";

const About = () => {
  const tect = [
    {
      id: 1,
      title: "HTML",
      image: "assets/html.png",
      status: "Advance",
    },
    {
      id: 2,
      title: "CSS",
      image: "assets/css-3.png",
      status: "Advance",
    },
    {
      id: 3,
      title: "JavaScript",
      image: "assets/js.png",
      status: "Advance",
    },
    {
      id: 4,
      title: "PHP",
      image: "assets/php.png",
      status: "Advance",
    },
    {
      id: 5,
      title: "Codeigniter",
      image: "assets/codeigniter.png",
      status: "Advance",
    },
    {
      id: 6,
      title: "Laravel",
      image: "assets/laravel.png",
      status: "Intermediate",
    },
    {
      id: 6,
      title: "Node JS",
      image: "assets/node-js.png",
      status: "Beginner",
    },
    {
      id: 7,
      title: "React JS",
      image: "assets/react.png",
      status: "Beginner",
    },
    {
      id: 8,
      title: "Bootstrap",
      image: "assets/bootstrap.png",
      status: "Intermediate",
    },
    {
      id: 8,
      title: "Tailwind CSS",
      image: "assets/tailwind-css.png",
      status: "Intermediate",
    },
  ];
  const tools = [
    { id: 1, title: "Git", image: "assets/git.png", status: "Intermediate" },
    {
      id: 2,
      title: "Github",
      image: "assets/github.png",
      status: "Intermediate",
    },
    {
      id: 3,
      title: "NPM",
      image: "assets/npm.png",
      status: "Intermediate",
    },
    {
      id: 4,
      title: "MySQL",
      image: "assets/mysql.png",
      status: "Intermediate",
    },
  ];
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [isButton, setIsButton] = useState("");

  const togleTech = () => {
    setShow1(true);
    setShow2(false);
    setIsButton("element 1");
  };
  const togleTools = () => {
    setShow2(true);
    setShow1(false);
    setIsButton("element 2");
  };
  return (
    <>
      <Template>
        <div className="bg-[#1e1e1f] px-5 md:px-12 md:py-10 py-5 border border-[#383838] rounded-3xl text-amber-50 mx-3  mb-5">
          <div className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            About Me &nbsp;
            <div
              className="h-[3px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
          </div>
          <div className="text-sm md:text-xl text-justify flex flex-col gap-4 md:flex-row md:gap-20 md:justify-left md:items-center">
            <div className="flex justify-center">
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-easing="ease-in-out"
                className="bg-[url(assets/profil.jpeg)] shadow-2xl  rounded-full border-4 w-[300px] h-[300px] bg-cover bg-no-repeat bg-center"
              ></div>
            </div>
            <div className="md:w-7/12">
              <p className="mb-3 md:mb-7 fadein-left fadeins-1">
                &nbsp; &nbsp; &nbsp; Hi everyone! My name is Nandi Saputra. I'm
                a web developer from Cirebon, West Java. I have 1 year of
                experience in back-end web development. I really enjoy what I do
                right now, in my opinion, creating programs is not just a job,
                but also an art that has aesthetic value
              </p>
              <p className="mb-3 fadein-left fadeins-2">
                &nbsp; &nbsp; &nbsp; My job is to build your website to be
                functional and user-friendly yet still attractive. In addition,
                I provide a personal touch to your product and ensure that the
                website catches attention and is easy to use. My goal is to
                convey your message and identity in the most creative way. If
                you are interested in hiring me, please contact the listed
                contact.
              </p>
            </div>
          </div>
        </div>
        <div className=" px-5 md:px-12 md:py-10 py-5  text-amber-50 mx-3  mb-5">
          <div className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            Skils &nbsp;
            <div
              className="h-[3px] w-32 bg-amber-200 md:w-32 aos-init aos-animate"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
          </div>
          <div>
            <div>
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
                <li className="mr-2">
                  <Button
                    onClick={togleTech}
                    disable={show1}
                    classname={`${
                      isButton === "element 1"
                        ? "text-amber-200 bg-amber-200 bg-opacity-10"
                        : ""
                    } text-lg inline-block px-4 py-3 rounded-lg hover:text-white`}
                  >
                    Tech Stack
                  </Button>
                </li>
                <li className="mr-2">
                  <Button
                    onClick={togleTools}
                    disable={show2}
                    classname={`${
                      isButton === "element 2"
                        ? "text-amber-200 bg-amber-200 bg-opacity-10"
                        : ""
                    } text-lg inline-block px-4 py-3 rounded-lg hover:text-white`}
                  >
                    Tools
                  </Button>
                </li>
              </ul>
            </div>
            {show1 && (
              <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                {tect.map((item) => (
                  <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                    <div className="flex h-14 w-14 items-center justify-center p-0 lg:h-14 lg:w-16 lg:p-2 zoom-in">
                      <img
                        alt="HTML"
                        loading="lazy"
                        width="32S"
                        height="32"
                        decoding="async"
                        data-nimg="1"
                        className={`img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                      style="color: transparent"`}
                        src={item.image}
                      />
                    </div>
                    <div className="flex items-center text-sm md:text-base lg:text-lg">
                      <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                        {item.title}
                      </div>
                      <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {show2 && (
              <div>
                <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                  {tools.map((item) => (
                    <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                      <div className="flex h-14 w-14 items-center justify-center p-0 lg:h-14 lg:w-16 lg:p-2 zoom-in">
                        <img
                          alt="HTML"
                          loading="lazy"
                          width="32"
                          height="32"
                          decoding="async"
                          data-nimg="1"
                          className={`img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                      style="color: transparent"`}
                          src={item.image}
                        />
                      </div>
                      <div className="flex items-center text-sm md:text-base lg:text-lg">
                        <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                          {item.title}
                        </div>
                        <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                          {item.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Template>
    </>
  );
};
export default About;
