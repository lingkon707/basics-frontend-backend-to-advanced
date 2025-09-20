"use client";

export default function NewsletterSignup() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0e4c6c] text-white px-4">
      <div className="text-center space-y-4 max-w-md w-full">
        <h2 className="text-xl font-bold">Newsletter Sign Up</h2>
        <p className="text-sm">Send me the latest news in science, culture and tech!</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            placeholder="name@email.com"
            className="px-4 bg-white py-2 w-full sm:w-auto rounded-sm text-black"
            required
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-2 rounded-sm transition"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </main>
  );
}
