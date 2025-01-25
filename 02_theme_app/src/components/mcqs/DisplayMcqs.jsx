import React from "react";

// DisplayMcqs Component
const DisplayMcqs = ({ mcqs = [] }) => {

  console.log(mcqs)
  return (
    <div className="p-4 ">
      {mcqs.length === 0 ? (
        <h1 className="text-xl">No Questions Added</h1>
      ) : (
        <div className="">
          <h2 className="text-lg font-semibold mb-4">Saved Questions:</h2>
          {mcqs.map((mcq, index) => (
            <Card key={index} className="mb-4">
              <CardContent>
                <p className="font-medium">
                  {index + 1}. {mcq.question || "No question provided"}
                </p>
                {mcq.choices && mcq.choices.length > 0 ? (
                  <ul className=" mt-2 ">
                    {mcq.choices.map((choice, i) => (
                      <li
                        key={i}
                        className={`mt-1 ${
                          mcq.correctAnswer === i
                            ? "font-bold text-green-600 dark:text-green-600"
                            : ""
                        }`}
                      >
                        {choice || "No choice provided"}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No choices available.</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// Card Component
const Card = ({ children, className }) => {
  return (
    <div
      className={`border rounded-lg border-gray-3 dark:border-gray-6 shadow-sm p-4 bg-bg-light-sec dark:bg-bg-dark-pri ${className}`}
    >
      {children}
    </div>
  );
};

// CardContent Component
const CardContent = ({ children, className }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};

export default DisplayMcqs;
