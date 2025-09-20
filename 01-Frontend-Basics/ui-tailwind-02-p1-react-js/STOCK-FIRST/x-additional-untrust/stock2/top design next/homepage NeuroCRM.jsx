import Image from 'next/image';

export default function Home() {
  const content = {
    hero: {
      title: "Grow Stronger Customer Relationships.",
      subtitle: "Our all-in-one CRM platform helps you manage leads, streamline communication, and close more deals—so you can focus on building lasting relationships, not spreadsheets.",
      cta1: "Start Free Trial",
      cta2: "Request Demo",
    },
    dashboard: {
      title: "Dashboard",
      welcomeMessage: "Welcome back to your dashboard",
      metrics: [
        {
          title: "Active Sales",
          value: "$30,210",
        },
        {
          title: "Products Revenue",
          value: "$12,110",
        },
        {
          title: "Product Sold",
          value: "$3,512",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-white text-black">
        <div className="font-bold text-2xl">NeuroCRM</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">About Us</a>
          <a href="#" className="hover:text-purple-600">Features</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">Blog</a>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-purple-700">Register</button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold mb-6">{content.hero.title}</h1>
        <p className="text-xl mb-8">{content.hero.subtitle}</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">{content.hero.cta1}</button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-purple-600">{content.hero.cta2}</button>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="bg-white text-black py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">{content.dashboard.title}</h2>
          <p className="text-lg mb-8">{content.dashboard.welcomeMessage}</p>

          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.dashboard.metrics.map((metric, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-medium mb-4">{metric.title}</h3>
                <p className="text-2xl font-bold text-purple-600">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>&copy; 2023 NeuroCRM. All rights reserved.</p>
      </footer>
    </div>
  );
}
