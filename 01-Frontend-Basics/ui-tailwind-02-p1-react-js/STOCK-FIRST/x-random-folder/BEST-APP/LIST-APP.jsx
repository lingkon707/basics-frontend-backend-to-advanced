import React, { useState, useEffect } from "react";

const people = [
  { name: "Arif Hossain", birthDate: 12, birthMonth: "March", birthYear: 1985 },
  { name: "Farzana Akter", birthDate: 25, birthMonth: "July", birthYear: 1990 },
  { name: "Rafiq Islam", birthDate: 5, birthMonth: "January", birthYear: 1978 },
  { name: "Sumaiya Begum", birthDate: 18, birthMonth: "November", birthYear: 1992 },
  { name: "Jahidul Islam", birthDate: 30, birthMonth: "May", birthYear: 1988 },
  { name: "Tanjina Akhter", birthDate: 9, birthMonth: "September", birthYear: 1995 },
  { name: "Sajib Khan", birthDate: 22, birthMonth: "December", birthYear: 1983 },
  { name: "Rumana Sultana", birthDate: 14, birthMonth: "April", birthYear: 1991 },
  { name: "Imran Hossain", birthDate: 3, birthMonth: "August", birthYear: 1980 },
  { name: "Nazma Akter", birthDate: 27, birthMonth: "October", birthYear: 1987 },
  { name: "Shakil Ahmed", birthDate: 16, birthMonth: "June", birthYear: 1993 },
  { name: "Mim Akhter", birthDate: 8, birthMonth: "February", birthYear: 1994 },
  { name: "Fahim Rahman", birthDate: 21, birthMonth: "March", birthYear: 1989 },
  { name: "Nusrat Jahan", birthDate: 11, birthMonth: "July", birthYear: 1996 },
  { name: "Hasan Mahmud", birthDate: 29, birthMonth: "November", birthYear: 1982 },
  { name: "Sharmin Akhter", birthDate: 6, birthMonth: "January", birthYear: 1990 }
];

// Helper to convert month name to number
const monthToNum = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

// Calculate age from birthdate
function calculateAge(birthYear, birthMonth, birthDate) {
  const today = new Date();
  const birth = new Date(birthYear, monthToNum[birthMonth], birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export default function BangladeshiAgeApp() {
  const [sortOrder, setSortOrder] = useState("olderToJunior"); // default sort
  const [startAge, setStartAge] = useState("");
  const [endAge, setEndAge] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    filterAndSort();
  }, [sortOrder, startAge, endAge]);

  function filterAndSort() {
    let result = people.map((p) => {
      const age = calculateAge(p.birthYear, p.birthMonth, p.birthDate);
      return { ...p, age };
    });

    // Filter by age range if inputs are valid numbers
    const start = parseInt(startAge);
    const end = parseInt(endAge);
    if (!isNaN(start) && !isNaN(end)) {
      result = result.filter((p) => p.age >= start && p.age <= end);
    }

    // Sort by age
    result.sort((a, b) =>
      sortOrder === "olderToJunior" ? b.age - a.age : a.age - b.age
    );

    setFilteredPeople(result);
  }

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Bangladeshi Age List</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "olderToJunior"
              ? "bg-blue-600 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setSortOrder("olderToJunior")}
        >
          OLDER TO JUNIOR LIST
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "juniorToOlder"
              ? "bg-blue-600 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setSortOrder("juniorToOlder")}
        >
          JUNIOR TO OLDER LIST
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <input
          type="number"
          placeholder="Start Age"
          className="border p-2 rounded w-24 text-center"
          value={startAge}
          onChange={(e) => setStartAge(e.target.value)}
          min="0"
        />
        <input
          type="number"
          placeholder="End Age"
          className="border p-2 rounded w-24 text-center"
          value={endAge}
          onChange={(e) => setEndAge(e.target.value)}
          min="0"
        />
      </div>

      <div className="mb-4 text-center font-semibold">
        Total Persons Found: {filteredPeople.length}
      </div>

      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-3 py-2">Name</th>
            <th className="border border-gray-300 px-3 py-2">Birth Date</th>
            <th className="border border-gray-300 px-3 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map(({ name, birthDate, birthMonth, birthYear, age }, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-3 py-2">{name}</td>
              <td className="border border-gray-300 px-3 py-2">
                {birthDate} {birthMonth} {birthYear}
              </td>
              <td className="border border-gray-300 px-3 py-2">{age}</td>
            </tr>
          ))}
          {filteredPeople.length === 0 && (
            <tr>
              <td colSpan="3" className="py-4 text-gray-500">
                No persons found in this age range.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
