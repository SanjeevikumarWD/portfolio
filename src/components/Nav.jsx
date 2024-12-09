import React, { useState } from "react";
import {
  House,
  Send,
  Sparkles,
  UserRound,
  Menu,
  X,
  MoonStar,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext"; // Import the hook

const Nav = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme context
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-2 right-0 flex justify-center items-end h-auto w-screen text-text z-50" >
      {/* Desktop Menu */}
      {/* <div className="fixed mb-10 space-x-6 p-3 hidden lg:block backdrop-blur-lg rounded-full border-2">
        <p className="inline-block border-2 border-border p-2 rounded-xl shadow-md text-text">
          <House />
        </p>
        <p className="inline-block border-2 border-border p-2 rounded-xl shadow-md text-text">
          <Sparkles />
        </p>
        <p className="inline-block border-2 border-border p-2 rounded-xl shadow-md text-text">
          <UserRound />
        </p>
        <p className="inline-block border-2 border-border p-2 rounded-xl shadow-md text-text">
          <Send />
        </p>
      </div> */}

      {/* Theme Toggle Button */}
      <button className="top-10 left-8 fixed bg-bg p-4 rounded-full opacity-90 " onClick={toggleTheme} >
        {theme === "light" ? <Sun /> : <MoonStar className="text-white" />}
      </button>

      {/* Mobile Menu */}
      {/* <div className="block lg:hidden">
        {/* Menu Icon */}
        {/* <div className="absolute top-8 right-8 ">
          {isMenuOpen ? (
            <X
              size={28}
              className="text-text cursor-pointer  "
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              className="text-text cursor-pointer  "
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div> */}

        {/* Menu Content */}
        {/* {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className="absolute top-16 right-0 bg-bg text-text shadow-md rounded-l-md p-6 flex flex-col items-end space-y-4 w-full h-screen overflow-y-hidden"
          >
            <p className="flex items-center space-x-2 pr-1 cursor-pointer">
              <span className="text-2xl font-thin font-rosarivo mr-4">Home</span>
              <House size={36} />
            </p>
            <p className="flex items-center space-x-2 pr-1 cursor-pointer">
              <span className="text-2xl font-thin font-rosarivo mr-4">Projects</span>
              <Sparkles size={36} />
            </p>
            <p className="flex items-center space-x-2 pr-1 cursor-pointer">
              <span className="text-2xl font-thin font-rosarivo mr-4">About</span>
              <UserRound size={36} />
            </p>
            <p className="flex items-center space-x-2 pr-1 cursor-pointer">
              <span className="text-2xl font-thin font-rosarivo mr-4">Contact</span>
              <Send size={36} />
            </p>
          </motion.div>
        )} */}
      {/* </div> */} 
    </div>
  );
};

export default Nav;
