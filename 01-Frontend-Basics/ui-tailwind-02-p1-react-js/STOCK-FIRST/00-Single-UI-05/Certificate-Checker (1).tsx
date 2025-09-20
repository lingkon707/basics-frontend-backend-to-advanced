"use client";

import { useState } from "react";

const studentData = {
  name: "Limon",
  age: 23,
  ssc: "1234",
  hsc: "123",
  diploma: "12",
};

export default function HomePage() {
  const [ssc, setSSC] = useState("");
  const [hsc, setHSC] = useState("");
  const [diploma, setDiploma] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (ssc === studentData.ssc && hsc === studentData.hsc && diploma === studentData.diploma) {
      setResult(`✅ Name: ${studentData.name}, Age: ${studentData.age}\nValid certificate checked.`);
    } else {
      setResult("❌ Invalid certificate information. Please check again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Certificate Checker</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter SSC Roll"
            value={ssc}
            onChange={(e) => setSSC(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Enter HSC Roll"
            value={hsc}
            onChange={(e) => setHSC(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Enter Diploma Roll"
            value={diploma}
            onChange={(e) => setDiploma(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded text-center whitespace-pre-line">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
