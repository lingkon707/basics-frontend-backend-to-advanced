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

export default function Balance () {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-800">Your Balance</h2>
      <p className="text-4xl font-bold text-green-600 my-4">
        ${userBalance.balance.toLocaleString()}
      </p>
      <p className="text-sm text-gray-500">
        Last updated: {userBalance.lastUpdated}
      </p>
      <div className="mt-6 border-t pt-4">
        <h3 className="text-md font-medium text-gray-700 mb-2">Recent Activity</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          {userBalance.transactions.map((t, i) => (
            <li key={i}>
              {t.date}: {t.label}{" "}
              <span className={t.amount < 0 ? "text-red-600" : "text-green-600"}>
                {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
