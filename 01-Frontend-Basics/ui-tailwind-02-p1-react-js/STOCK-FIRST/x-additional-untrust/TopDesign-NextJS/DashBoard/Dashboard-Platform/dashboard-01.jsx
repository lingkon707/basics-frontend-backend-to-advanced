// pages/dashboard.js
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl max-w-7xl w-full p-8 space-y-8 shadow-xl">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <div className="bg-black rounded-md p-2">
              {/* Logo placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-3-3v6m-6 0a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            </div>
            <h1 className="font-bold text-xl select-none">Platform</h1>
          </div>

          <nav className="text-sm text-gray-600 select-none space-x-2">
            <span className="hover:underline cursor-pointer">Homepage</span>
            <span>/</span>
            <span className="hover:underline cursor-pointer">Risk Management</span>
            <span>/</span>
            <span className="hover:underline cursor-pointer">Risk Register</span>
            <span>/</span>
            <span className="font-semibold text-black cursor-default">Details</span>
          </nav>
        </header>

        {/* Main content */}
        <main>
          <h2 className="font-semibold text-lg select-none mb-8">
            R-143: Vendors Data Leak Due To Human Error
          </h2>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Left section */}
            <section className="flex-1 space-y-6">
              {/* Risk Timeline placeholder (removed graph) */}
              <div className="bg-gray-100 rounded-lg p-6 select-none">
                <h3 className="font-semibold mb-4">Risk Timeline</h3>
                <div className="flex space-x-4 text-xs text-gray-500 mb-2">
                  <button className="bg-black text-white rounded-full px-3 py-1">30 Days</button>
                  <button className="hover:bg-black hover:text-white rounded-full px-3 py-1">
                    12 Months
                  </button>
                  <button className="hover:bg-black hover:text-white rounded-full px-3 py-1">
                    1 Week
                  </button>
                </div>
                {/* Placeholder box for graph */}
                <div className="h-48 bg-white rounded-md border border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                  Graph placeholder (excluded)
                </div>
              </div>

              {/* Assessments Table */}
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold select-none">Assessments</h3>
                  <div className="space-x-3">
                    <button className="bg-black text-white text-xs rounded-full px-4 py-1 select-none">
                      Map Assessment
                    </button>
                    <button className="text-black text-xs rounded-full px-4 py-1 border border-black select-none">
                      New Assessment
                    </button>
                  </div>
                </div>
                <table className="w-full table-fixed text-left text-sm select-none">
                  <thead>
                    <tr className="text-gray-600">
                      <th className="w-16 py-2">#</th>
                      <th className="w-32">Assessor</th>
                      <th className="w-24">State</th>
                      <th className="w-28">Due Date</th>
                      <th className="w-28">Status</th>
                      <th>Linked Initiatives</th>
                      <th className="w-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-3 text-xs text-gray-500">RA-1617</td>
                      <td className="flex items-center space-x-3 font-semibold">
                        <Image
                          src="/32.jpg"
                          alt="Alex Johnson"
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <span>Alex Johnson</span>
                      </td>
                      <td>
                        <span className="bg-indigo-200 text-indigo-800 text-xs rounded-full px-3 py-1 select-none">
                          Treatment
                        </span>
                      </td>
                      <td className="font-semibold">Nov 23, 2025</td>
                      <td className="text-indigo-600">• In progress</td>
                      <td>Third Risk Audit</td>
                      <td className="text-gray-400 cursor-pointer select-none">⋮</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-3 text-xs text-gray-500">LP-1459</td>
                      <td className="flex items-center space-x-3 font-semibold">
                        <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700">
                          CB
                        </div>
                        <span>Casey Brown</span>
                      </td>
                      <td>
                        <span className="bg-pink-300 text-pink-800 text-xs rounded-full px-3 py-1 select-none">
                          Transfer
                        </span>
                      </td>
                      <td className="font-semibold">Oct 18, 2025</td>
                      <td className="text-indigo-600">• In progress</td>
                      <td>Cloud Review</td>
                      <td className="text-gray-400 cursor-pointer select-none">⋮</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-xs text-gray-500">BV-1278</td>
                      <td className="flex items-center space-x-3 font-semibold">
                        <Image
                          src="/32.jpg"
                          alt="Anna Lee"
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <span>Anna Lee</span>
                      </td>
                      <td>
                        <span className="bg-purple-200 text-purple-800 text-xs rounded-full px-3 py-1 select-none">
                          Monitoring
                        </span>
                      </td>
                      <td className="font-semibold">Sep 14, 2024</td>
                      <td className="text-pink-500">• Completed</td>
                      <td>Security Program</td>
                      <td className="text-gray-400 cursor-pointer select-none">⋮</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Right section */}
            <aside className="w-80 flex flex-col space-y-6 select-none">
              {/* Threat */}
              <div className="bg-purple-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-700">Threat</p>
                <h4 className="font-semibold text-sm my-1">Supplier Data Encryption Attack</h4>
                <p className="text-xs text-gray-500">
                  Priority{' '}
                  <span className="bg-gray-300 rounded-full px-2 py-0.5 text-xs font-semibold">
                    2
                  </span>
                </p>
              </div>

              {/* Vulnerability */}
              <div className="bg-black rounded-xl p-4 text-white">
                <p className="text-xs font-semibold">Vulnerability</p>
                <h4 className="font-semibold text-sm my-1">Vendors Data Encryption Attack</h4>
                <p className="text-xs">
                  Priority{' '}
                  <span className="bg-gray-700 rounded-full px-2 py-0.5 text-xs font-semibold">
                    5
                  </span>
                </p>
              </div>

              {/* Asset */}
              <div className="bg-pink-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-700">Asset</p>
                <h4 className="font-semibold text-sm my-1">Data Center Servers</h4>
                <p className="text-xs text-gray-500">
                  Priority{' '}
                  <span className="bg-pink-300 rounded-full px-2 py-0.5 text-xs font-semibold">
                    4
                  </span>
                </p>
              </div>
            </aside>
          </div>
        </main>

        {/* Sidebar left and bottom toggles (simulate fixed sidebar) */}
        <aside className="hidden md:flex fixed left-0 top-0 h-full w-60 bg-white flex-col px-4 py-6 space-y-4 rounded-tr-3xl rounded-br-3xl shadow-lg">
          <nav className="flex flex-col space-y-4 text-gray-700 text-sm select-none">
            <button className="flex items-center space-x-2 font-semibold bg-black text-white rounded-lg px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <span>Home</span>
            </button>

            <button className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v8a2 2 0 002 2h4m8-12h-4a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2z"
                />
              </svg>
              <span>Workspace</span>
            </button>

            <div className="pl-5 space-y-1 text-gray-600">
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Risk Management</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Compliance</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="pl-4 space-y-1">
                <button className="w-full text-xs hover:underline">Regulatory Requirements</button>
                <button className="w-full text-xs hover:underline">Controls & Assessments</button>
              </div>

              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Initiatives Management</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Governance</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Audit Management</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Issues and Exceptions</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>User's Management</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Settings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 rounded-lg px-3 py-1 hover:bg-gray-100 w-full">
                <span>Consultancy</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Bottom user and toggle */}
          <div className="mt-auto flex items-center justify-between px-2 py-4 border-t border-gray-300">
            <div className="flex items-center space-x-3">
              <Image
                src="/32.jpg"
                alt="Mark Bennet"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-semibold">Mark Bennet</span>
            </div>

            <button
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.66-11.66l-.7.7M4.34 4.34l-.7.7M21 12h-1M4 12H3m15.66 5.66l-.7-.7M4.34 19.66l-.7-.7"
                />
                <circle cx="12" cy="12" r="5" />
              </svg>
            </button>
            <button
              aria-label="Toggle Light Mode"
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
        </aside>
      </div>
    </div>
  );
}
