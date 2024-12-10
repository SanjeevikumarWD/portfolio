import React from "react";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <>
      <div className="2xl:hidden">
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </div>
      <div className="hidden 2xl:flex justify-center items-center h-screen text-text text-[100px] font-rosarivo italic">Prefer using smaller screen 🤞😉</div>
    </>
  );
};

export default App;
