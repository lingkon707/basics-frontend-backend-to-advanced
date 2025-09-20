import React from 'react';

function StudentsMarks() {
  const students = [
    { name: "Ali", marks: [10, 20, 30] },
    { name: "Sara", marks: [15, 25, 35] },
    { name: "Lingkon", marks: [20, 30, 40] }
  ];

  return (
    <div>
      <h2>Students Marks</h2>
      <ul>
        {students.map((student, index) => {
          const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
          return (
            <li key={index}>
              <strong>{student.name}</strong> — Total Marks: {totalMarks} <br />
              Marks: {student.marks.join(", ")}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentsMarks;
