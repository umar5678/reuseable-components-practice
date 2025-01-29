import React from "react";

import QuillRTE from "../components/QuillRTE";

const Home = () => {
  return (
    <div className="h-screen ">
      <h1 className="text-4xl font-bold my-6">Editor</h1>
      <QuillRTE />
    </div>
  );
};

export default Home;
