import React from "react";


export default function Subscribe() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

       <section
        id="subscribe"
        className="container mx-auto px-6 py-16"
      >
        <h3 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
          Stay Updated & Get Exclusive Offers
        </h3>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-3 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="bg-indigo-700 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    
     
    </div>
  );
}
