import React from "react";
import { P, H1 } from "../components/ui/Typography";
import QuillRTE from "../components/QuillRTE";

const Home = () => {
  return (
    <div className="h-screen ">
      {" "}
      <H1 className=" text-4xl p-6 ">coursees</H1>
      <QuillRTE/>
      <H1 className="text-2xl font-bold ">
        Artificial Intelligence and Machine Learning
      </H1>
      <P className="font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea,
        cupiditate reiciendis ex obcaecati iure aspernatur ipsa voluptates quae
        nihil.
      </P>
      <P>Consistent iconography across the app.</P>


      <H1 className="text-2xl font-bold ">Editor</H1>

    </div>
  );
};

export default Home;
