"use client"
import { useState } from "react";

export default function Home() {
  const [jsonText, setJsonText] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [bazarData, setBazarData] = useState([]);
  const [error, setError] = useState("");

  const handleParse = () => {
    setError("");
    try {
      const data = JSON.parse(jsonText);

      // Process students
      const studentRows = [];
      if (data.students && Array.isArray(data.students)) {
        for (const student of data.students) {
          const totalPaid = (student.paid || []).reduce((a, b) => a + b, 0);
          for (const [day, meals] of Object.entries(student.dateOfMeals || {})) {
            studentRows.push({
              Name: student.name,
              Room: student.roomNumber,
              "Total Paid": totalPaid,
              Day: day,
              Morning: meals.morning || 0,
              Lunch: meals.lunch || 0,
              Night: meals.night || 0,
              Updated: meals.updated ? "Yes" : "No",
            });
          }
        }
      }

      // Process daily bazar
      const bazarRows = [];
      if (data.dailyBazar) {
        for (const [day, bazar] of Object.entries(data.dailyBazar)) {
          bazarRows.push({
            Day: day,
            "Bazar Name": bazar.bazarName || "",
            Room: bazar.roomNumber || "",
            Given: bazar.given || 0,
            "Total Bills": bazar.totalBills || 0,
            Return: bazar.return || 0,
            "Extra Cost": bazar.extraCost || 0,
          });
        }
      }

      setStudentsData(studentRows);
      setBazarData(bazarRows);
    } catch (e) {
      setError("Invalid JSON! Please check your input.");
      setStudentsData([]);
      setBazarData([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">
        JSON to Table Viewer
      </h1>
      <textarea
        rows={15}
        className="w-full p-4 rounded-md border-2 border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 font-mono text-lg"
        placeholder="Paste your JSON here..."
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
      />
      <button
        onClick={handleParse}
        className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition duration-300"
      >
        Parse & Show Tables
      </button>
      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

      {studentsData.length > 0 && (
        <section className="mt-14">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-4 border-indigo-400 pb-2">
            Students Meals
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-indigo-600 text-white text-lg">
                <tr>
                  {Object.keys(studentsData[0]).map((col) => (
                    <th
                      key={col}
                      className="px-6 py-3 text-left sticky top-0"
                      style={{ minWidth: 100 }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {studentsData.map((row, i) => {
                  // Add margin between different students
                  const prev = studentsData[i - 1];
                  const isNewStudent = !prev || prev.Name !== row.Name;
                  return (
                    <tr
                      key={i}
                      className={`border-b border-gray-200 ${
                        isNewStudent ? "border-t-4 border-indigo-300" : ""
                      }`}
                    >
                      {Object.values(row).map((val, j) => (
                        <td key={j} className="px-6 py-4 text-gray-700 text-base">
                          {val}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {bazarData.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-4 border-indigo-400 pb-2">
            Daily Bazar
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-indigo-600 text-white text-lg">
                <tr>
                  {Object.keys(bazarData[0]).map((col) => (
                    <th
                      key={col}
                      className="px-6 py-3 text-left sticky top-0"
                      style={{ minWidth: 100 }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bazarData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    {Object.values(row).map((val, j) => (
                      <td key={j} className="px-6 py-4 text-gray-700 text-base">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
