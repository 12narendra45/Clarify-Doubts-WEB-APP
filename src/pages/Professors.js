import React from "react";

function Professors() {
  const professors = [
    { name: "Dr. John Doe", subject: "Mathematics" },
    { name: "Prof. Jane Smith", subject: "Physics" },
  ];

  return (
    <div className="container">
      <h2>Available Professors</h2>
      <ul className="list-group">
        {professors.map((prof, index) => (
          <li key={index} className="list-group-item">
            <strong>{prof.name}</strong> - {prof.subject}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Professors;
