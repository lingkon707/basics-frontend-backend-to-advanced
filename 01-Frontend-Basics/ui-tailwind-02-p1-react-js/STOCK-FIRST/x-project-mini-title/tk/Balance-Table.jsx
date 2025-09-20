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

     <div className="overflow-x-auto max-w-4xl mx-auto mt-8">
      <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Label</th>
            <th className="px-4 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {userBalance.transactions.map((t, i) => (
            <tr key={i} className="border-t text-sm text-gray-800">
              <td className="px-4 py-2">{t.date}</td>
              <td className="px-4 py-2">{t.label}</td>
              <td
                className={`px-4 py-2 ${
                  t.amount < 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


   



  );
};
