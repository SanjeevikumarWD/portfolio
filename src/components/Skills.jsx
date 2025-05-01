import React from "react";
import { FaReact, FaNodeJs, FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiVueDotJs,
  SiQuasar,
  SiPython,
} from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const skills = [
  // Frontend Technologies
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Vue.js", icon: <SiVueDotJs /> },
  { name: "Quasar", icon: <SiQuasar /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },

  // Backend Technologies
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "Python", icon: <SiPython /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },

  // Tools
  { name: "Git", icon: <FaGit /> },

  // Others
  { name: "Web Design", icon: <MdOutlineWeb /> },
  { name: "Responsive Design", icon: <BsFillPhoneFill /> },
];

const Skills = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl md:text-3xl lg:text-5xl italic font-rosarivo cursor-default my-2">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 shadow-md rounded-lg text-lg bg-text text-bg cursor-default"
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
