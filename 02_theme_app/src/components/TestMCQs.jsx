import React, { useState } from "react";
import Button from "./ui/Button";

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
  const [answeredMcqs, setAnsweredMcqs] = useState(mcqs);
  const [showResults, setShowResults] = useState(false);

  const [marks, setMarks] = useState(null);

  const handleStudentAnswer = (choiceIndex, questionIndex) => {
    const newKey = "studentAnswer";
    setAnsweredMcqs((prev) =>
      prev.map((mcq, idx) =>
        idx === questionIndex ? { ...mcq, [newKey]: choiceIndex } : mcq
      )
    );
  };

  const getResults = () => {
    // calculate marks
    // showResults true >.>>....>>. render answeredMcqs in results formate
    console.log(answeredMcqs);
    let score = 0;
    for (let i = 0; i < answeredMcqs.length; i++) {
      if (answeredMcqs[i].correctAnswer === answeredMcqs[i].studentAnswer) {
        score++;
      } else {
        score = score;
      }
      setMarks(score);
    }

    setShowResults(true);
  };

  return (
    <div>
      <h1>Mcqs for Students</h1>
      <div>
        {mcqs.length > 0 ? (
          <p className="my-4">Total Question: {mcqs.length}</p>
        ) : null}
      </div>

      <p>Yours scores {marks}</p>
      {answeredMcqs.length === 0 ? (
        <h1>No Questions available</h1>
      ) : (
        <div>
          {answeredMcqs.map((mcq, index) => (
            <div key={index}>
              <h1 className="mt-6">{mcq.question}</h1>

              {mcq.choices && mcq.choices.length > 0 ? (
                <div>
                  <ul>
                    {mcq.choices.map((choice, i) => (
                      <li key={i} className={`mt-1`}>
                        <input
                          type="radio"
                          checked={mcq.studentAnswer === i}
                          onChange={() => handleStudentAnswer(i, index)}
                          className="h-4 w-4 relative  mr-3"
                        />

                        {choice || "No choice provided"}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <h1>No Choices avaailable for this question</h1>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <Button variant="primary" onClick={getResults}>
          Get Results
        </Button>
      </div>
    </div>
  );
};

export default TestMCQs;
