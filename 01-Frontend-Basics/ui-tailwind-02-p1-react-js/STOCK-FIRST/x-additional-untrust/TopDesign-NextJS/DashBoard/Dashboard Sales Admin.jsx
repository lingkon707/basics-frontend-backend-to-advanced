import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Head>
        <title>Sales Admin Dashboard</title>
        <meta name="description" content="Sales Admin Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white h-full p-6 flex flex-col">
        <div className="flex justify-center items-center mb-8">
          <div className="text-2xl font-semibold">Digvijay</div>
        </div>
        <nav className="space-y-6">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-300">
            <span className="text-xl">🏠</span>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-300">
            <span className="text-xl">👥</span>
            <span>Customers</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-300">
            <span className="text-xl">📦</span>
            <span>Products</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-300">
            <span className="text-xl">📊</span>
            <span>Reports</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-300">
            <span className="text-xl">🔒</span>
            <span>Security</span>
          </div>
        </nav>
        <div className="mt-auto text-sm text-indigo-400">Logout</div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Sales Admin Dashboard</h1>
          <div className="flex items-center space-x-6">
            <input type="text" placeholder="Search anything" className="p-2 rounded-lg border border-gray-300 w-64" />
            <select className="p-2 rounded-lg border border-gray-300">
              <option>January 2024 - May 2024</option>
              <option>June 2024 - Dec 2024</option>
            </select>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {/* Net Income */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Net Income</span>
              <div className="text-green-600 text-sm">+35% from last month</div>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mt-4">$193.00</h2>
          </div>

          {/* Revenue */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Revenue</span>
              <div className="text-blue-600 text-sm">+40% from last week</div>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mt-4">$193.00</h2>
          </div>

          {/* Meetings */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-gray-600 text-sm">Meetings</h2>
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-semibold text-gray-900">Meeting with Digvijay Sharma</div>
              <span className="text-sm text-gray-500">On Google Meet</span>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Products</h2>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Stock</th>
                <th className="py-2 px-4">Last Updated</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-800">Websites still in their infancy</td>
                <td className="py-2 px-4">$100</td>
                <td className="py-2 px-4 text-green-600">Published</td>
                <td className="py-2 px-4">34</td>
                <td className="py-2 px-4">Jan 12, 2012 3:42 PM</td>
                <td className="py-2 px-4 text-teal-600 cursor-pointer">Edit</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-800">Websites for the modern age</td>
                <td className="py-2 px-4">$150</td>
                <td className="py-2 px-4 text-yellow-600">Draft</td>
                <td className="py-2 px-4">76</td>
                <td className="py-2 px-4">Jan 13, 2012 4:10 PM</td>
                <td className="py-2 px-4 text-teal-600 cursor-pointer">Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
