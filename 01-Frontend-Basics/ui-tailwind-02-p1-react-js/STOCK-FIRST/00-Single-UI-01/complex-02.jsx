import React from 'react';

function SchoolClasses() {
  const school = {
    classA: [
      { name: "Ali", age: 10 },
      { name: "Sara", age: 11 }
    ],
    classB: [
      { name: "Lingkon", age: 12 },
      { name: "Nina", age: 10 }
    ]
  };

  return (
    <div>
      <h2>School Classes</h2>

      {Object.entries(school).map(([className, students]) => (
        <div key={className}>
          <h3>{className}</h3>
          <ul>
            {students.map((student, idx) => (
              <li key={idx}>
                {student.name} — Age: {student.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SchoolClasses;
