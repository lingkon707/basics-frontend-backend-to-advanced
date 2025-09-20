import React, { useState, useEffect } from "react";

export default function CashoutApp() {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [tries, setTries] = useState(0);
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(5);

  // Countdown effect when step 2 starts
  useEffect(() => {
    let countdown;
    if (step === 2 && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if (step === 2 && timer === 0) {
      setStep(1);
      setStatus("⏱ Timeout. Try again.");
      setPassword("");
    }
    return () => clearInterval(countdown);
  }, [step, timer]);

  const handleNext = () => {
    if (!number.startsWith("017")) {
      setStatus("❌ Invalid number. Must start with 017");
      return;
    }
    setStatus("");
    setStep(2);
    setTimer(5);
  };

  const handleSubmit = () => {
    if (disabled) return;
    if (password === "123") {
      setStatus("✅ Done");
      setDisabled(true);
    } else {
      const newTries = tries + 1;
      setTries(newTries);
      if (newTries >= 3) {
        setDisabled(true);
        setStatus("🚫 Try later");
      } else {
        setStatus(`❌ Wrong password (${newTries}/3)`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Cashout</h1>
        {step === 1 && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter number (017...)"
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              value={number}
              disabled={disabled}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button
              onClick={handleNext}
              disabled={disabled}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter password"
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              disabled={disabled}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              disabled={disabled}
              className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Submit
            </button>
            <div className="text-sm text-gray-500 text-center">
              ⏳ Time left: {timer}s
            </div>
          </div>
        )}

        <div className="text-center text-sm text-gray-700 mt-4">{status}</div>
      </div>
    </div>
  );
}
