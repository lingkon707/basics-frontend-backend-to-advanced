import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const content = {
    headline: "Grow your business with more profit",
    subheading: "Lorem ipsum dolor amet, consectetur adipiscing elit. There are many variations.",
    buttonText1: "Get in Touch",
    buttonText2: "About Us",
    clients: ["IROKCTV", "gidimo", "busha"],
    stats: {
      accounts: "11,750",
      period: "Day",
    },
  }

  return (
    <div className="bg-[#1A1C2C] min-h-screen text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex items-center justify-between space-x-12">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">{content.headline}</h1>
            <p className="text-lg mb-6">{content.subheading}</p>
            <div className="space-x-4">
              <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg">{content.buttonText1}</button>
              <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-lg">{content.buttonText2}</button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Worldwide {content.clients.length}+ trusted & happy clients</p>
              <div className="flex space-x-4 mt-2">
                {content.clients.map((client, index) => (
                  <span key={index} className="text-gray-300">{client}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 relative w-80 h-80">
            <Image src="/path/to/image.jpg" alt="Person with megaphone" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between bg-[#262A3A] rounded-xl p-8">
            <div className="text-white text-2xl font-semibold">Accounts Reached</div>
            <div className="bg-white text-black text-xl px-4 py-2 rounded-lg">
              <span>{content.stats.accounts}</span>
              <div className="text-sm text-gray-500">{content.stats.period}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
