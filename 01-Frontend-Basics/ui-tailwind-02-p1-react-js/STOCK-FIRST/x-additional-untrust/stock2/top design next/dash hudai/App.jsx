import content from './Data';

export default function Dashboard() {
  return (
    <div className="bg-gray-100 font-sans flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">{content.header.greeting}</h2>
        </div>
        <nav>
          <ul>
            <li className="mb-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 font-medium">Overview</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 font-medium">Card</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 font-medium">Statistics</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 font-medium">Savings</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 font-medium">Help & Support</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 font-medium">Settings</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Card Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <div className="flex items-center justify-between">
            <div className="text-gray-800">
              <h3 className="text-xl font-semibold">My Card</h3>
              <p className="text-lg">{content.header.cardNumber}</p>
              <p className="text-xl font-bold">{content.header.balance}</p>
            </div>
            <div className="space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Transfers</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Pay Bill</button>
            </div>
          </div>
        </section>

        {/* Monthly Overview */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Overview</h3>
          {/* Placeholder for Graph */}
          <div className="bg-gray-200 h-48 rounded-lg"></div>
        </section>

        {/* Recent Transactions */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
          <ul>
            {content.transactions.map((transaction, idx) => (
              <li key={idx} className="flex justify-between items-center mb-4">
                <span className="text-gray-800">{transaction.title}</span>
                <span className="text-gray-800">{transaction.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Total Spend */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Total Spend</h3>
          <ul>
            {content.totalSpend.map((spend, idx) => (
              <li key={idx} className="flex justify-between items-center mb-4">
                <span className="text-gray-800">{spend.category}</span>
                <span className="text-gray-800">{spend.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* My Savings */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Savings</h3>
          <ul>
            {content.savings.map((saving, idx) => (
              <li key={idx} className="flex justify-between items-center mb-4">
                <span className="text-gray-800">{saving.title}</span>
                <span className="text-gray-800">{`${saving.current} / ${saving.goal}`}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
