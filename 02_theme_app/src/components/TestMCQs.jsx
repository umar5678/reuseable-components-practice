import React, { useState } from "react";
import Button from "./ui/Button";
import { SiTicktick } from "react-icons/si";
import { TbXboxX } from "react-icons/tb";

const TestMCQs = () => {
  const mcqs = [
    {
      question: "What is JSX?",
      choices: [
        "A JavaScript library",
        "A syntax extension to JavaScript",
        "A type of CSS preprocessor",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does the 'useState' hook do?",
      choices: [
        "Handles asynchronous operations",
        "Manages component state",
        "Performs HTTP requests",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of 'useEffect' hook?",
      choices: [
        "Rendering components",
        "Managing state",
        "Performing side effects like data fetching",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "How do you pass data from a parent component to a child component?",
      choices: ["Using props", "Using state", "Using context"],
      correctAnswer: 0,
    },
    {
      question: "What is the role of 'key' prop in React lists?",
      choices: [
        "Styling list items",
        "Improving performance by helping React identify items",
        "Storing data related to list items",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "What is the difference between 'setState' and direct state manipulation?",
      choices: [
        "There is no difference",
        "'setState' triggers re-rendering, direct manipulation doesn't",
        "'setState' is asynchronous, direct manipulation is synchronous",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a controlled component?",
      choices: [
        "A component whose state is managed by the parent component",
        "A component whose state is managed internally",
        "A component that uses external libraries",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of 'Fragment' in React?",
      choices: [
        "To render multiple elements without adding extra nodes to the DOM",
        "To style components",
        "To handle events",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is React Context API used for?",
      choices: [
        "Styling components",
        "Passing data down the component tree without props drilling",
        "Managing component lifecycle",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does 'props.children' represent?",
      choices: [
        "The parent component's state",
        "The children elements of a component",
        "The component's props",
      ],
      correctAnswer: 1,
    },
  ];
  // create a side array of questions objects that includes correct answer and studentAnswer along with other data

  const [answeredMcqs, setAnsweredMcqs] = useState(
    mcqs.map((mcq) => ({ ...mcq, studentAnswer: null }))
  ); // Initialize studentAnswer
  const [showResults, setShowResults] = useState(false);
  const [marks, setMarks] = useState(0); // Initialize marks to 0

  const handleStudentAnswer = (choiceIndex, questionIndex) => {
    setAnsweredMcqs((prev) =>
      prev.map((mcq, idx) =>
        idx === questionIndex ? { ...mcq, studentAnswer: choiceIndex } : mcq
      )
    );
  };

  const getResults = () => {
    let score = 0;
    answeredMcqs.forEach((mcq) => {
      if (
        mcq.studentAnswer !== null &&
        mcq.correctAnswer === mcq.studentAnswer
      ) {
        score++;
      }
    });
    setMarks(score);
    setShowResults(true);
  };

  const getChoiceStyle = (mcq, choiceIndex) => {
    if (!showResults) return ""; // No styling before results

    if (mcq.correctAnswer === choiceIndex) {
      return "text-green-500"; // Correct answer always green
    } else if (
      mcq.studentAnswer === choiceIndex &&
      mcq.studentAnswer !== mcq.correctAnswer
    ) {
      return "text-red-500"; // Incorrect answer red
    }
    return "";
  };

  return (
    <div>
      <h1>Mcqs for Students</h1>
      <p className="my-4">Total Questions: {mcqs.length}</p> {/* Simplified */}
      {showResults && <p>Your Score: {marks}</p>}{" "}
      {/* Conditionally show score */}
      {answeredMcqs.map((mcq, index) => (
        <div key={index}>
          <div className="flex items-center mt-6 justify-between">
            <h1 className="">{mcq.question}</h1>{" "}
            {showResults &&
              (mcq.correctAnswer === mcq.studentAnswer ? (
                <span>{<SiTicktick className="text-green-500" />}</span>
              ) : (
                <span>{<TbXboxX className="text-red-500" />}</span>
              ))}
          </div>
          <ul>
            {mcq.choices.map((choice, i) => (
              <li key={i} className="mt-1">
                <input
                  type="radio"
                  checked={
                    showResults
                      ? mcq.correctAnswer === i
                      : mcq.studentAnswer === i
                  } // Correct answer checked in results
                  onChange={
                    showResults ? null : () => handleStudentAnswer(i, index)
                  } // Disable radio buttons in results
                  className="h-4 w-4 relative mr-3"
                  disabled={showResults}
                />
                <span className={getChoiceStyle(mcq, i)}>
                  {" "}
                  {/* Dynamic styling */}
                  {choice || "No choice provided"}
                </span>{" "}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-4">
        <Button variant="primary" onClick={getResults} disabled={showResults}>
          {" "}
          {/* Disable button after submission */}
          {showResults ? "View Results" : "Get Results"}
        </Button>
      </div>
    </div>
  );
};

export default TestMCQs;
