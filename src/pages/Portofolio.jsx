import Template from "../component/layouts/Template";

const Portofolio = () => {
  const porto = [
    {
      id: 1,
      name: "Personal Website",
      imageUrl: "assets/personal_website.png",
      status:
        "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
      tech: "React JS, Tailwind CSS",
      github: "https://github.com/NandiSaputra/my-portofolio.git",
      demo: "https://nandiportofolio.netlify.app/",
    },
    {
      id: 2,
      name: "Design In",
      imageUrl: "assets/design_in.png",
      status:
        "This website serves as a hub for quality inspiration and consultation in interior design and construction.",
      tech: "HTML, CSS, JavaScript, boostrap 5",
      github: "https://github.com/NandiSaputra/final_projek1.git",
      demo: " https://luminous-begonia-5eeb45.netlify.app",
    },
    {
      id: 3,
      name: "Kits Sell",
      imageUrl: "assets/kit_sell.png",
      status:
        "This website is a website for selling various custom football jerseys.",
      tech: "HTML, CSS, JavaScript, boostrap 5",
      github: "https://github.com/NandiSaputra/final_project2.git",
      demo: "https://deft-khapse-a3dbb7.netlify.app/",
    },
    {
      id: 4,
      name: "WebStore",
      imageUrl: "assets/webstrore.png",
      status:
        "This website is a personal website creation service and also an affordable hosting provider.",
      tech: "HTML, CSS, JavaScript, boostrap 5",
      github: "https://github.com/NandiSaputra/final_project3-nandi.git",
      demo: "https://voluble-hummingbird-8c9d0a.netlify.app/",
    },
    {
      id: 5,
      name: "wheaterIN",
      imageUrl: "assets/wheaterIN.png",
      status:
        "A website for current location-based weather forecasts helps to determine the current weather conditions.",
      tech: "HTML, CSS, JavaScript, boostrap 5",
      github: "https://github.com/NandiSaputra/final-project4-nandi.git",
      demo: " https://jovial-medovik-813898.netlify.app",
    },
    {
      id: 6,
      name: "VSD",
      imageUrl: "assets/vsd.jpg",
      status:
        "This website is the final project thesis on visualizing accreditation data at Catur Insan Cendekia University.",
      tech: "Codeigniter 3, Bosstrap 5, MySQL",
      github: "https://github.com/NandiSaputra/aplikasi_visualisasi_data.git",
      demo: "null",
    },
    {
      id: 6,
      name: "Sistem Pakar diagnosa Gizi buruk",
      imageUrl: "assets/spk.png",
      status:
        "This website is a campus project tasked with diagnosing malnutrition cases in the Mayung village health center.",
      tech: "Codeigniter 3, Bosstrap 5, MySQL",
      github: "null",
      demo: "null",
    },
  ];
  return (
    <>
      <Template>
        <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
          <article data-page="about">
            <header>
              <div className="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col ">
                <div className="h-[3px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"></div>
                <h4>Past Project Experience</h4>
                <h4 className="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
                  Explore the projects I've worked on so far
                </h4>
              </div>
            </header>
            <section>
              <div>
                <div className="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
                  {porto.map((item) => (
                    <div className=" h-full item-card flex flex-col items-center justify-between   rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] lg:rounded-xl text-amber-50 px-5 py-5 lg:px-5 ">
                      <div className="flex  items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                        <img
                          alt="HTML"
                          loading="lazy"
                          decoding="async"
                          data-nimg="1"
                          className="drop-shadow-xl rounded lg:rounded-xl "
                          src={item.imageUrl}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                        <div className="title-text font-medium text-secondary">
                          {item.name}
                        </div>
                        <div className="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                          {item.status}
                        </div>
                        <div className="w-full mt-4 text-normal text-sm text-left text-amber-200">
                          {item.tech}
                        </div>
                        <div class="w-full flex justify-end">
                          <div class="flex cursor-pointer items-end gap-2 text-primary">
                            <a
                              className={
                                item.github !== "null"
                                  ? "flex transition-all hover:text-accent"
                                  : "hidden "
                              }
                              href={item.github}
                              target="_blank"
                              rel="noreferrer"
                              title="View github repository"
                            >
                              {item.github !== "null" && (
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  height="16"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                              )}
                            </a>
                            <a
                              className={
                                item.demo !== "null"
                                  ? "flex transition-all hover:text-accent"
                                  : "hidden "
                              }
                              href={item.demo}
                              target="_blank"
                              rel="noreferrer"
                              title="View github repository"
                            >
                              {item.demo !== "null" && (
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15 3 21 3 21 9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </article>
        </div>
      </Template>
    </>
  );
};
export default Portofolio;
