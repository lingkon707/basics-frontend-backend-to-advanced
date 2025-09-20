"use client";

import { useState } from "react";

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
    roll: "123456",
  },
  {
    name: "Limon",
    age: 23,
    exam: "HSC",
    board: "Dhaka",
    year: "2019",
    roll: "234567",
  },
  {
    name: "Limon",
    age: 23,
    exam: "Diploma",
    board: "BTEB",
    year: "2023",
    roll: "345678",
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
    const match = certificateDB.find(
      (c) =>
        c.exam === exam.trim() &&
        c.roll === roll.trim() &&
        c.board === board.trim()
    );

    if (match) {
      setResult(match);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
    setStep(3);
  };

  const reset = () => {
    setExam("");
    setRoll("");
    setBoard("");
    setResult(null);
    setNotFound(false);
    setStep(1);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-200 p-4">
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/60">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 tracking-wide">🎓 Certificate Checker</h1>

        {/* Step 1: Select Exam */}
        {step === 1 && (
          <div className="space-y-5">
            <label className="block text-gray-700 font-medium">Choose Exam Type</label>
            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Exam --</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Diploma">Diploma</option>
            </select>
            <button
              disabled={!exam}
              onClick={() => setStep(2)}
              className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              Continue ➡️
            </button>
          </div>
        )}

        {/* Step 2: Roll + Board */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">Enter Roll Number</label>
              <input
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 123456"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Select Board</label>
              <select
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
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
                className="flex-1 border border-gray-400 py-2 rounded-xl text-gray-700"
              >
                ⬅️ Back
              </button>
              <button
                type="submit"
                disabled={!roll || !board}
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
              >
                Check ✅
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Result */}
        {step === 3 && (
          <div className="text-center space-y-4">
            {result ? (
              <>
                <div className="text-4xl">✅</div>
                <p className="text-xl font-semibold text-green-700">Valid Certificate Found</p>
                <div className="text-gray-800">
                  <p><strong>Name:</strong> {result.name}</p>
                  <p><strong>Age:</strong> {result.age}</p>
                  <p><strong>Year:</strong> {result.year}</p>
                  <p><strong>Board:</strong> {result.board}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-4xl">❌</div>
                <p className="text-xl font-semibold text-red-600">No Match Found</p>
                <p className="text-gray-700">Please check your information again.</p>
              </>
            )}
            <button
              onClick={reset}
              className="w-full bg-gray-800 text-white py-2 rounded-xl hover:bg-gray-900 transition"
            >
              Check Another 🔁
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
