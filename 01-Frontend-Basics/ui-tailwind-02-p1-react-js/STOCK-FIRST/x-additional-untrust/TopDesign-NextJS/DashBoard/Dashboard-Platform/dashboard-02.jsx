import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <div className="flex min-h-screen max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 flex flex-col justify-between">
          <div>
            <div className="px-6 py-8 flex items-center space-x-2 border-b border-gray-200">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-lg">
                Z
              </div>
              <h1 className="text-xl font-semibold tracking-tight">Platform</h1>
            </div>

            <nav className="mt-8 space-y-1 px-6 text-gray-600 text-sm font-medium">
              <a
                href="#"
                className="flex items-center gap-3 py-3 px-4 rounded-lg bg-indigo-50 text-indigo-700 font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
                Workspace
              </a>
              <div className="space-y-1">
                <p className="uppercase text-xs font-semibold text-gray-400 px-4 mt-8 mb-2">
                  Risk Management
                </p>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Compliance
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Initiatives Management
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Governance
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Audit Management
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Issues and Exceptions
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  User’s Management
                </a>
              </div>
              <a
                href="#"
                className="mt-8 flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="8" />
                </svg>
                Settings
              </a>
              <a
                href="#"
                className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17v-6h13" />
                  <path d="M12 3l7 7-7 7" />
                </svg>
                Consultancy
              </a>
            </nav>
          </div>

          {/* User profile & theme toggle */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/32.jpg"
                alt="Mark Bennet"
                width={36}
                height={36}
                className="rounded-full"
              />
              <p className="text-sm font-semibold">Mark Bennet</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-full hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m8.66-8.66h-1M4 12H3m15.66 5.66l-.7-.7M4.34 4.34l-.7-.7M21 12h-1M4 12H3m15.66 5.66l-.7-.7M4.34 19.66l-.7-.7"
                  />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </button>
              <button
                aria-label="Toggle Light Mode"
                className="p-2 rounded-full hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-8 overflow-y-auto rounded-r-lg">
          <header className="mb-6">
            <nav className="text-sm text-gray-500 space-x-2">
              <a href="#" className="hover:underline">
                Homepage
              </a>
              <span>/</span>
              <a href="#" className="hover:underline">
                Risk Management
              </a>
              <span>/</span>
              <a href="#" className="hover:underline">
                Risk Register
              </a>
              <span>/</span>
              <span className="font-semibold text-gray-900">Details</span>
            </nav>

            <h2 className="mt-3 text-2xl font-semibold text-gray-900 leading-tight">
              R-143: Vendors Data Leak Due To Human Error
            </h2>
          </header>

          {/* Risk Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xs font-semibold text-indigo-700 mb-2">
                Threat
              </h3>
              <p className="font-semibold text-indigo-900">
                Supplier Data Encryption Attack
              </p>
              <p className="mt-2 text-xs text-indigo-600">Priority</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-300 rounded-full text-indigo-900 text-xs font-semibold">
                2
              </span>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg shadow-sm text-white">
              <h3 className="text-xs font-semibold mb-2">Vulnerability</h3>
              <p className="font-semibold">
                Vendors Data Encryption Attack
              </p>
              <p className="mt-2 text-xs opacity-70">Priority</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-gray-700 rounded-full text-white text-xs font-semibold">
                5
              </span>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xs font-semibold text-pink-700 mb-2">Asset</h3>
              <p className="font-semibold text-pink-900">Data Center Servers</p>
              <p className="mt-2 text-xs text-pink-600">Priority</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-pink-300 rounded-full text-pink-900 text-xs font-semibold">
                4
              </span>
            </div>
          </section>

          {/* Assessments Table */}
          <section className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Assessments</h3>
              <div className="space-x-2">
                <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-200 transition">
                  Map Assessment
                </button>
                <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  New Assessment
                </button>
              </div>
            </div>

            <table className="w-full text-left text-sm text-gray-700">
              <thead className="border-b border-gray-300">
                <tr>
                  <th className="py-3">#</th>
                  <th className="py-3">Assessor</th>
                  <th className="py-3">State</th>
                  <th className="py-3">Due Date</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Linked Initiatives</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 font-mono text-xs text-gray-500">RA-1617</td>
                  <td className="py-3 flex items-center gap-3 font-semibold">
                    <Image
                      src="/32.jpg"
                      alt="Alex Johnson"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    Alex Johnson
                  </td>
                  <td className="py-3">
                    <span className="text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full text-xs font-semibold">
                      Treatment
                    </span>
                  </td>
                  <td className="py-3 font-mono">Nov 23, 2025</td>
                  <td className="py-3 text-indigo-600 font-semibold">In progress</td>
                  <td className="py-3">Third Risk Audit</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 font-mono text-xs text-gray-500">LP-1459</td>
                  <td className="py-3 flex items-center gap-3 font-semibold">
                    <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold">
                      CB
                    </div>
                    Casey Brown
                  </td>
                  <td className="py-3">
                    <span className="text-pink-600 bg-pink-100 px-2 py-1 rounded-full text-xs font-semibold">
                      Transfer
                    </span>
                  </td>
                  <td className="py-3 font-mono">Oct 18, 2025</td>
                  <td className="py-3 text-indigo-600 font-semibold">In progress</td>
                  <td className="py-3">Cloud Review</td>
                </tr>

                <tr>
                  <td className="py-3 font-mono text-xs text-gray-500">BV-1278</td>
                  <td className="py-3 flex items-center gap-3 font-semibold">
                    <Image
                      src="/32.jpg"
                      alt="Anna Lee"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    Anna Lee
                  </td>
                  <td className="py-3">
                    <span className="text-pink-600 bg-pink-100 px-2 py-1 rounded-full text-xs font-semibold">
                      Monitoring
                    </span>
                  </td>
                  <td className="py-3 font-mono">Sep 14, 2024</td>
                  <td className="py-3 text-pink-600 font-semibold">Completed</td>
                  <td className="py-3">Security Program</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
