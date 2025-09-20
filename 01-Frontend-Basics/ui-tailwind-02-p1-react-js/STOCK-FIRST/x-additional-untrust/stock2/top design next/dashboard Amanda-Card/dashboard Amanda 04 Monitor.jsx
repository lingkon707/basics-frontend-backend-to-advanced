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
    <div className="min-h-screen flex bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">

      {/* Sidebar */}
      <aside className="w-72 bg-[#13131a] border-r border-[#2e2e3a] p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10">
            {content.header.greeting}
          </h2>
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
      <main className="flex-1 p-10 space-y-10 bg-opacity-10 backdrop-blur-sm">
        
        {/* Card Section */}
        <NeonCard>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-semibold text-pink-400">My Card</h3>
              <p className="text-sm text-gray-400 mt-1">{content.header.cardNumber}</p>
              <p className="text-4xl font-bold mt-2 text-cyan-300">{content.header.balance}</p>
            </div>
            <div className="flex gap-4">
              <NeonButton label="Transfers" color="from-green-400 to-blue-500" />
              <NeonButton label="Pay Bill" color="from-pink-500 to-red-500" />
            </div>
          </div>
        </NeonCard>

        {/* Monthly Overview */}
        <NeonCard title="🌈 Monthly Overview">
          <div className="h-48 bg-gradient-to-r from-[#ff00cc] to-[#333399] rounded-xl flex items-center justify-center text-gray-300">
            Graph Placeholder
          </div>
        </NeonCard>

        {/* Recent Transactions */}
        <NeonCard title="🧾 Recent Transactions">
          <ul className="divide-y divide-gray-700">
            {content.transactions.map((tx, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{tx.title}</span>
                <span className="text-green-300 font-semibold">{tx.amount}</span>
              </li>
            ))}
          </ul>
        </NeonCard>

        {/* Total Spend */}
        <NeonCard title="🔥 Total Spend">
          <ul className="divide-y divide-gray-700">
            {content.totalSpend.map((spend, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{spend.category}</span>
                <span className="text-red-400 font-semibold">{spend.amount}</span>
              </li>
            ))}
          </ul>
        </NeonCard>

        {/* My Savings */}
        <NeonCard title="💰 My Savings">
          <ul className="divide-y divide-gray-700">
            {content.savings.map((saving, idx) => (
              <li key={idx} className="flex justify-between py-3">
                <span>{saving.title}</span>
                <span className="text-purple-300 font-semibold">
                  {saving.current} / {saving.goal}
                </span>
              </li>
            ))}
          </ul>
        </NeonCard>
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
        className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-all ${
          active
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-lg'
            : 'hover:bg-[#232334] text-gray-300'
        }`}
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
}

// Neon-style Card Component
function NeonCard({ title, children }) {
  return (
    <section className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-6 shadow-[0_0_30px_rgba(173,0,255,0.15)]">
      {title && <h3 className="text-xl font-bold text-white mb-4">{title}</h3>}
      {children}
    </section>
  );
}

// Neon Button Component
function NeonButton({ label, color }) {
  return (
    <button
      className={`bg-gradient-to-r ${color} hover:scale-105 transform transition px-5 py-2 rounded-full shadow-lg text-sm font-bold text-white`}
    >
      {label}
    </button>
  );
}
