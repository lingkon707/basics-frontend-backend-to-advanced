// npm install lucide-react

"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface Certificate {
  name: string;
  age: number;
  exam: string;
  board: string;
  year: string;
  roll: string;
}

const certificateDB: Certificate[] = [
  {
    name: "Limon",
    age: 23,
    exam: "SSC",
    board: "Dhaka",
    year: "2017",
    roll: "1",
  },
  {
    name: "Limon",
    age: 23,
    exam: "HSC",
    board: "Dhaka",
    year: "2019",
    roll: "2",
  },
  {
    name: "Limon",
    age: 23,
    exam: "Diploma",
    board: "BTEB",
    year: "2023",
    roll: "3",
  },
];

export default function CertificateChecker() {
  const [step, setStep] = useState(1);
  const [exam, setExam] = useState("");
  const [roll, setRoll] = useState("");
  const [board, setBoard] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [notFound, setNotFound] = useState(false);

  const boards = ["Dhaka", "Rajshahi", "Chittagong", "BTEB"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const found = certificateDB.find(
      (c) =>
        c.exam === exam.trim() &&
        c.roll === roll.trim() &&
        c.board === board.trim()
    );

    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }

    setStep(3);
  };

  const resetAll = () => {
    setExam("");
    setRoll("");
    setBoard("");
    setResult(null);
    setNotFound(false);
    setStep(1);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 to-blue-100 p-4">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Certificate Checker</h1>

        {step === 1 && (
          <div className="space-y-4">
            <label className="block font-medium text-gray-700">Select Exam</label>
            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">-- Choose Exam --</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Diploma">Diploma</option>
            </select>
            <button
              disabled={!exam}
              onClick={() => setStep(2)}
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition disabled:bg-indigo-300"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Roll Number</label>
              <input
                type="text"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Roll"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Board</label>
              <select
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">-- Select Board --</option>
                {boards.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 border border-gray-400 text-gray-700 py-2 rounded-xl"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!roll || !board}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition disabled:bg-indigo-300"
              >
                Check
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center space-y-4">
            {result ? (
              <>
                <CheckCircle2 className="mx-auto text-green-500 w-16 h-16" />
                <p className="text-lg font-semibold text-green-700">✅ Valid Certificate</p>
                <p><strong>Name:</strong> {result.name}</p>
                <p><strong>Age:</strong> {result.age}</p>
                <p><strong>Year:</strong> {result.year}</p>
              </>
            ) : (
              <>
                <XCircle className="mx-auto text-red-500 w-16 h-16" />
                <p className="text-lg font-semibold text-red-700">❌ No Match Found</p>
              </>
            )}
            <button
              onClick={resetAll}
              className="w-full mt-4 bg-gray-800 text-white py-2 rounded-xl hover:bg-gray-900 transition"
            >
              Check Another
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
