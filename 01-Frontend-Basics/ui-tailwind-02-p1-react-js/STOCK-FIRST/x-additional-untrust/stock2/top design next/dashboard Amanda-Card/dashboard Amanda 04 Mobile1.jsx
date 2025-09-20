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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans px-4 py-6">

      {/* Top Navigation (Mobile Only) */}
      <nav className="w-full flex justify-between items-center mb-6">
        <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {content.header.greeting}
        </h1>
        <div className="flex gap-4">
          <NavIcon icon={<HomeIcon className="w-5 h-5" />} />
          <NavIcon icon={<CreditCardIcon className="w-5 h-5" />} />
          <NavIcon icon={<ChartBarIcon className="w-5 h-5" />} />
          <NavIcon icon={<CurrencyDollarIcon className="w-5 h-5" />} />
          <NavIcon icon={<Cog6ToothIcon className="w-5 h-5" />} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="space-y-6 max-w-sm mx-auto">

        {/* Balance Card */}
        <NeonCard>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-semibold text-pink-400">My Card</h3>
              <p className="text-xs text-gray-300">{content.header.cardNumber}</p>
              <p className="text-2xl font-bold text-cyan-300 mt-1">{content.header.balance}</p>
            </div>
            <div className="flex justify-between gap-2">
              <NeonButton label="Transfer" color="from-green-400 to-blue-500" />
              <NeonButton label="Pay Bill" color="from-pink-500 to-red-500" />
            </div>
          </div>
        </NeonCard>

        {/* Monthly Overview */}
        <NeonCard title="📊 Monthly Overview">
          <div className="h-40 bg-gradient-to-r from-[#ff00cc] to-[#333399] rounded-xl flex items-center justify-center text-sm text-gray-200">
            Graph Placeholder
          </div>
        </NeonCard>

        {/* Recent Transactions */}
        <NeonCard title="🧾 Recent Transactions">
          <ul className="divide-y divide-gray-700 text-sm">
            {content.transactions.map((tx, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>{tx.title}</span>
                <span className="text-green-300 font-medium">{tx.amount}</span>
              </li>
            ))}
          </ul>
        </NeonCard>

        {/* Total Spend */}
        <NeonCard title="🔥 Total Spend">
          <ul className="divide-y divide-gray-700 text-sm">
            {content.totalSpend.map((spend, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>{spend.category}</span>
                <span className="text-red-400 font-semibold">{spend.amount}</span>
              </li>
            ))}
          </ul>
        </NeonCard>

        {/* My Savings */}
        <NeonCard title="💰 My Savings">
          <ul className="divide-y divide-gray-700 text-sm">
            {content.savings.map((saving, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>{saving.title}</span>
                <span className="text-purple-300 font-medium">
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

// Top nav icons (mobile only)
function NavIcon({ icon }) {
  return (
    <button className="p-2 rounded-full bg-[#1a1a2e] hover:bg-[#2a2a40] transition">
      {icon}
    </button>
  );
}

// Neon Card Component (mobile-optimized)
function NeonCard({ title, children }) {
  return (
    <section className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl p-4 shadow-[0_0_25px_rgba(173,0,255,0.1)]">
      {title && <h3 className="text-lg font-bold mb-3">{title}</h3>}
      {children}
    </section>
  );
}

// Neon Button (mobile)
function NeonButton({ label, color }) {
  return (
    <button
      className={`w-full bg-gradient-to-r ${color} text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-md hover:scale-105 transition`}
    >
      {label}
    </button>
  );
}
