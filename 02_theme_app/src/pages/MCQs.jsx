import React from "react";
import Button from "../components/ui/Button";
import { IoMdAdd } from "react-icons/io";



// get data, store it, 
// get a singleMcq component 
// render the data of questions and choises
// get the answer ,check the answer
// store the result

const MCQs = () => {
  return (
    <div className="min-h-screen py-4 ">
      <h1>MCQs</h1>
          <h1>Add questions</h1>
          
          

      <Button variant="ghost">
        <IoMdAdd /> Add
          </Button>
          

    </div>
  );
};

export default MCQs;
