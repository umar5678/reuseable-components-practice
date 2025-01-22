import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Buttons from "./pages/Buttons";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App = () => {
  return (
    <div className="bg-bg-light-pri dark:bg-bg-dark-pri text-text-light dark:text-text-dark">
      <ThemeToggleButton />
      <Home />
      <Login />
      <Buttons />
    </div>
  );
};

export default App;
