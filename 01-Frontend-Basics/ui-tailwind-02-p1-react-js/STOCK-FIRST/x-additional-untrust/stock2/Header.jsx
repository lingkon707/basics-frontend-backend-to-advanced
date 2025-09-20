import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Integrations Page</title>
      </Head>

      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-indigo-600">
          Untitled UI
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Products</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Integrations</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Blog</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">FAQs</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Docs</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg w-64"
            placeholder="Search..."
          />
        </div>
      </header>

      
    </div>
  );
}
