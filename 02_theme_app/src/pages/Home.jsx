import React from "react";
import { P, H1  } from "../components/ui/Typography";

const Home = () => {
  return (
    <div className="h-screen ">
      {" "}
      <H1 className="text-4xl font-bold">heading of the app</H1>
      <P className={"text-xl"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea,
        cupiditate reiciendis ex obcaecati iure aspernatur ipsa voluptates quae
        nihil.
      </P>
      <div className="h-32 w-32 bg-blue hover:bg-yellow "></div>
      <div className="h-32 w-32 bg-yellow hover:bg-green"></div>
      <div className="h-32 w-32 bg-brand-green hover:bg-blue"></div>
    </div>
  );
};

export default Home;
