import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Buttons from "./pages/Buttons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import MCQs from "./pages/MCQs";
import CreateTest from "./pages/CreateTest";
import GoogleButton from "./components/GoogleButton";
import MultiStepForm from "./components/MultiStepForm";

const App = () => {
  return (
    <div className="bg-bg-light-pri dark:bg-bg-dark-pri p-2 ">
      <ThemeToggleButton />
      {/* <GoogleButton /> */}
      <MultiStepForm/>
      <CreateTest />
      <MCQs />
      <Home />
      <Login />
      <Buttons />
    </div>
  );
};

export default App;
