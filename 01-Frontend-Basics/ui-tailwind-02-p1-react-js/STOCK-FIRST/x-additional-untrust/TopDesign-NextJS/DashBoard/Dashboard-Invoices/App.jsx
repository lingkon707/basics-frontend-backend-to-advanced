import Image from "next/image";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-[1200px] bg-white rounded-lg shadow-md flex">
        {/* Left Panel */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Erin Dokidis"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gray-900 font-semibold">Erin Dokidis</p>
              <p className="text-gray-500 text-sm">We hope all is well and you have a great day.</p>
            </div>
          </div>

          {/* Invoices Summary */}
          <h2 className="text-2xl font-semibold mb-2">Invoices</h2>
          <p className="text-gray-600 mb-6">Discover all customers from many marketplace</p>
          <div className="flex space-x-6 mb-6">
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col justify-center">
              <div className="text-gray-500 text-sm flex justify-between items-center mb-3">
                <span>Created Invoice</span>
                <span className="text-green-600 text-sm font-medium">+1.32%</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">128</p>
            </div>
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col justify-center">
              <div className="text-gray-500 text-sm mb-3 flex items-center space-x-1">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8v4l3 3"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>Pending Payment</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">$89,582<span className="text-gray-400 text-xl">.00</span></p>
            </div>
          </div>

          {/* Search */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* Invoice List */}
          <div className="overflow-auto max-h-[380px]">
            <table className="w-full text-left text-gray-700 border-separate border-spacing-y-3">
              <thead className="sr-only">
                <tr>
                  <th>Client</th>
                  <th>Invoice ID</th>
                  <th>Issued</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="bg-gray-100 rounded-lg shadow-sm">
                  <td className="flex items-center space-x-3 p-3">
                    <input type="checkbox" className="form-checkbox" />
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src="/jerome.jpg"
                        alt="Jerome Bell"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jerome Bell</p>
                      <p className="text-xs text-gray-500">bell@gmail.com</p>
                    </div>
                  </td>
                  <td className="font-semibold p-3">INV-295</td>
                  <td className="p-3 text-gray-500">01/19/2025</td>
                </tr>

                {/* Row 2 */}
                <tr className="bg-gray-100 rounded-lg shadow-sm">
                  <td className="flex items-center space-x-3 p-3">
                    <input type="checkbox" className="form-checkbox" />
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                      AF
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Albert Flores</p>
                      <p className="text-xs text-gray-500">flores@gmail.com</p>
                    </div>
                  </td>
                  <td className="font-semibold p-3">INV-294</td>
                  <td className="p-3 text-gray-500">01/17/2025</td>
                </tr>

                {/* Row 3 */}
                <tr className="bg-gray-100 rounded-lg shadow-sm">
                  <td className="flex items-center space-x-3 p-3">
                    <input type="checkbox" className="form-checkbox" />
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src="/devon.jpg"
                        alt="Devon Lane"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Devon Lane</p>
                      <p className="text-xs text-gray-500">lane@gmail.com</p>
                    </div>
                  </td>
                  <td className="font-semibold p-3">INV-293</td>
                  <td className="p-3 text-gray-500">01/17/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel: Invoice Detail */}
        <div className="w-[400px] bg-white border-l border-gray-300 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Invoice Detail</h3>
            <button className="text-gray-400 hover:text-gray-600" aria-label="Close">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/devon.jpg"
                alt="Devon Lane"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Devon Lane</p>
              <p className="text-sm text-gray-500">lane@gmail.com</p>
            </div>
          </div>

          <div className="space-y-4 mb-6 text-sm text-gray-600">
            <div className="flex justify-between items-center">
              <span>Company</span>
              <button className="text-indigo-600 hover:underline text-xs font-medium flex items-center space-x-1">
                <span>Personal Employee</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span>Phone Number</span>
              <button className="text-gray-900 font-semibold text-sm bg-gray-100 px-2 py-1 rounded flex items-center space-x-1">
                <span>094 483 4859</span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 13.38 13.38 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13.38 13.38 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between">
              <span>Date Issues</span>
              <span className="font-semibold">12/29/2024</span>
            </div>
            <div className="flex justify-between">
              <span>Status</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Active</span>
            </div>
            <div className="flex justify-between">
              <span>Billed Address</span>
              <p className="text-right max-w-[60%] text-gray-700 font-semibold">
                4517 Washington Ave. Manchester, Kentucky 39495 | Devon Lane - 3956 - 4859 - 5969 - 3825
              </p>
            </div>
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Details Section */}
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Card Number</span>
              <span>•••• •••• •••• - 3825</span>
            </div>
            <div className="flex justify-between">
              <span>CVV</span>
              <span>483</span>
            </div>
            <div className="flex justify-between">
              <span>Expire Date</span>
              <span>05/27</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Billed Name</span>
              <span>Devon Lane</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-semibold">$12.00</span>
            </div>
            <div className="flex justify-between">
              <span>Amount</span>
              <span className="font-semibold">$43,000</span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-3 font-bold text-gray-900">
              <span>Total</span>
              <span>$43,012.00</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex justify-between space-x-4 pt-6">
            <button className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-100 transition">Cancel</button>
            <button className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-700 transition">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
