import React, { useState } from "react";

const currencyRates = [
  { code: "TK", name: "Taka", rate: 0.0100 }, // 100 tk = 1 $
  { code: "Rupee", name: "Rupee", rate: 0.012 },
  { code: "Dirham", name: "Dirham", rate: 0.27 },
  { code: "Euro", name: "Euro", rate: 1.05 },
];

export default function BalanceApp() {
  const [balanceUSD, setBalanceUSD] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencyRates[0].code);
  const [convertedUSD, setConvertedUSD] = useState(0);

  const selectedCurrency = currencyRates.find((c) => c.code === currency);

  const handleConvertAndAdd = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const usdValue = amt * selectedCurrency.rate;
    setConvertedUSD(usdValue.toFixed(2));
    setBalanceUSD((prev) => (parseFloat(prev) + usdValue).toFixed(2));
    setAmount("");
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">💵 Balance App</h1>

      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold">Main Balance (USD)</h2>
        <p className="text-3xl font-bold text-green-600">${balanceUSD}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            {currencyRates.map(({ code, name }) => (
              <option key={code} value={code}>
                {code} ({name})
              </option>
            ))}
          </select>
        </div>

        <div className="text-center text-gray-700 font-medium">
          {/* Show live converted USD value */}
          {amount && !isNaN(amount) && (
            <>
              <p>
                Conversion Rate: 1 {currency} = {selectedCurrency.rate} USD
              </p>
              <p>
                Total in USD: <span className="font-bold">${(amount * selectedCurrency.rate).toFixed(2)}</span>
              </p>
            </>
          )}
        </div>

        <button
          onClick={handleConvertAndAdd}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Balance
        </button>
      </div>

      {convertedUSD > 0 && (
        <div className="mt-4 text-center text-green-700 font-semibold">
          Added ${convertedUSD} USD to balance
        </div>
      )}
    </div>
  );
}
