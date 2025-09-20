"use client";

import { useState } from "react";

const studentData = {
  name: "Limon",
  age: 23,
  ssc: "1",
  hsc: "2",
  diploma: "3",
};

export default function CertificateCheck() {
  const [ssc, setSSC] = useState("");
  const [hsc, setHSC] = useState("");
  const [diploma, setDiploma] = useState("");

  const [sscStatus, setSSCStatus] = useState("");
  const [hscStatus, setHSCStatus] = useState("");
  const [diplomaStatus, setDiplomaStatus] = useState("");

  const [showFinalResult, setShowFinalResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isSSC = ssc === studentData.ssc;
    const isHSC = hsc === studentData.hsc;
    const isDiploma = diploma === studentData.diploma;

    setSSCStatus(isSSC ? "✔️ Correct roll" : "❌ Wrong roll");
    setHSCStatus(isHSC ? "✔️ Correct roll" : "❌ Wrong roll");
    setDiplomaStatus(isDiploma ? "✔️ Correct roll" : "❌ Wrong roll");

    setShowFinalResult(isSSC && isHSC && isDiploma);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white/40 backdrop-blur-md shadow-xl rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Certificate Validator</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* SSC */}
          <div>
            <input
              type="text"
              value={ssc}
              onChange={(e) => setSSC(e.target.value)}
              placeholder="Enter SSC Roll"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className={`mt-1 text-sm ${sscStatus.includes("✔") ? "text-green-600" : "text-red-500"}`}>
              {sscStatus}
            </p>
          </div>

          {/* HSC */}
          <div>
            <input
              type="text"
              value={hsc}
              onChange={(e) => setHSC(e.target.value)}
              placeholder="Enter HSC Roll"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className={`mt-1 text-sm ${hscStatus.includes("✔") ? "text-green-600" : "text-red-500"}`}>
              {hscStatus}
            </p>
          </div>

          {/* Diploma */}
          <div>
            <input
              type="text"
              value={diploma}
              onChange={(e) => setDiploma(e.target.value)}
              placeholder="Enter Diploma Roll"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className={`mt-1 text-sm ${diplomaStatus.includes("✔") ? "text-green-600" : "text-red-500"}`}>
              {diplomaStatus}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition"
          >
            Submit
          </button>
        </form>

        {showFinalResult && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-xl text-center shadow">
            <p className="text-lg font-semibold">✅ Valid Certificate Checked</p>
            <p>Name: <strong>{studentData.name}</strong></p>
            <p>Age: <strong>{studentData.age}</strong></p>
          </div>
        )}
      </div>
    </main>
  );
}
