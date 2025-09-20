import React, { useState } from "react";

export default function BalanceApp() {
  const [balanceUSD, setBalanceUSD] = useState(0);
  const [cashInAmount, setCashInAmount] = useState("");
  const [rate, setRate] = useState("");
  const [currency, setCurrency] = useState("TK");
  const [convertedUSD, setConvertedUSD] = useState(0);

  const handleConvertAndAdd = () => {
    const amount = parseFloat(cashInAmount);
    const conversionRate = parseFloat(rate);

    if (isNaN(amount) || isNaN(conversionRate)) {
      alert("Enter valid number values.");
      return;
    }

    const usdValue = amount * conversionRate;
    setConvertedUSD(usdValue.toFixed(2));
    setBalanceUSD((prev) => (prev + usdValue).toFixed(2));
    setCashInAmount("");
    setRate("");
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">💵 Balance App</h1>

      {/* Main Balance */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold">Main Balance (USD)</h2>
        <p className="text-3xl font-bold text-green-600">${balanceUSD}</p>
      </div>

      {/* Input Section */}
      <div className="space-y-4">

        <div>
          <label className="block text-sm font-medium">Local Money</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. 0.0091"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium">USD RATE TODAY</label>
          <input
            type="number"
            value={cashInAmount}
            onChange={(e) => setCashInAmount(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. 1000"
          />
        </div>

        

        <div>
          <label className="block text-sm font-medium">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="TK">TK (Taka)</option>
            <option value="Rupee">Rupee</option>
            <option value="Dirham">Dirham</option>
            <option value="Euro">Euro</option>
          </select>
        </div>

        <button
          onClick={handleConvertAndAdd}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Convert & Add to Balance
        </button>
      </div>

      {/* Conversion Result */}
      {convertedUSD > 0 && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Converted <strong>{cashInAmount}</strong> {currency} to{" "}
            <strong>${convertedUSD}</strong> USD
          </p>
        </div>
      )}
    </div>
  );
}
