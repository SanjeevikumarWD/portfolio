import React from "react";
import { FaReact, FaNodeJs, FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Web Design", icon: <MdOutlineWeb /> },
  { name: "Responsive Design", icon: <BsFillPhoneFill /> },
];

const Skills = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl md:text-3xl lg:text-5xl italic  font-rosarivo cursor-default my-2">Tech Stack</h2>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 p-3 shadow-md rounded-lg text-lg bg-text text-bg`}
          >
            <div className="text-2xl">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
