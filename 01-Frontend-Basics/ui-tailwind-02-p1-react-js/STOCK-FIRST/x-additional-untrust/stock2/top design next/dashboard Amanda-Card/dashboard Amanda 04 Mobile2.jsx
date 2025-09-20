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
    <div className="min-h-screen bg-[#f3f4f6] text-gray-800 px-4 py-6 font-sans">

      {/* Top Navigation */}
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-blue-600">{content.header.greeting}</h1>
        <div className="flex gap-3">
          <TopNavIcon icon={<HomeIcon className="w-5 h-5" />} />
          <TopNavIcon icon={<CreditCardIcon className="w-5 h-5" />} />
          <TopNavIcon icon={<ChartBarIcon className="w-5 h-5" />} />
        </div>
      </nav>

      {/* Main Content (mobile layout) */}
      <main className="space-y-6 max-w-sm mx-auto">

        {/* Card Section */}
        <SoftCard>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">My Card</h3>
              <p className="text-sm text-gray-500">{content.header.cardNumber}</p>
              <p className="text-2xl font-bold text-blue-500 mt-1">{content.header.balance}</p>
            </div>
            <div className="flex gap-2">
              <PrimaryButton label="Transfer" />
              <PrimaryButton label="Pay Bill" variant="accent" />
            </div>
          </div>
        </SoftCard>

        {/* Monthly Overview */}
        <SoftCard title="📊 Monthly Overview">
          <div className="h-36 bg-blue-100 text-center text-blue-600 rounded-lg flex items-center justify-center">
            Graph Placeholder
          </div>
        </SoftCard>

        {/* Recent Transactions */}
        <SoftCard title="🧾 Recent Transactions">
          <ul className="divide-y divide-gray-200 text-sm">
            {content.transactions.map((tx, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>{tx.title}</span>
                <span className="font-semibold text-blue-500">{tx.amount}</span>
              </li>
            ))}
          </ul>
        </SoftCard>

        {/* Total Spend */}
        <SoftCard title="🔥 Total Spend">
          <ul className="divide-y divide-gray-200 text-sm">
            {content.totalSpend.map((spend, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>{spend.category}</span>
                <span className="text-red-500 font-semibold">{spend.amount}</span>
              </li>
            ))}
          </ul>
        </SoftCard>

        {/* My Savings */}
        <SoftCard title="💰 My Savings">
          <ul className="divide-y divide-gray-200 text-sm">
            {content.savings.map((saving, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>{saving.title}</span>
                <span className="text-green-500 font-semibold">
                  {saving.current} / {saving.goal}
                </span>
              </li>
            ))}
          </ul>
        </SoftCard>
      </main>
    </div>
  );
}

// Top nav icon button
function TopNavIcon({ icon }) {
  return (
    <button className="p-2 rounded-md bg-white shadow-sm border border-gray-200 hover:bg-gray-100">
      {icon}
    </button>
  );
}

// Soft card with optional title
function SoftCard({ title, children }) {
  return (
    <section className="bg-white p-4 rounded-xl shadow-sm">
      {title && <h3 className="text-base font-semibold text-gray-800 mb-3">{title}</h3>}
      {children}
    </section>
  );
}

// Button with primary or accent variant
function PrimaryButton({ label, variant = 'primary' }) {
  const colors =
    variant === 'accent'
      ? 'bg-cyan-500 hover:bg-cyan-600'
      : 'bg-blue-500 hover:bg-blue-600';
  return (
    <button
      className={`flex-1 ${colors} text-white text-sm font-medium py-2 rounded-lg transition`}
    >
      {label}
    </button>
  );
}
