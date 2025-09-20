import React, { useState } from 'react';

const WalletApp = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ type: 'income', amount: '', note: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount <= 0) return alert("Enter a valid amount");

    const newTransaction = {
      id: Date.now(),
      type: form.type,
      amount,
      note: form.note,
      date: new Date().toLocaleString()
    };

    setTransactions([newTransaction, ...transactions]);
    setBalance((prev) =>
      form.type === 'income' ? prev + amount : prev - amount
    );
    setForm({ type: 'income', amount: '', note: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Wallet Manager
        </h1>

        <div className="mb-6 text-center">
          <p className="text-gray-600">Current Balance</p>
          <p className={`text-3xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${balance.toFixed(2)}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-4 mb-3">
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
              className="w-2/3 p-2 border rounded"
              required
            />
          </div>
          <input
            name="note"
            type="text"
            placeholder="Note (optional)"
            value={form.note}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Transaction
          </button>
        </form>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Transactions</h2>
          {transactions.length === 0 ? (
            <p className="text-gray-500 text-sm">No transactions yet.</p>
          ) : (
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {transactions.map((txn) => (
                <li
                  key={txn.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      {txn.note || (txn.type === 'income' ? 'Income' : 'Expense')}
                    </p>
                    <p className="text-xs text-gray-500">{txn.date}</p>
                  </div>
                  <span className={`text-sm font-bold ${txn.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                    {txn.type === 'income' ? '+' : '-'}${txn.amount.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletApp;
