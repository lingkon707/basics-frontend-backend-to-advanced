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

export default function Balance ( ) {

     const [open, setOpen] = useState(false); 

  return (



      <div className="text-center my-10">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium shadow hover:bg-blue-700"
      >
        Check Balance
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Balance</h2>
            <p className="text-3xl text-green-600 font-bold mb-6">
              ${userBalance.balance}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

    

   



  );
};
