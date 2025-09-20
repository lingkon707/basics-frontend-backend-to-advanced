import { useState } from "react";

const walletData = {
  USD: {
    name: "US Dollar",
    icon: "💵",
    balance: 1200.5,
    dailyChange: 2.3,
    converted: "BDT 140,600",
  },
  BDT: {
    name: "Bangladeshi Taka",
    icon: "🪙",
    balance: 140000,
    dailyChange: -1.1,
    converted: "USD 1,200.50",
  },
  EUR: {
    name: "Euro",
    icon: "💶",
    balance: 875.4,
    dailyChange: 0.5,
    converted: "BDT 104,320",
  },
};

export default function Balance() {
  const [active, setActive] = useState("USD");
  const wallet = walletData[active];

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Multi-Currency Balance
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {Object.keys(walletData).map((currency) => (
          <button
            key={currency}
            onClick={() => setActive(currency)}
            className={`px-5 py-2 rounded-lg font-medium border transition-all duration-300 ${
              active === currency
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}
          >
            {currency}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-3xl">{wallet.icon}</span>
          <h2 className="text-2xl font-semibold text-gray-800">{wallet.name}</h2>
        </div>

        <p className="text-sm text-gray-500 mb-1">Available Balance</p>
        <p className="text-5xl font-extrabold text-green-600 mb-4">
          {wallet.balance.toLocaleString()} {active}
        </p>

        <div className="mt-4 text-sm text-gray-700">
          <p>
            <strong>Converted:</strong> {wallet.converted}
          </p>
        </div>

        <p
          className={`mt-3 text-sm font-medium ${
            wallet.dailyChange >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {wallet.dailyChange >= 0 ? "▲" : "▼"} {Math.abs(wallet.dailyChange)}% today
        </p>
      </div>
    </div>
  );
}
