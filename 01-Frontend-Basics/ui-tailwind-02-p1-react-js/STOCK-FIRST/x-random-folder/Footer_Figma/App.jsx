// pages/index.js
import React from 'react'

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Figma</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Explore</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Social media templates</li>
            <li>Web ad templates</li>
            <li>Instagram templates</li>
            <li>LinkedIn templates</li>
            <li>Facebook templates</li>
            <li>YouTube templates</li>
            <li>Card templates</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Popular searches</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Portfolio templates</li>
            <li>Resume templates</li>
            <li>Website templates</li>
            <li>Mobile app templates</li>
            <li>Presentations</li>
            <li>Device mockups</li>
            <li>Team meetings</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Recommended</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Calendar templates</li>
            <li>Data templates</li>
            <li>Accessibility tools</li>
            <li>Fonts & typography</li>
            <li>Design inspiration</li>
            <li>Development plugins</li>
            <li>Strategic planning</li>
          </ul>
        </div>
      </section>

      {/* <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800">Top Categories</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          <li className="p-4 bg-gray-100 rounded-lg shadow-md">Design tools</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow-md">Libraries</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow-md">Education</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow-md">Whiteboarding</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow-md">Visual assets</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow-md">Illustrations</li>
        </ul>
      </section> */}

      <footer className="text-center mt-12">
        <p className="text-sm text-gray-500">© 2025 Figma, Inc. | <a href="#" className="text-blue-600">Site map</a> | <a href="#" className="text-blue-600">Community guidelines</a> | <a href="#" className="text-blue-600">Terms of service</a></p>
      </footer>
    </div>
  )
}

export default HomePage
