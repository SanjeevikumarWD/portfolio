import React from "react";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeContext";


const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </div>
  );
};

export default App;
