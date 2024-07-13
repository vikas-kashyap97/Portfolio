import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiTailwindcss, SiReactrouter } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { useEffect, useRef } from "react";
import { animateBox } from "./animation";

const Hero = () => {
  const hero = useRef();

  useEffect(() => {
    animateBox(hero);
  }, []);

  return (
    <>
      <section
        ref={hero}
        className="h-screen w-full flex flex-col-reverse lg:flex-row justify-evenly items-center p-5"
      >
        <div className=" mt-10 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hello,👋
            <br /> I am <span className="text-blue-600">Vikas</span>,
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Front-End Developer.
          </h1>

          <div className="flex items-center gap-5 mt-10">
            <h1 className="text-sm md:text-lg lg:text-xl border-r-2 border-white pr-2">
              Tech Stack
            </h1>
            <div className="flex items-center flex-wrap gap-5 m-2">
              <FaHtml5 className="h-6 w-6 md:h-6 md:w-8 lg:h-12 lg:w-12 text-red-600 hover:scale-110 transition-transform" />

              <FaCss3Alt className="h-6 w-6 md:h-6 md:w-8 lg:h-12 lg:w-12 text-blue-400 hover:scale-110 transition-transform" />

              <IoLogoJavascript className="h-6 w-6 md:h-6 md:w-8 lg:h-12 lg:w-12 text-yellow-600 hover:scale-110 transition-transform" />

              <FaReact className="h-6 w-6 md:h-6 md:w-8 lg:h-12 lg:w-12 text-blue-600 hover:scale-110 transition-transform" />

              <SiTailwindcss className="h-6 w-6 md:h-6 md:w-8 lg:h-12 lg:w-12 text-blue-700 hover:scale-110 transition-transform" />

              <GiArtificialIntelligence className="h-6 w-6 md:h-6 md:w-8 lg:h-12 lg:w-12 text-blue-600 hover:scale-110 transition-transform" />

              <FaGithub className="h-6 w-6 md:h-6 md:w-8 lg:h-12 lg:w-12 hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* main img */}
        <div className="relative">
          {/* <div className="h-7 w-7 bg-blue-500 rounded-full absolute top-2 left-10 shadow-[inset_0_0_15px_rgba(0,0,0,0.7)] contrast-200"></div>
          <div className="h-10 w-10 bg-blue-500 rounded-full absolute bottom-0 right-3 shadow-[inset_0_0_15px_rgba(0,0,0,0.7)] contrast-200"></div>
          <div className="h-4 w-4 bg-blue-500 rounded-full absolute top-0 left-20 shadow-[inset_0_0_5px_rgba(0,0,0,0.7)] contrast-200"></div>
          <div className="h-5 w-5 bg-blue-500 rounded-full absolute bottom-10 right-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.7)] contrast-200"></div>
          <div className="h-10 w-10 bg-blue-500 rounded-full absolute top-12 left-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.7)] contrast-200"></div>
          <div className="h-6 w-6 bg-blue-500 rounded-full absolute bottom-0 right-20 shadow-[inset_0_0_10px_rgba(0,0,0,0.7)] contrast-200"></div>

          <img
            className="h-60 w-60 sm:h-72 sm:w-72 md:h-96 md:w-96 mt-10 lg:mt-0 rounded-full hover:scale-105 transition-transform "
            src="images/profile-pic.png"
            alt="main-img"
          /> */}

          <img
            className="h-72 w-72 sm:h-80 sm:w-80 md:h-[500px] md:w-[500px] mt-10 lg:mt-0 rounded-full hover:scale-105 transition-transform drop-shadow-lg"
            src="images/3d-img.webp"
            alt="main-img"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
