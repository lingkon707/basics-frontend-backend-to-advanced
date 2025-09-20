"use client";

import React, { useState } from "react";

export default function JsonViewer() {
  const [jsonText, setJsonText] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [bazarData, setBazarData] = useState([]);
  const [summary, setSummary] = useState({
    totalPaid: 0,
    studentMeals: {},
    totalBazar: 0,
  });
  const [error, setError] = useState("");

  const handleParse = () => {
    setError("");
    try {
      const data = JSON.parse(jsonText);

      const studentRows = [];
      const studentMeals = {};
      let totalPaid = 0;

      if (Array.isArray(data.students)) {
        for (const student of data.students) {
          const studentKey = `${student.name}-${student.roomNumber}`;
          const totalPaidByStudent = (student.paid || []).reduce((a, b) => a + b, 0);
          totalPaid += totalPaidByStudent;

          let morningTotal = 0;
          let lunchTotal = 0;
          let nightTotal = 0;

          for (const [day, meals] of Object.entries(student.dateOfMeals || {})) {
            const morning = meals.morning || 0;
            const lunch = meals.lunch || 0;
            const night = meals.night || 0;

            morningTotal += morning;
            lunchTotal += lunch;
            nightTotal += night;

            studentRows.push({
              Name: student.name,
              Room: student.roomNumber,
              "Total Paid": totalPaidByStudent,
              Day: day,
              Morning: morning,
              Lunch: lunch,
              Night: night,
              Updated: meals.updated === true ? "Yes updated" : "",
            });
          }

          studentMeals[studentKey] = {
            name: student.name,
            room: student.roomNumber,
            totalMeals: morningTotal + lunchTotal + nightTotal,
          };
        }
      }

      const bazarRows = [];
      let totalBazar = 0;

      if (data.dailyBazar) {
        for (const [day, bazar] of Object.entries(data.dailyBazar)) {
          const bills = bazar.totalBills || 0;
          const extra = bazar.extraCost || 0;
          totalBazar += bills + extra;

          bazarRows.push({
            Day: day,
            "Bazar Name": bazar.bazarName || "",
            Room: bazar.roomNumber || "",
            Given: bazar.given || 0,
            "Total Bills": bills,
            Return: bazar.return || 0,
            "Extra Cost": extra,
          });
        }
      }

      setSummary({
        totalPaid,
        studentMeals,
        totalBazar,
      });

      setStudentsData(studentRows);
      setBazarData(bazarRows);
    } catch (e) {
      setError("Invalid JSON! Please check your input.");
      setStudentsData([]);
      setBazarData([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">
        JSON to Table Viewer
      </h1>

      <textarea
        rows={14}
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

       {/* SUMMARY SECTION */}
      {/* {(studentsData.length > 0 || bazarData.length > 0) && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-400 pb-2">
            📊 Summary
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <p className="text-xl font-semibold text-gray-800">
              💰 Total Paid by Students:{" "}
              <span className="text-indigo-600 font-bold">৳ {summary.totalPaid}</span>
            </p>

            <p className="text-xl font-semibold text-gray-800">
              🧮 Total Bazar Cost:{" "}
              <span className="text-rose-600 font-bold">৳ {summary.totalBazar}</span>
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">🍽️ Eaten (Meals × 60):</h3>
              <ul className="list-disc list-inside text-gray-700">
                {Object.entries(summary.studentMeals).map(([key, { name, room, totalMeals }]) => (
                  <li key={key}>
                    <span className="font-medium text-indigo-800">
                      {name} (Room {room}):
                    </span>{" "}
                    {totalMeals} meals × 60 ={" "}
                    <span className="font-bold text-green-600">৳ {totalMeals * 60}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )} */}

      {/* SUMMARY SECTION */}
{(studentsData.length > 0 || bazarData.length > 0) && (
  <section className="mt-16">
    <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-400 pb-2">
      📊 Summary
    </h2>
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
      <p className="text-xl font-semibold text-gray-800">
        💰 Total Paid by Students:{" "}
        <span className="text-indigo-600 font-bold">৳ {summary.totalPaid}</span>
      </p>

      <p className="text-xl font-semibold text-gray-800">
        🧮 Total Bazar Cost:{" "}
        <span className="text-rose-600 font-bold">৳ {summary.totalBazar}</span>
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">🍽️ Eaten (Meals × 60):</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {Object.entries(summary.studentMeals).map(
            ([key, { name, room, totalMeals }]) => {
              const eaten = totalMeals * 60;
              const studentPaidRows = studentsData.filter(
                (row) => row.Name === name
              );
              const paid = studentPaidRows.length
                ? studentPaidRows[0]["Total Paid"]
                : 0;
              const balance = eaten - paid;

              return (
                <li key={key}>
                  <div className="font-medium text-indigo-800">
                    {name} (Room {room})
                  </div>
                  <div className="ml-4">
                    🍴 Meals: <strong>{totalMeals}</strong> × 60 ={" "}
                    <span className="text-green-600 font-bold">৳ {eaten}</span>
                    <br />
                    💳 Paid: <span className="font-bold text-blue-600">৳ {paid}</span>
                    <br />
                    🧾 Balance:{" "}
                    <span
                      className={`font-bold ${
                        balance > 0 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {balance >= 0 ? "Due" : "Extra"} ৳ {Math.abs(balance)}
                    </span>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  </section>
)}


      {/* STUDENT MEALS TABLE */}
      {studentsData.length > 0 && (
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-400 pb-2">
            🧍 Students Meals
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-indigo-600 text-white text-lg">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Room</th>
                  <th className="px-6 py-3">Total Paid</th>
                  <th className="px-6 py-3">Day</th>
                  <th className="px-6 py-3">Morning</th>
                  <th className="px-6 py-3">Lunch</th>
                  <th className="px-6 py-3">Night</th>
                  <th className="px-6 py-3">Updated</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.map((row, i) => {
                  const prev = studentsData[i - 1];
                  const next = studentsData[i + 1];
                  const isNewStudent = !prev || prev.Name !== row.Name;
                  const isLastOfStudent = !next || next.Name !== row.Name;

                  let morningTotal = 0;
                  let lunchTotal = 0;
                  let nightTotal = 0;

                  if (isLastOfStudent) {
                    for (let j = 0; j < studentsData.length; j++) {
                      if (studentsData[j].Name === row.Name) {
                        morningTotal += Number(studentsData[j].Morning || 0);
                        lunchTotal += Number(studentsData[j].Lunch || 0);
                        nightTotal += Number(studentsData[j].Night || 0);
                      }
                    }
                  }

                  return (
                    <React.Fragment key={i}>
                      <tr
                        className={`border-b ${
                          isNewStudent ? "border-t-4 border-indigo-300" : "border-gray-200"
                        }`}
                      >
                        {isNewStudent ? (
                          <>
                            <td className="px-6 py-4 font-semibold text-gray-800">{row.Name}</td>
                            <td className="px-6 py-4">{row.Room}</td>
                            <td className="px-6 py-4">{row["Total Paid"]}</td>
                          </>
                        ) : (
                          <>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                          </>
                        )}
                        <td className="px-6 py-4">{row.Day}</td>
                        <td className="px-6 py-4">{row.Morning}</td>
                        <td className="px-6 py-4">{row.Lunch}</td>
                        <td className="px-6 py-4">{row.Night}</td>
                        <td className="px-6 py-4">{row.Updated}</td>
                      </tr>

                      {isLastOfStudent && (
                        <tr className="bg-indigo-100 border-b-4 border-indigo-300 font-bold text-indigo-800">
                          <td colSpan={4} className="px-6 py-4 text-right">
                            Total Meals
                          </td>
                          <td className="px-6 py-4">{morningTotal}</td>
                          <td className="px-6 py-4">{lunchTotal}</td>
                          <td className="px-6 py-4">{nightTotal}</td>
                          <td className="px-6 py-4">
                            {morningTotal + lunchTotal + nightTotal}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* BAZAR TABLE */}
      {bazarData.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-400 pb-2">
            🧺 Daily Bazar
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-indigo-600 text-white text-lg">
                <tr>
                  {Object.keys(bazarData[0]).map((col) => (
                    <th key={col} className="px-6 py-3 text-left">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bazarData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    {Object.values(row).map((val, j) => (
                      <td key={j} className="px-6 py-4">
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
