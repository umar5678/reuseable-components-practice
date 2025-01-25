import React, { useState } from "react";
import Button from "../ui/Button";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import Input from "../ui/Input";
// Build two simple functional components, Card and CardContent. These help create a consistent layout and styling for various sections like forms and saved questions.
const Card = ({ children, className }) => {
  return <div className={`    ${className}`}>{children}</div>;
};
//
const CardContent = ({ children, className }) => {
  return <div className={`  ${className}`}>{children}</div>;
};

const CreateMCQs = () => {
  const [mcqs, setMcqs] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    choises: ["", ""],
    correctAnswer: null,
  });

  console.log(mcqs);

  // choise change/update method
  const handleChoiseChange = (index, value) => {
    const updatedChoises = [...newQuestion.choises];
    updatedChoises[index] = value;
    setNewQuestion((prev) => ({
      ...prev,
      choises: updatedChoises,
    }));
  };

  // handle add choise

  const handleAddChoise = () => {
    setNewQuestion((prev) => ({
      ...prev,
      choises: [...prev.choises, ""],
    }));
  };
  // handl edelete choise

  const handleDeleteChoise = (choiseIndex) => {
    const updatedChoises = [...newQuestion.choises].filter(
      (_, index) => index != choiseIndex
    );

    setNewQuestion((prev) => ({
      ...prev,
      choises: updatedChoises,
    }));
  };
// handle saving question
    const handleSaveQuestion = (e) => {
      e.preventDefault()
    setMcqs((prev) => [newQuestion, ...prev]);
    setNewQuestion({
      question: "",
      choises: ["", ""],
      correctAnswer: null,
    });
    setIsFormVisible(false);
    };
    
// cancle add question

    const cancleAddQuestion = () => {
        setNewQuestion({
          question: "",
          choises: ["", ""],
          correctAnswer: null,
        });
        setIsFormVisible(false)
    }

   return (
    <div>
      <Button variant="default" onClick={() => setIsFormVisible(true)}>
        <IoMdAdd /> Add
      </Button>

          {isFormVisible && (
              <form action="" onSubmit={handleSaveQuestion}>
        <div className="">
                  <Input
                      required
            label="Question"
            placeholder="Enter a question"
            value={newQuestion.question}
            onChange={(e) =>
              setNewQuestion((prev) => ({
                ...prev,
                question: e.target.value,
              }))
            }
          ></Input>

          {newQuestion.choises.map((choise, index) => (
            <div key={index} className="flex item-center mt-1">
              <input
                type="radio"
                checked={newQuestion.correctAnswer === index}
                onChange={() =>
                  setNewQuestion((prev) => ({
                    ...prev,
                    correctAnswer: index,
                  }))
                }
                className="h-6 w-6 relative top-6 mr-3"
              />
              <div className="flex-grow">
                      <Input
                          required
                  type="text"
                  value={choise}
                  onChange={(e) => handleChoiseChange(index, e.target.value)}
                ></Input>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="relative top-5 ml-1"
                onClick={() => handleDeleteChoise(index)}
              >
                {<AiOutlineDelete />}
              </Button>
            </div>
          ))}
          <div className="flex-">
            <Button variant="ghost" className="my-4" onClick={handleAddChoise}>
              Add Choise
            </Button>
                      </div>
                      <div className="flex justify-between"> 
                          
          <Button variant="primary" type="submit" >
            Save Question
                          </Button>
                          <Button variant='default-outline' onClick={cancleAddQuestion}>Cancle</Button>
                      </div>
              </div>
              </form>
      )}
    </div>
  );
};

export default CreateMCQs;

//
//
//
//
//
//

//
//
//
//
//
//

//
//
//
//
//
//

//
//
//
//
//
//

//
//
//
//
//
//

//
//
//
//
//
//

//
//
//
//
//
//

// import React, { useState } from "react";

// // Card Component
// const Card = ({ children, className }) => {
//   return (
//     <div className={`border rounded-lg shadow-sm ${className}`}>{children}</div>
//   );
// };

// // CardContent Component
// const CardContent = ({ children, className }) => {
//   return <div className={`p-4 ${className}`}>{children}</div>;
// };

// // MCQCreator Component
// const CreateMCQs = () => {
//   const [mcqs, setMcqs] = useState([]); // To store all MCQs
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     question: "",
//     choices: ["", ""],
//     correctAnswer: null,
//   });

//   // Handle adding a new choice
//   const handleAddChoice = () => {
//     setNewQuestion((prev) => ({ ...prev, choices: [...prev.choices, ""] }));
//   };

//   // Handle updating a choice
//   const handleChoiceChange = (index, value) => {
//     const updatedChoices = [...newQuestion.choices];
//     updatedChoices[index] = value;
//     setNewQuestion((prev) => ({ ...prev, choices: updatedChoices }));
//   };

//   // Handle form submission
//   const handleAddQuestion = () => {
//     setMcqs((prev) => [...prev, newQuestion]);
//     setNewQuestion({ question: "", choices: ["", ""], correctAnswer: null });
//     setIsFormVisible(false);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">MCQ Creator</h1>

//       {/* Button to show form */}
//       {!isFormVisible && (
//         <button
//           onClick={() => setIsFormVisible(true)}
//           className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Add Question
//         </button>
//       )}

//       {/* MCQ Form */}
//       {isFormVisible && (
//         <Card className="mb-4">
//           <CardContent>
//             <div className="mb-4">
//               <label className="block font-medium">Question:</label>
//               <input
//                 type="text"
//                 value={newQuestion.question}
//                 onChange={(e) =>
//                   setNewQuestion((prev) => ({
//                     ...prev,
//                     question: e.target.value,
//                   }))
//                 }
//                 className="w-full p-2 border rounded mt-2"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block font-medium">Choices:</label>
//               {newQuestion.choices.map((choice, index) => (
//                 <div key={index} className="flex items-center mt-2">
//                   <input
//                     type="text"
//                     value={choice}
//                     onChange={(e) => handleChoiceChange(index, e.target.value)}
//                     className="w-full p-2 border rounded mr-2"
//                   />
//                   <input
//                     type="radio"
//                     name="correctAnswer"
//                     checked={newQuestion.correctAnswer === index}
//                     onChange={() =>
//                       setNewQuestion((prev) => ({
//                         ...prev,
//                         correctAnswer: index,
//                       }))
//                     }
//                   />
//                 </div>
//               ))}
//               <button
//                 onClick={handleAddChoice}
//                 className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
//               >
//                 Add Choice
//               </button>
//             </div>

//             <button
//               onClick={handleAddQuestion}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Save Question
//             </button>
//           </CardContent>
//         </Card>
//       )}

//       {/* Display MCQs */}
//       <div>
//         <h2 className="text-lg font-semibold mb-2">Saved Questions:</h2>
//         {mcqs.map((mcq, index) => (
//           <Card key={index} className="mb-4">
//             <CardContent>
//               <p className="font-medium">
//                 {index + 1}. {mcq.question}
//               </p>
//               <ul className="mt-2">
//                 {mcq.choices.map((choice, i) => (
//                   <li
//                     key={i}
//                     className={`mt-1 ${
//                       mcq.correctAnswer === i ? "font-bold text-green-600" : ""
//                     }`}
//                   >
//                     {choice}
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreateMCQs;
