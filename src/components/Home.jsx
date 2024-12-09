import React, { useState } from "react";
import FadeInOnScroll from "./FadeInOnScroll";
import { CircleArrowOutUpRight } from "lucide-react";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { FaD, FaSquareGithub } from "react-icons/fa6";
import { HiMiniArrowDownRight } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Skills from "./Skills";
import ParticleBackground from "./ParticleBackground";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClicked = (productKey) => {
    navigate(`product/${productKey}`);
  };

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center">
        {/* Particles Background */}
        <ParticleBackground />

        {/* Centered Content */}
        <div className="relative flex flex-col justify-center items-center h-full px-6 text-center max-w-[600px] z-10">
          <FadeInOnScroll threshold={0.1}>
            <h1 className="text-text font-rosarivo text-4xl md:text-6xl lg:text-6xl cursor-default">
              I'm <span className="italic">Sanjeevikumar</span>,<br /> a{" "}
              <span className="italic">Web Developer</span> based in{" "}
              <span className="italic">India</span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll threshold={0.2}>
            <p className="text-text mt-4 text-sm md:text-lg lg:text-xl font-thin font-robotoFlex cursor-default">
              "I’m passionate about crafting user-focused designs and thrive on
              the excitement of bringing creative ideas to life."
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll threshold={0.2}>
            <a
              href="/sanjeevikumar_webdev.pdf"
              download="Sanjeevikumar_webdev"
              className="flex gap-3 items-center text-sm mt-5 opacity-85 border-2 border-border py-2 px-3 rounded-xl cursor-pointer text-text"
            >
              Resume
              <FiDownload className="text-lg" />
            </a>
          </FadeInOnScroll>
        </div>
      </div>
      <div className=" px-7 bg-bg text-text pb-10">
        <FadeInOnScroll threshold={0.4}>
          <h1 className="text-2xl md:text-3xl lg:text-5xl italic  font-rosarivo cursor-default">
            About Me
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll threshold={0.4}>
          <div className="mt-20 lg:flex justify-center items-center lg:text-xl cursor-default">
            <img
              src="/assets/bg_home_hero.png"
              alt="Developer Profile"
              className="w-64 lg:w-72 h-auto rounded-full border-4 border-border mx-auto"
            />
            <p className="text-text mx-auto mt-7 text-center italic max-w-md lg:text-2xl cursor-default">
              With a fresh mind, I weave the web, where ideas and creativity
              flow, A perfectionist’s touch shapes each detail, ensuring
              brilliance in every glow. Crafting sites that captivate, I let my
              imagination endlessly grow.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="flex items-center justify-center gap-32 my-10 lg:mt-20">
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/sanjeevikumar12"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <IoLogoLinkedin className="text-5xl" />
              </a>
              <a
                href="https://github.com/SanjeevikumarWD"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <FaSquareGithub className="text-5xl" />
              </a>
              <a
                href="mailto:sanjeevikumar585@gmail.com?subject=Hello&body=Hi%20Sanjeevi!"
                className="cursor-pointer"
              >
                <IoMdMail className="text-5xl" />
              </a>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Skills />
        </FadeInOnScroll>
      </div>
      <div className="min-h-screen bg-bg text-text pb-10 my-20 ">
        <FadeInOnScroll threshold={0.4}>
          <h1 className="text-2xl md:text-3xl lg:text-5xl italic px-7 font-rosarivo cursor-default my-10">
            My Works
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="space-y-10">
            <FadeInOnScroll>
              <div className="px-7 relative max-w-[800px]">
                <img
                  src="/assets/p1/home.png"
                  alt=""
                  className="rounded-lg shadow-md"
                />
                <div className="flex justify-between my-1">
                  <p className="opacity-50 font-mono text-sm lg:text-lg">/01</p>
                  <p
                    className="flex opacity-75 font-mono text-sm lg:text-lg justify-center items-center gap-2 cursor-pointer"
                    onClick={() => handleCardClicked("1")}
                  >
                    Know more <CircleArrowOutUpRight size={14} />
                  </p>
                  <p className="font-mono text-sm lg:text-lg">
                    SNEV Clothing Brand
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="flex justify-end">
                <div className="px-7 relative max-w-[800px]">
                  <img
                    src="/assets/p2/home.png"
                    alt=""
                    className="rounded-lg shadow-md"
                  />
                  <div className="flex justify-between my-1">
                    <p className="opacity-50 font-mono text-sm lg:text-lg">
                      /02
                    </p>
                    <p
                      className="flex opacity-75 font-mono text-sm lg:text-lg justify-center items-center gap-2 cursor-pointer"
                      onClick={() => handleCardClicked("2")}
                    >
                      Know more <CircleArrowOutUpRight size={14} />
                    </p>
                    <p className="font-mono text-sm lg:text-lg">
                      SAKU Chat APP
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div>
                <div className="px-7 relative max-w-[800px]">
                  <img
                    src="/assets/p3/home.png"
                    alt=""
                    className="rounded-lg shadow-md"
                  />
                  <div className="flex justify-between my-1">
                    <p className="opacity-50 font-mono text-sm lg:text-lg">
                      /03
                    </p>
                    <p
                      className="flex opacity-75 font-mono text-sm lg:text-lg justify-center items-center gap-2 cursor-pointer"
                      onClick={() => handleCardClicked("3")}
                    >
                      Know more <CircleArrowOutUpRight size={14} />
                    </p>
                    <p className="font-mono text-sm lg:text-lg ">SAKU Blogs</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="flex justify-end">
                <div className="px-7 relative max-w-[800px]">
                  <img
                    src="/assets/p4/home.jpg"
                    alt=""
                    className="rounded-lg shadow-md "
                  />
                  <div className="flex justify-between my-1">
                    <p className="opacity-50 font-mono text-sm lg:text-lg">
                      /04
                    </p>
                    <p
                      className="flex opacity-75 font-mono text-sm lg:text-lg justify-center items-center gap-2 cursor-pointer"
                      onClick={() => handleCardClicked("4")}
                    >
                      Know more <CircleArrowOutUpRight size={14} />
                    </p>
                    <p className="font-mono text-sm lg:text-lg">
                      FIGMA Designs
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </FadeInOnScroll>
      </div>
      <FadeInOnScroll threshold={0.1}>
        <footer className="bg-bg text-text py-5">
          <p className="text-center">
            © 2024 Sanjeevikumar. Built with ❤️ using React and Tailwind CSS.
          </p>
        </footer>
      </FadeInOnScroll>
    </>
  );
};

export default Home;