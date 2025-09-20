"use client"


const FullPagePendingButton = () => {
  return (

    <main>

     <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
    <button
      className="
        relative flex items-center gap-5
        bg-cyan-900 text-cyan-400 text-4xl font-extrabold tracking-wider
        px-20 py-8 rounded-lg
        shadow-[0_0_20px_cyan]
        ring-2 ring-cyan-500
        hover:shadow-[0_0_40px_cyan]
        focus:outline-none
        transition
        font-sans
      "
      aria-live="polite"
    >
      <span className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-pulse animate-spin"></span>
      Pending
    </button>
  </div>

    </main>
    
  );
};

export default FullPagePendingButton;


