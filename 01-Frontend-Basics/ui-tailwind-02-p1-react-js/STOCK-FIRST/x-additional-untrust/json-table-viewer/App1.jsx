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
    <div style={{ padding: 20, maxWidth: 900, margin: "auto" }}>
      <h1>JSON to Table Viewer</h1>
      <textarea
        rows={15}
        style={{ width: "100%", fontFamily: "monospace", fontSize: 14 }}
        placeholder="Paste JSON here..."
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
      />
      <br />
      <button onClick={handleParse} style={{ marginTop: 10, padding: "10px 20px" }}>
        Parse & Show Tables
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {studentsData.length > 0 && (
        <>
          <h2>Students Meals</h2>
          <table border="1" cellPadding="5" cellSpacing="0" style={{ width: "100%", marginBottom: 40 }}>
            <thead>
              <tr>
                {Object.keys(studentsData[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentsData.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {bazarData.length > 0 && (
        <>
          <h2>Daily Bazar</h2>
          <table border="1" cellPadding="5" cellSpacing="0" style={{ width: "100%" }}>
            <thead>
              <tr>
                {Object.keys(bazarData[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bazarData.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
