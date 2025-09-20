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
        <div className=" whitespace-nowrap tracking-widest text-4xl select-none mb-20">
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
              <p className="italic tracking-wide">Password: <span className="font-normal">{password}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Right Side - Unexpected Login Form UI */}
      <section className="relative flex-1 flex items-center justify-center bg-blue-600 text-cream-50 px-12">

      
      </section>
    </div>
  );
};

export default ContactPage;
