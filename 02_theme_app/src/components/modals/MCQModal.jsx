import { useEffect, useState } from "react";
import Modal from "./Modal";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { AiOutlineDelete } from "react-icons/ai";

const MCQModal = ({ isOpen, onClose, onSubmit, initailMcq, isEditing }) => {
  const [mcq, setMcq] = useState({
    question: "",
    choices: ["", ""],
    correctAnswer: null,
  });

  useEffect(() => {
    if (initailMcq) {
      setMcq(initailMcq);
    } else {
      setMcq({ question: "", choices: ["", ""], correctAnswer: null });
    }
  }, [initailMcq]);

  const handleQuestionChange = (value) => {
    setMcq((prev) => ({ ...prev, question: value }));
  };

  const handleChoiceChange = (index, value) => {
    const updatedchoices = [...mcq.choices];
    updatedchoices[index] = value;
    setMcq((prev) => ({
      ...prev,
      choices: updatedchoices,
    }));
  };

  const handleCorrectChoice = (choiceIndex) => {
    setMcq((prev) => ({ ...prev, correctAnswer: choiceIndex }));
  };

  const handleDeleteChoice = (choiceIndex) => {
    const updatedChoices = [...mcq.choices].filter(
      (_, index) => index !== choiceIndex
    );
    setMcq((prev) => ({ ...prev, choices: updatedChoices }));
  };

  const handleAddChoise = () => {
    setMcq((prev) => ({ ...prev, choices: [...prev.choices, ""] }));
  };

  const handleSaveQuestion = (e) => {
    e.preventDefault();
    onSubmit(mcq);
    setMcq({ question: "", choices: ["", ""], correctAnswer: null });
  };

  const cancleAddQuestion = () => {
    setMcq({
      question: "",
      choices: ["", ""],
      correctAnswer: null,
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
          title={isEditing ? "Edit Question" : "Create an MCQ"}
          width="max-w-2xl"
    >
      <div>
        <form action="" onSubmit={handleSaveQuestion}>
          <div className="">
            <Input
              required
              label="Question"
              placeholder="Enter a question"
              value={mcq.question}
              onChange={(e) => handleQuestionChange(e.target.value)}
            ></Input>

            {mcq.choices.map((choise, index) => (
              <div key={index} className="flex item-center mt-1">
                <input
                  type="radio"
                  checked={mcq.correctAnswer === index}
                  onChange={() => handleCorrectChoice(index)}
                  className="h-6 w-6 relative top-6 mr-3"
                />
                <div className="flex-grow">
                  <Input
                    required
                    type="text"
                    value={choise}
                    onChange={(e) => handleChoiceChange(index, e.target.value)}
                  ></Input>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative top-5 ml-1"
                  onClick={() => handleDeleteChoice(index)}
                >
                  {<AiOutlineDelete />}
                </Button>
              </div>
            ))}
            <div className="flex-">
              <Button
                variant="ghost"
                className="my-4"
                onClick={handleAddChoise}
              >
                Add Choise
              </Button>
            </div>
            <div className="flex justify-between">
              <Button variant="primary" type="submit">
                Save Question
              </Button>
              <Button variant="default-outline" onClick={cancleAddQuestion}>
                Cancle
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MCQModal;
