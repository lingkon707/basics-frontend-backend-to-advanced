import { useState } from "react";

const userBalance = {
  name: "John Doe",
  balance: 15420.75,
  lastUpdated: "2025-07-13",
  currency: "USD",
  transactions: [
    { date: "2025-07-10", amount: -150, label: "Subscription Fee" },
    { date: "2025-07-09", amount: 2000, label: "Payment Received" },
    { date: "2025-07-05", amount: -500, label: "Service Usage" },
  ],
};

const wallets = {
  USD: 1200.5,
  BDT: 140000,
  EUR: 875.4,
};

export default function Balance ( ) {

     const [active, setActive] = useState("USD");

  return (



      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
      <div className="flex space-x-4 mb-6">
        {Object.keys(wallets).map((currency) => (
          <button
            key={currency}
            onClick={() => setActive(currency)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              active === currency
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {currency}
          </button>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xl font-bold text-gray-800">Your {active} Balance</p>
        <p className="text-4xl text-green-600 font-bold mt-3">
          {wallets[active].toLocaleString()} {active}
        </p>
      </div>
    </div>
    

   



  );
};
