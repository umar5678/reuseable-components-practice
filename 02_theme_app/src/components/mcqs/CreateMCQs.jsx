import React, { useState } from "react";
import Button from "../ui/Button";
import { IoMdAdd } from "react-icons/io";
import DisplayMcqs from "./DisplayMcqs";
import MCQModal from "../modals/MCQModal";

const CreateMCQs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMcqIndex, setEditingMcqIndex] = useState(null);
  const [mcqs, setMcqs] = useState([]);

  const handleCreateMcq = () => {
    setEditingMcqIndex(null);
    setIsModalOpen(true);
  };

  const updateMcq = (index, updatedMcq) => {
    setMcqs((prev) =>
      prev.map((mcq, idx) => (idx === index ? { ...updatedMcq } : mcq))
    );
  };

  const handleSubmit = (mcqData) => {
    if (editingMcqIndex !== null) {
      updateMcq(editingMcqIndex, mcqData);
    } else {
      setMcqs((prev) => [{ ...mcqData }, ...prev]);
    }
    setIsModalOpen(false);
  };

  const initailMcq = editingMcqIndex !== null ? mcqs[editingMcqIndex] : null;

  const handleEditMcq = (index) => {
    setEditingMcqIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteMcq = (index) => {
    setMcqs((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <Button variant="default" onClick={handleCreateMcq}>
        <IoMdAdd /> Add
      </Button>

      <MCQModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initailMcq={initailMcq}
        isEditing={editingMcqIndex !== null}
      />

      <DisplayMcqs
        mcqs={mcqs}
        editMcq={handleEditMcq}
        deleteMcq={handleDeleteMcq}
      />
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
