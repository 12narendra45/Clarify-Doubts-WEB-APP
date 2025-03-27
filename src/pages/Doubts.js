import React, { useState } from "react";

function Doubts() {
  const [doubts, setDoubts] = useState([
    { 
      text: "How to solve quadratic equations?", 
      answers: ["Use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a"], 
      showAnswers: false 
    },
    { 
      text: "What is Newton's third law?", 
      answers: ["For every action, there is an equal and opposite reaction."], 
      showAnswers: false 
    },
  ]);

  const [newDoubt, setNewDoubt] = useState(""); // New doubt input
  const [answers, setAnswers] = useState({}); // Store answers for each doubt

  // Function to add a new doubt
  const addDoubt = () => {
    if (newDoubt.trim() !== "") {
      setDoubts([...doubts, { text: newDoubt, answers: [], showAnswers: false }]);
      setNewDoubt("");
    }
  };

  // Toggle visibility of answers for a specific doubt
  const toggleAnswers = (index) => {
    const updatedDoubts = [...doubts];
    updatedDoubts[index].showAnswers = !updatedDoubts[index].showAnswers;
    setDoubts(updatedDoubts);
  };

  // Function to add an answer
  const addAnswer = (index) => {
    if (answers[index]?.trim()) {
      const updatedDoubts = [...doubts];
      updatedDoubts[index].answers.push(answers[index]);
      setDoubts(updatedDoubts);
      setAnswers({ ...answers, [index]: "" }); // Clear input after submitting
    }
  };

  return (
    <div className="container">
      <h2>Doubts Section</h2>

      {/* List of doubts */}
      <ul className="list-group">
        {doubts.map((doubt, index) => (
          <li key={index} className="list-group-item">
            <strong>{doubt.text}</strong>
            
            {/* Clarify button */}
            <button className="btn btn-primary ms-2" onClick={() => toggleAnswers(index)}>
              {doubt.showAnswers ? "Hide" : "Clarify"}
            </button>

            {/* Show answers & input only when 'Clarify' is clicked */}
            {doubt.showAnswers && (
              <div className="mt-2">
                <h5>Answers:</h5>
                <ul>
                  {doubt.answers.length > 0 ? (
                    doubt.answers.map((answer, ansIndex) => (
                      <li key={ansIndex} className="bg-light p-1 mt-1">{answer}</li>
                    ))
                  ) : (
                    <p>No answers yet. Be the first to clarify!</p>
                  )}
                </ul>

                {/* Answer input */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your answer..."
                  value={answers[index] || ""}
                  onChange={(e) => setAnswers({ ...answers, [index]: e.target.value })}
                />
                <button className="btn btn-success mt-2" onClick={() => addAnswer(index)}>
                  Submit Answer
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Input to add new doubt */}
      <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Ask a doubt..."
          value={newDoubt}
          onChange={(e) => setNewDoubt(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={addDoubt}>
          Post Doubt
        </button>
      </div>
    </div>
  );
}

export default Doubts;
