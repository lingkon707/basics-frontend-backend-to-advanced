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

     <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-md flex justify-between items-center max-w-5xl mx-auto my-6">
      <div>
        <h2 className="text-xl font-semibold">Total Balance</h2>
        <p className="text-3xl font-bold">${userBalance.balance}</p>
      </div>
      <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-medium shadow hover:bg-blue-100 transition">
        View Statement
      </button>
    </div>


   



  );
};
