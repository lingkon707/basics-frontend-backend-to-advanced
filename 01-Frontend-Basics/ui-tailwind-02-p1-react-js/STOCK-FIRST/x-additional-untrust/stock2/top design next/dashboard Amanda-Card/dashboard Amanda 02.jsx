import content from './Data';
import {
  HomeIcon,
  CreditCardIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#1f2937] to-[#111827] text-white font-sans">

      {/* Sidebar */}
      <aside className="w-72 bg-[#1c1f2b] border-r border-gray-700 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-10">{content.header.greeting}</h2>
          <ul className="space-y-4">
            <SidebarItem icon={<HomeIcon className="w-5 h-5" />} label="Overview" active />
            <SidebarItem icon={<CreditCardIcon className="w-5 h-5" />} label="Card" />
            <SidebarItem icon={<ChartBarIcon className="w-5 h-5" />} label="Statistics" />
            <SidebarItem icon={<CurrencyDollarIcon className="w-5 h-5" />} label="Savings" />
            <SidebarItem icon={<QuestionMarkCircleIcon className="w-5 h-5" />} label="Help & Support" />
            <SidebarItem icon={<Cog6ToothIcon className="w-5 h-5" />} label="Settings" />
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-10 overflow-y-auto">
        
        {/* Balance Card */}
        <GlassCard>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-semibold">My Card</h3>
              <p className="text-sm text-gray-300 mt-1">{content.header.cardNumber}</p>
              <p className="text-3xl font-bold mt-2 text-blue-400">{content.header.balance}</p>
            </div>
            <div className="flex gap-3">
              <ActionButton label="Transfers" />
              <ActionButton label="Pay Bill" />
            </div>
          </div>
        </GlassCard>

        {/* Monthly Overview */}
        <GlassCard title="📊 Monthly Overview">
          <div className="h-48 bg-gradient-to-tr from-blue-900 to-blue-700 rounded-lg flex items-center justify-center text-gray-300">
            Graph Placeholder
          </div>
        </GlassCard>

        {/* Recent Transactions */}
        <GlassCard title="🧾 Recent Transactions">
          <ul className="divide-y divide-gray-700">
            {content.transactions.map((tx, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{tx.title}</span>
                <span className="text-blue-300 font-medium">{tx.amount}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* Total Spend */}
        <GlassCard title="💸 Total Spend">
          <ul className="divide-y divide-gray-700">
            {content.totalSpend.map((spend, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{spend.category}</span>
                <span className="text-red-300 font-medium">{spend.amount}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* My Savings */}
        <GlassCard title="💰 My Savings">
          <ul className="divide-y divide-gray-700">
            {content.savings.map((saving, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{saving.title}</span>
                <span className="text-green-300 font-medium">
                  {saving.current} / {saving.goal}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </main>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, active = false }) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
          active
            ? 'bg-blue-600 text-white font-semibold'
            : 'hover:bg-blue-500/20 text-gray-300'
        }`}
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
}

// Glass-style Card Component
function GlassCard({ title, children }) {
  return (
    <section className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10">
      {title && <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>}
      {children}
    </section>
  );
}

// Styled Action Button
function ActionButton({ label }) {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-lg shadow transition-all duration-200">
      {label}
    </button>
  );
}
