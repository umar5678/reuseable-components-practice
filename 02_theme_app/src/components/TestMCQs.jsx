import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { SiTicktick } from "react-icons/si";
import { TbXboxX } from "react-icons/tb";

const TestMCQs = ({ mcqs = [] }) => {
  const [answeredMcqs, setAnsweredMcqs] = useState(null); // Initialize studentAnswer

  useEffect(() => {
    if (mcqs && mcqs.length > 0) {
      // Check if mcqs is valid and not empty
      setAnsweredMcqs(mcqs.map((mcq) => ({ ...mcq, studentAnswer: null })));
      setShowResults(false); // Reset showResults when mcqs change
      setMarks(0); // Reset marks when mcqs change
    } else {
      setAnsweredMcqs(null); // Set to null if no mcqs are provided
      setShowResults(false);
      setMarks(0);
    }
  }, [mcqs]);
  console.log("props mcqs:", mcqs);
  console.group("aanswered mcqs", answeredMcqs);
  const [showResults, setShowResults] = useState(false);
  const [marks, setMarks] = useState(0); // Initialize marks to 0

  const handleStudentAnswer = (choiceIndex, questionIndex) => {
    if (!answeredMcqs) return;
    setAnsweredMcqs((prev) =>
      prev.map((mcq, idx) =>
        idx === questionIndex ? { ...mcq, studentAnswer: choiceIndex } : mcq
      )
    );
  };

  const getResults = () => {
    if (!answeredMcqs) return; // handle null case
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

  if (!answeredMcqs) {
    // Render a message if no mcqs are available
    return <div>No questions available.</div>;
  }

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
