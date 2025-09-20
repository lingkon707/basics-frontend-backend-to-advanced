import Image from 'next/image';

export default function Home() {
  const content = {
    overview: {
      revenue: "$8,427.00",
      saving: "$8,427.00",
      taxes: "$8,427.00",
      totalBalance: "$16,783.00",
      totalBalanceChange: "+10.15% from last period",
      graph: [
        { month: "Jan", amount: 500 },
        { month: "Feb", amount: 600 },
        { month: "Mar", amount: 550 },
        { month: "Apr", amount: 700 },
        { month: "May", amount: 450 },
        { month: "Jun", amount: 750 },
        { month: "Jul", amount: 400 },
        { month: "Aug", amount: 550 },
        { month: "Sep", amount: 650 },
        { month: "Oct", amount: 400 },
        { month: "Nov", amount: 350 },
        { month: "Dec", amount: 450 },
      ],
    },
    spendingLimits: {
      total: "$8,427.00",
      categories: [
        { category: "Part-time", limit: "$6,412.00", color: "bg-blue-500" },
        { category: "Paycheck", limit: "$1,232.00", color: "bg-red-500" },
        { category: "Gift", limit: "$783.00", color: "bg-green-500" },
      ],
    },
    transactions: [
      { name: "Abdul Kadir", amount: "$1200", date: "Dec 9, 10:22 PM", bank: "+$234" },
      { name: "Tatiana", amount: "$524", date: "Jun 22, 10:22 PM", bank: "+$50" },
    ],
    bills: [
      { name: "Figma Seat Plan", date: "Jun 12, 2024", amount: "$11.99" },
      { name: "Netflix Subscription", date: "Jun 26, 2024", amount: "$17.99" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Menu */}
      <div className="bg-white w-64 p-6 fixed h-full shadow-lg">
        <div className="text-2xl font-bold mb-8">Money+</div>
        <div className="space-y-4">
          <a href="#" className="text-lg text-gray-700 hover:text-purple-600">Overview</a>
          <a href="#" className="text-lg text-gray-700 hover:text-purple-600">Transactions</a>
          <a href="#" className="text-lg text-gray-700 hover:text-purple-600">Card</a>
          <a href="#" className="text-lg text-gray-700 hover:text-purple-600">Analytics</a>
          <a href="#" className="text-lg text-gray-700 hover:text-purple-600">History</a>
          <a href="#" className="text-lg text-gray-700 hover:text-purple-600">Settings</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Overview Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Overview</h2>
            <div className="text-gray-500">This Month</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">Total Revenue</h3>
              <p className="text-2xl font-bold text-purple-600">{content.overview.revenue}</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">Total Saving</h3>
              <p className="text-2xl font-bold text-green-600">{content.overview.saving}</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">Taxes to Be Paid</h3>
              <p className="text-2xl font-bold text-yellow-600">{content.overview.taxes}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Total Balance</h3>
            <div className="flex items-center justify-between mb-4">
              <p className="text-4xl font-bold text-blue-600">{content.overview.totalBalance}</p>
              <p className="text-sm text-green-600">{content.overview.totalBalanceChange}</p>
            </div>
            <div className="h-60 bg-gray-100 rounded-lg p-4">
              {/* Graph Placeholder */}
              <div className="flex justify-between mb-4">
                {content.overview.graph.map((data, index) => (
                  <div key={index} className="w-1/12 bg-blue-400" style={{ height: `${data.amount / 10}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spending Limits Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <h2 className="text-3xl font-bold mb-8">Spending Limits</h2>
          <div className="space-y-4">
            {content.spendingLimits.categories.map((category, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <div className="text-lg font-semibold">{category.category}</div>
                <div className="w-1/2 bg-gray-300 rounded-full h-2">
                  <div className={`${category.color} h-2 rounded-full`} style={{ width: `${(parseFloat(category.limit.replace(/[^0-9.-]+/g, "")) / parseFloat(content.spendingLimits.total.replace(/[^0-9.-]+/g, ""))) * 100}%` }}></div>
                </div>
                <div className="text-xl font-bold">{category.limit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Transactions Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <h2 className="text-3xl font-bold mb-8">Recent Transactions</h2>
          <div className="space-y-4">
            {content.transactions.map((transaction, index) => (
              <div key={index} className="flex justify-between p-4 border-b border-gray-200">
                <div>
                  <div className="font-semibold">{transaction.name}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </div>
                <div className="text-lg font-bold">{transaction.amount}</div>
                <div className="text-sm text-gray-500">{transaction.bank}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Bills Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <h2 className="text-3xl font-bold mb-8">Upcoming Bills & Payments</h2>
          <div className="space-y-4">
            {content.bills.map((bill, index) => (
              <div key={index} className="flex justify-between p-4 border-b border-gray-200">
                <div>
                  <div className="font-semibold">{bill.name}</div>
                  <div className="text-sm text-gray-500">{bill.date}</div>
                </div>
                <div className="text-xl font-bold">${bill.amount}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
