const Jumbotron = () => {
  return (
    <div className="relative flex flex-row items-center justify-center min-h-screen gap-16">
      <div data-aos="fade-right" className="px-10">
        <p className="my-2 text-lg">hello world, my name is</p>
        <h1 className="text-5xl my-2 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500  ">
          Nandi Saputra
        </h1>
        <p className=" my-2 text-xl font-bold text-[#ffdb70]">Web Developer</p>
        <p className="my-2 text-lg">
          wellcome to my personal website.<span class="wave">👋🏼</span>
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="bg-[url(assets/profil.jpeg)] rounded-full bg-no-repeat bg-cover bg-center w-[400px] h-[400px]"
      ></div>
    </div>
  );
};
export default Jumbotron;
