import React from "react";
import useDragger from "./UseDragger";

const Skill = ({ id, skill }) => {
  // Use the custom dragger hook for each skill
  useDragger(id, "skills-container");

  return (
    <div
      id={id}
      className="absolute bg-text text-bg p-4 rounded-md cursor-pointer font-semibold shadow-lg hover:shadow-xl"
      style={{
        top: `${Math.random() * 200}px`,
        left: `${Math.random() * 200}px`,
      }}
    >
      {skill}
    </div>
  );
};

const Skills = () => {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Web Design",
    "Responsive Design",
  ];

  return (
    <div
      id="skills-container"
      className="relative md:w-full h-72 flex justify-center items-center rounded-xl"
    >
      {skills.map((skill, index) => (
        <Skill key={index} id={`skill-${index}`} skill={skill} />
      ))}
      <p className="absolute bottom-1 right-2 font-robotoFlex opacity-70">Unveil My Skills🤞😉</p>
    </div>
  );
};

export default Skills;
