import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Head>
        <title>Smushi - CRM Management</title>
        <meta name="description" content="Manage your CRM right way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold text-green-600">smushi</div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-900 hover:text-green-600">Solutions</a>
            <a href="#" className="text-gray-900 hover:text-green-600">Company</a>
            <a href="#" className="text-gray-900 hover:text-green-600">Resources</a>
            <a href="#" className="text-gray-900 hover:text-green-600">Pricing</a>
          </nav>
          <div className="space-x-4">
            <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full">Get Started</button>
            <button className="text-green-600 border-2 border-green-600 hover:bg-green-100 px-4 py-2 rounded-full">Live Demo</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 sm:px-8 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Manage your CRM right way
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Our platform brings new processes into smart CRM solutions. Manage your Customer processes the right way.
        </p>
        <div className="mt-8 space-x-4">
          <button className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg">Get Started</button>
          <button className="text-green-600 border-2 border-green-600 hover:bg-green-100 px-6 py-3 rounded-full text-lg">Live Demo</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="flex justify-center space-x-6">
            <span className="w-10 h-10 bg-green-600 rounded-full"></span>
            <span className="w-10 h-10 bg-gray-800 rounded-full"></span>
            <span className="w-10 h-10 bg-yellow-500 rounded-full"></span>
            <span className="w-10 h-10 bg-blue-500 rounded-full"></span>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Improving the relationships of customer and businesses.
          </p>
        </div>
      </footer>
    </div>
  )
}
