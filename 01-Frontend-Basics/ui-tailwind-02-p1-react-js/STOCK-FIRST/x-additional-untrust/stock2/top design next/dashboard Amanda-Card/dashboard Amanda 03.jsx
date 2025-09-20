import content from './Data';
import {
  HomeIcon,
  CreditCardIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'; // Add this line if using Heroicons

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col justify-between">
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">{content.header.greeting}</h2>
          </div>
          <nav>
            <ul className="space-y-4">
              <SidebarItem icon={<HomeIcon className="w-5 h-5" />} label="Overview" />
              <SidebarItem icon={<CreditCardIcon className="w-5 h-5" />} label="Card" />
              <SidebarItem icon={<ChartBarIcon className="w-5 h-5" />} label="Statistics" />
              <SidebarItem icon={<CurrencyDollarIcon className="w-5 h-5" />} label="Savings" />
              <SidebarItem icon={<QuestionMarkCircleIcon className="w-5 h-5" />} label="Help & Support" />
              <SidebarItem icon={<Cog6ToothIcon className="w-5 h-5" />} label="Settings" />
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-10 overflow-y-auto">
        
        {/* Card Section */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">My Card</h3>
              <p className="text-gray-600 mt-1">{content.header.cardNumber}</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">{content.header.balance}</p>
            </div>
            <div className="space-x-3">
              <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg shadow">
                Transfers
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg shadow">
                Pay Bill
              </button>
            </div>
          </div>
        </Card>

        {/* Monthly Overview */}
        <Card title="Monthly Overview">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
            {/* Replace with chart */}
            Monthly Graph Placeholder
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card title="Recent Transactions">
          <ul className="divide-y divide-gray-200">
            {content.transactions.map((transaction, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{transaction.title}</span>
                <span className="font-medium">{transaction.amount}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Total Spend */}
        <Card title="Total Spend">
          <ul className="divide-y divide-gray-200">
            {content.totalSpend.map((spend, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{spend.category}</span>
                <span className="font-medium">{spend.amount}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* My Savings */}
        <Card title="My Savings">
          <ul className="divide-y divide-gray-200">
            {content.savings.map((saving, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{saving.title}</span>
                <span className="font-medium">{`${saving.current} / ${saving.goal}`}</span>
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
}

// Reusable Sidebar Item Component
function SidebarItem({ icon, label }) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition font-medium"
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
}

// Reusable Card Wrapper
function Card({ title, children }) {
  return (
    <section className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg">
      {title && <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>}
      {children}
    </section>
  );
}
