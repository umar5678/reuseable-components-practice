import React from "react";
import { P, H1  } from "../components/ui/Typography";

const Home = () => {
  return (
    <div className="h-screen ">
      {" "}
      <H1 className=" text-4xl p-6 ">coursees</H1>
      <H1 className="text-2xl font-bold ">
        Artificial Intelligence and Machine Learning
      </H1>
      <P className="font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea,
        cupiditate reiciendis ex obcaecati iure aspernatur ipsa voluptates quae
        nihil.
      </P>
      <P className="">Consistent iconography across the app.</P>
      <div className="h-32 w-32 bg-blue hover:bg-yellow "></div>
      <div className="h-32 w-32 bg-yellow hover:bg-green"></div>
      <div className="h-32 w-32 bg-brand-green hover:bg-blue"></div>
    </div>
  );
};

export default Home;
