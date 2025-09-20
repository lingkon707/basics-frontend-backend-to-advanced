import React, { useState } from "react";

const avatarUrl = "https://avatars.githubusercontent.com/u/111384782?v=4";

const transactionsData = [
  {
    id: 1,
    type: "cashout",
    title: "ক্যাশ আউট",
    name: "Ashar Alo",
    store: "Store_01311643854",
    trxId: "CH1968BUZT",
    amount: -200,
    time: "06:27pm",
    date: "01/08/25",
    amountColor: "text-red-600",
  },
  {
    id: 2,
    type: "received",
    title: "রিসিভড মানি",
    phone: "01724898478",
    trxId: "CH17610MM7",
    amount: 200,
    time: "02:23pm",
    date: "01/08/25",
    amountColor: "text-teal-700",
  },
  {
    id: 3,
    type: "payment",
    title: "পেমেন্ট",
    name: "Bangladesh Railway",
    trxId: "CEI98IJFNB",
    amount: -705,
    time: "09:52pm",
    date: "18/05/25",
    amountColor: "text-red-600",
  },
  {
    id: 4,
    type: "cashin",
    title: "ক্যাশ ইন",
    phone: "01715848999",
    trxId: "CEI48EUVQU",
    amount: 710,
    time: "08:08pm",
    date: "18/05/25",
    amountColor: "text-teal-700",
  },
];

export default function BkashApp() {
  const [activeTab, setActiveTab] = useState("transactions");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactionsData.filter((trx) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      trx.title.includes(searchTerm) ||
      (trx.name && trx.name.toLowerCase().includes(searchLower)) ||
      (trx.phone && trx.phone.includes(searchTerm)) ||
      trx.trxId.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-white w-full max-w-screen-lg mx-auto border border-gray-300 rounded-lg shadow-lg">
      {/* Header */}
      <header className="bg-pink-600 text-white text-center py-4 text-xl font-bold tracking-wide">
        ইনবক্স
      </header>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("transactions")}
          className={`flex-1 py-3 text-center font-semibold ${
            activeTab === "transactions"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-400"
          }`}
        >
          লেনদেনসমূহ
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`flex-1 py-3 text-center font-semibold ${
            activeTab === "notifications"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-400"
          }`}
        >
          নোটিফিকেশন
        </button>
      </div>

      {/* Search & Filter */}
      {activeTab === "transactions" && (
        <div className="flex items-center p-4 space-x-3">
          <input
            type="text"
            placeholder="TrxID বা নাম্বার দিয়ে খুঁজুন"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow border border-gray-300 rounded-full py-2 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-600 text-white rounded-full px-4 py-2 font-semibold flex items-center space-x-2 hover:bg-pink-700 transition">
            <img
              src={avatarUrl}
              alt="filter"
              className="w-5 h-5 rounded-full"
            />
            <span>ফিল্টার</span>
          </button>
        </div>
      )}

      {/* Content */}
      <div className="p-4 max-h-[calc(100vh-240px)] overflow-y-auto">
        {activeTab === "transactions" ? (
          <>
            <p className="mb-3 text-gray-600 text-sm">
              গত ৯০ দিনের লেনদেন
            </p>

            <ul>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((trx) => (
                  <li
                    key={trx.id}
                    className="flex items-center justify-between border-b border-gray-100 py-3"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={avatarUrl}
                          alt="icon"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">
                          {trx.title}
                        </p>
                        {trx.name && (
                          <p className="font-semibold text-gray-700">
                            {trx.name}
                          </p>
                        )}
                        {trx.store && (
                          <p className="text-gray-600 text-sm">{trx.store}</p>
                        )}
                        {trx.phone && (
                          <p className="text-gray-700 font-semibold">{trx.phone}</p>
                        )}
                        <p className="text-gray-400 text-xs">
                          TrxID : {trx.trxId}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold text-lg ${trx.amountColor}`}
                      >
                        {trx.amount > 0 ? "+" : ""}
                        ৳{Math.abs(trx.amount).toFixed(2)}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {trx.time} {trx.date}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-400 py-6">
                  No transactions found.
                </p>
              )}
            </ul>
          </>
        ) : (
          <div className="text-center py-10 text-gray-400">No notifications yet.</div>
        )}
      </div>

      {/* Footer Nav */}
      <nav className="flex justify-around border-t border-gray-200 bg-white py-3">
        <button className="flex flex-col items-center text-gray-400 hover:text-pink-600 transition">
          <img src={avatarUrl} alt="home" className="w-6 h-6 mb-1 rounded-full" />
          হোম
        </button>

        <button className="flex flex-col items-center text-gray-400 hover:text-pink-600 transition">
          <img src={avatarUrl} alt="qr scan" className="w-6 h-6 mb-1 rounded-full" />
          QR স্ক্যান
        </button>

        <button className="flex flex-col items-center text-gray-400 hover:text-pink-600 transition">
          <img src={avatarUrl} alt="search" className="w-6 h-6 mb-1 rounded-full" />
          সার্চ
        </button>

        <button className="flex flex-col items-center text-pink-600 font-semibold">
          <img src={avatarUrl} alt="inbox" className="w-6 h-6 mb-1 rounded-full" />
          ইনবক্স
        </button>
      </nav>
    </div>
  );
}
