const users = [
  { username: "police", password: "1234" },
  { username: "court", password: "123" },
  { username: "cia", password: "12" },
];

const ContactPage = () => {
  return (
    <div className="flex h-screen bg-green-50 w-screen overflow-hidden font-bold">

      {/* Left Side */}
      <section
        className="relative flex-1 bg-coral-400 text-cream-50 flex flex-col items-center justify-center
          before:absolute before:top-0 before:left-0 before:w-full before:h-full
          before:bg-gradient-to-br before:from-coral-500 before:to-coral-300 before:opacity-80
          before:clip-path-[polygon(0_0,100%_0,100%_100%,0_85%)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
      >
        <div className="whitespace-nowrap tracking-widest text-4xl select-none mb-20">
          USER CREDENTIALS
        </div>

        <div className="space-y-10">
          {users.map(({ username, password }) => (
            <div
              key={username}
              className="transform rotate-[15deg] bg-cream-50 text-coral-600 px-10 py-4 rounded-xl
                shadow-lg cursor-default hover:scale-105 hover:shadow-2xl transition"
            >
              <p className="mb-1 text-xl">{username.toUpperCase()}</p>
              <p className="italic tracking-wide">
                Password: <span className="font-normal">{password}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Right Side - Brand-New UI Design */}
      <section className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white px-12">

        <div className="relative w-full max-w-md bg-white/5 rounded-3xl p-10 backdrop-blur-lg shadow-2xl border border-white/10">
          
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-coral-400 text-white font-extrabold text-lg px-6 py-2 rounded-full shadow-md">
            WELCOME BACK
          </div>

          <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
            Login Portal
          </h2>

          <div className="space-y-6">

            {/* Username Field */}
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 shadow-inner">
              <p className="text-sm text-white/70 uppercase mb-1 tracking-wider">Username</p>
              <div className="text-xl font-semibold text-white">user@example</div>
            </div>

            {/* Password Field */}
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 shadow-inner">
              <p className="text-sm text-white/70 uppercase mb-1 tracking-wider">Password</p>
              <div className="text-xl font-semibold text-white">••••••••</div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              disabled
              className="w-full mt-4 flex items-center justify-center gap-2 bg-coral-400 text-white font-bold py-4 px-6 rounded-full text-lg shadow-md hover:bg-coral-500 transition-all cursor-default"
            >
              <span className="material-icons">lock_open</span> Log In
            </button>

          </div>

          <div className="mt-10 text-center text-white/50 text-sm italic">
            Demo Mode Only — UI Preview
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
