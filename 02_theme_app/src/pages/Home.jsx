import React from "react";

import QuillRTE from "../components/QuillRTE";

const Home = () => {
  return (
    <div className="h-screen ">
      <h1 className=" text-4xl p-6 ">coursees</h1>
      <QuillRTE />
      <h1 className="text-2xl font-bold ">
        Artificial Intelligence and Machine Learning
      </h1>
      <p className="font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea,
        cupiditate reiciendis ex obcaecati iure aspernatur ipsa voluptates quae
        nihil.
      </p>
      <p>Consistent iconography across the app.</p>
      <h1 className="text-2xl font-bold ">Editor</h1>
    </div>
  );
};

export default Home;
