import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Button } from "@material-tailwind/react";

export let res = null;

const Projects = () => {
  const project = useRef();

  useEffect(() => {
    animateBox(project);
  });

  return (
    <>
      <section ref={project} id="project" className="mt-10 md:mt-20 w-full">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          PROJECTS
        </h1>
        <div className="w-full md:w-4/5 mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* project first  */}
          <div className=" md:w-1/2 rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
            <h1 className="text-sm md:text-lg lg:text-xl mb-2 ">
              Hospital Management System (Frontend)
            </h1>
            <img
              src="images/Frontend dashboard.jpg"
              alt="project-img"
              className="h-60 w-full rounded-lg"
            />
            <div className="flex gap-10 mt-5 justify-starts">
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://hospital-management-system-cwv.netlify.app/">
                  Live
                </a>
              </Button>
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://github.com/princeessjay/HMS_FRONTEND.git">
                  Github
                </a>
              </Button>
            </div>
          </div>

          {/* project second */}
          <div className=" md:w-1/2 rounded-lg p-5 shadow-lg  hover:scale-105 transition-transform">
            <h1 className="text-sm md:text-lg lg:text-xl mb-2 ">
              Hospital Management System (Admin)
            </h1>
            <img
              src="images/Admin dashboard.jpg"
              alt="project-img"
              className="h-60 w-full rounded-lg"
            />

            <div className="flex gap-10 mt-5 justify-start">
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://admin-dashboard-hms-cwv.netlify.app/login">
                  Live
                </a>
              </Button>
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://github.com/princeessjay/HMS_DASHBOARD.git">
                  Github
                </a>
              </Button>
            </div>
          </div>

          {/* project three */}
          <div className=" md:w-1/2 rounded-lg p-5 shadow-lg  hover:scale-105 transition-transform">
            <h1 className="text-sm md:text-lg lg:text-xl mb-2 ">
            ECHO VERSE Blog Application
            </h1>
            <img
              src="images/blog 1.JPG"
              alt="project-img"
              className="h-60 w-full rounded-lg"
            />

            <div className="flex gap-10 mt-5 justify-start">
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://blog-app-cwv.netlify.app/">
                  Live
                </a>
              </Button>
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://github.com/princeessjay/BLOG_FRONTEND.git">
                  Github
                </a>
              </Button>
            </div>
          </div>
          
          {/* project four */}
          <div className=" md:w-1/2 rounded-lg p-5 shadow-lg  hover:scale-105 transition-transform">
            <h1 className="text-sm md:text-lg lg:text-xl mb-2 ">
              Real-Time Dashboard
            </h1>
            <img
              src="images/Dashboard.jpg"
              alt="project-img"
              className="h-60 w-full rounded-lg"
            />

            <div className="flex gap-10 mt-5 justify-start">
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://dashboard-beryl-six.vercel.app/">Live</a>
              </Button>
              <Button className="px-6 lg:px-8 py-3 lg:py-4  rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
                <a href="https://github.com/princeessjay/Dashboard.git">
                  Github
                </a>
              </Button>
            </div>
          </div>
          
          
          
        </div>
      </section>
    </>
  );
};

export default Projects;
