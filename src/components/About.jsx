import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Button } from "@material-tailwind/react";

const About = () => {
  const about = useRef();

  useEffect(() => {
    animateBox(about);
  }, []);

  return (
    <>
      <section ref={about} id="about" className="w-full">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          ABOUT ME
        </h1>

        <div className="h-auto w-full md:h-[500px] flex flex-col md:flex-row justify-between items-center md:w-4/5 mx-auto p-5 mt-10">
          {/* left section */}
          <div className="w-full lg:w-1/2 h-[50vh] md:h-full relative flex justify-center items-center">
            <img
              src="images/propic.jpeg"
              alt="my-img"
              className="h-[270px] lg:h-full rounded-xl ring-2 lg:ring-4 ring-blue-500 hover:scale-105 transition-transform"
            />
          </div>

          {/* right section */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full lg:ml-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl mt-5 lg:mt-0">
              My Bio
            </h1>
            <p className="mt-2 lg:mt-5">
              As a dedicated Front-End Developer with over two years of hands-on experience, I bring proficiency in crafting dynamic, user-centric solutions. From frontend aesthetics to interactive functionality, I thrive on translating concepts into robust digital experiences. With a keen eye for detail and a passion for innovation, I am committed to delivering high-quality, responsive, and visually appealing solutions that exceed expectations. Let's collaborate to bring your vision to life and drive success in the digital realm.
            </p>

            <table className="w-full mt-5 lg:mt-10">
              <tbody>
                <tr>
                  <td className="p-1 lg:p-3">
                    <span>Name</span> <br />
                    <span className="text-gray-500 hover:text-black transition-colors">Vikas Kashyap</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 lg:p-3">
                    <span>Email</span>
                    <br />
                    <span className="text-gray-500 hover:text-black transition-colors">vikaskashyaprock@gmail.com</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 lg:p-3">
                    <span>Phone</span>
                    <br />
                    <span className="text-gray-500 hover:text-black transition-colors">+91 8542050782</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <Button className="px-6 lg:px-8 py-3 lg:py-4 mt-5 rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105">
              <a
                href="/images/Vikas Kashyap Frontend 2Yrs.pdf"
                download="/images/Vikas Kashyap Frontend 2Yrs.pdf"
              >
                DOWNLOAD RESUME
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
