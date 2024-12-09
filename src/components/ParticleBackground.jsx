import React, { useEffect } from "react";
import { useTheme } from "../components/ThemeContext"; // Import the useTheme hook

const ParticleBackground = () => {
  const { theme } = useTheme(); // Access the current theme from context

  useEffect(() => {
    if (typeof window.particlesJS !== "undefined") {
      // Define particle colors based on theme
      const particleColor = theme === "light" ? "#000000" : "#ffffff"; // Black particles for light theme, white for dark theme
      const lineColor = theme === "light" ? "#000000" : "#ffffff"; // Black lines for light theme, white for dark theme

      // Reconfigure particlesJS when the theme changes
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: particleColor }, // Set particle color based on theme
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: lineColor, // Set line color based on theme
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" }, // Handle hover interactions
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: { opacity: 1 },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 6,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, [theme]); // Re-run effect when theme changes

  return (
    <div
      id="particles-js"
      className="absolute inset-0 bg-bg z-[-1]"
    ></div>
  );
};

export default ParticleBackground;
