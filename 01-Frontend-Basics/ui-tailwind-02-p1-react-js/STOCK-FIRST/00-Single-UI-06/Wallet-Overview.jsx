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

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex text-gray-800">
      {/* Left Sidebar */}
      <aside className="w-1/5 bg-white shadow-md p-6 hidden md:block">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2" />
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">My Wallet</p>
        </div>
        <nav className="space-y-4">
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-blue-100">Dashboard</button>
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-blue-100">Transactions</button>
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-blue-100">Settings</button>
        </nav>
      </aside>

      {/* Center: Main Dashboard */}
      <main className="flex-1 p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Wallet Overview</h1>

          {/* Balance */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded bg-green-100">
              <p className="text-sm text-gray-600">Total Income</p>
              <p className="text-xl font-bold text-green-600">${totalIncome.toFixed(2)}</p>
            </div>
            <div className="p-4 rounded bg-red-100">
              <p className="text-sm text-gray-600">Total Expense</p>
              <p className="text-xl font-bold text-red-600">${totalExpense.toFixed(2)}</p>
            </div>
          </div>

          {/* Current Balance */}
          <div className="mb-6 text-center">
            <p className="text-gray-500">Current Balance</p>
            <p className={`text-3xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${balance.toFixed(2)}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-6 grid md:grid-cols-3 gap-4">
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              name="note"
              type="text"
              placeholder="Note"
              value={form.note}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <button
              type="submit"
              className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add Transaction
            </button>
          </form>

          {/* Transactions List */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {transactions.length === 0 && (
                <p className="text-sm text-gray-500">No transactions yet.</p>
              )}
              {transactions.map((txn) => (
                <li
                  key={txn.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">
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
          </div>
        </div>
      </main>

      {/* Right Sidebar: Summary */}
      <aside className="w-1/5 bg-white shadow-md p-6 hidden lg:block">
        <h2 className="text-lg font-bold mb-4">Summary</h2>
        <div className="space-y-4">
          <div className="p-3 bg-green-50 rounded">
            <p className="text-sm text-gray-500">Total Income</p>
            <p className="text-xl text-green-600 font-semibold">${totalIncome.toFixed(2)}</p>
          </div>
          <div className="p-3 bg-red-50 rounded">
            <p className="text-sm text-gray-500">Total Expense</p>
            <p className="text-xl text-red-600 font-semibold">${totalExpense.toFixed(2)}</p>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <p className="text-sm text-gray-500">Net Balance</p>
            <p className="text-xl font-semibold">
              {balance >= 0 ? (
                <span className="text-green-600">${balance.toFixed(2)}</span>
              ) : (
                <span className="text-red-600">-${Math.abs(balance).toFixed(2)}</span>
              )}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default WalletApp;
