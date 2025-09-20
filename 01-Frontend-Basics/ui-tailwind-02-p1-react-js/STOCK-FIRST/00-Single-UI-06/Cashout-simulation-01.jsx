import React, { useState, useEffect } from "react";

export default function CashoutApp() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [tries, setTries] = useState(0);
  const [status, setStatus] = useState("");
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    if (disabled || processing) return;

    if (number.startsWith("017") && password === "123") {
      setProcessing(true);
      setStatus("Processing...");
      setTimeout(() => {
        setProcessing(false);
        setStatus("✅ Done");
      }, 5000);

      setTimeout(() => {
        if (processing) {
          setProcessing(false);
          setStatus("⏱ Timeout");
        }
      }, 5100);
    } else {
      const newTries = tries + 1;
      setTries(newTries);
      if (newTries >= 3) {
        setDisabled(true);
        setStatus("🚫 Try later");
      } else {
        setStatus(`❌ Wrong number or password (${newTries}/3)`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Cashout</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter number (017...)"
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            value={number}
            disabled={disabled}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            disabled={disabled}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            disabled={disabled || processing}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              disabled || processing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {processing ? "Processing..." : "Submit"}
          </button>
          <div className="text-center text-sm text-gray-700 mt-4">{status}</div>
        </div>
      </div>
    </div>
  );
}
