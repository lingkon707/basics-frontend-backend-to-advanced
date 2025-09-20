"use client";

export default function LandingPage() {
  return (
    <div className="font-sans bg-gradient-to-br from-white to-blue-50 text-gray-800 scroll-smooth">
      {/* HEADER */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-lg shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
            HostelMeals
          </div>
          <nav className="space-x-6 hidden md:flex text-gray-700 font-medium text-sm">
            {["Features", "Menu", "Pricing", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="space-x-3">
            <button className="hidden md:inline px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-md hover:brightness-110 transition">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Simplify Hostel Meals
              </span>
              <br />
              — Efficient, Transparent, Hassle-Free
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              All-in-one platform to manage hostel meal planning, ordering, payments, and reporting with ease.
            </p>
            <div className="space-x-4 mt-6">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-transform duration-200">
                Get Started
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-md hover:bg-indigo-50 transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full h-80 md:h-[360px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQHUkg8guWFNgQ/feedshare-shrink_2048_1536/B56Zk.wnZ8HcAw-/0/1757694573313?e=1761177600&v=beta&t=iF4gnKgcnQ1L2XoSaXMPue41qWoiSuq7uUe-0xAJ0v8"
              alt="Hostel Meals Management"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-lg pointer-events-none" /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
