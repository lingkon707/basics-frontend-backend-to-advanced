import React, { useState } from "react";

export default function SendTkApp() {
  const [account, setAccount] = useState("");
  const [tk, setTk] = useState("");
  const [balance, setBalance] = useState(500); // initial balance
  const [message, setMessage] = useState("");

  const maskAccount = (acc) => {
    const str = acc.trim();
    if (str.length <= 3) return str;
    return "*".repeat(str.length - 3) + str.slice(-3);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const tkNum = Number(tk);
    if (!account || isNaN(tkNum) || tkNum <= 0) {
      setMessage("Please enter valid account number and Tk.");
      return;
    }
    if (tkNum > balance) {
      setMessage("❌ Insufficient balance.");
      return;
    }
    setBalance((prev) => prev - tkNum);
    setMessage(
      `${maskAccount(account)} received ${tkNum} tk. Your new balance is ${balance - tkNum} tk.`
    );
    setTk("");
    setAccount("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Current Balance: <span className="text-green-600">{balance} tk</span>
        </h1>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Account No.</label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              required
              className="w-full border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter account number"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">Tk</label>
            <input
              type="number"
              value={tk}
              onChange={(e) => setTk(e.target.value)}
              required
              min={1}
              className="w-full border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter amount to send"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Send
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-blue-900 font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
}
