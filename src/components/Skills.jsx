import { skillsArr } from "./skillsData";
import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Progress } from "@material-tailwind/react";

const Skills = () => {
  const skill = useRef();

  useEffect(() => {
    animateBox(skill);
  }, []);

  return (
    <>
      <section ref={skill} id="skills" className="mt-10 md:mt-20 w-full">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pl-2">
          SKILLS
        </h1>
        <h2 className="text-sm md:text-lg lg:text-xl mt-5 text-center text-blue-500">
          I Work Hard to Improve My Skills Regularly
        </h2>
        <div className="w-full md:w-4/5 grid grid-cols-2 gap-12 mx-auto md:mt-5 lg:mt-10 p-5">
          {skillsArr.map((skill, index) => (
            <div
              key={skill.id}
              className={`mb-10 hover:scale-105 transition-transform ${
                index === skillsArr.length - 1 ? "col-span-2 text-center" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <h1>{skill.skillName}</h1>
                <h1>{skill.value}%</h1>
              </div>
              <Progress value={skill.value} color="blue" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;