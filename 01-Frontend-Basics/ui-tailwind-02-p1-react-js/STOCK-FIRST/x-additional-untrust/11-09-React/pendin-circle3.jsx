"use client"


const FullPagePendingButton = () => {
  return (

    <main>

        <div className="w-screen h-screen bg-black flex items-center justify-center">
    <button
      className="
        relative flex items-center gap-5
        bg-purple-900 text-purple-300 text-4xl font-extrabold
        px-20 py-8 rounded-3xl
        shadow-[0_0_25px_rgba(128,0,255,0.7)]
        animate-pulse
        hover:shadow-[0_0_45px_rgba(179,0,255,1)]
        focus:outline-none
        ring-2 ring-purple-600
        transition
      "
      aria-live="polite"
    >
      <span className="w-10 h-10 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></span>
      Pending
    </button>
  </div>

    </main>
    
  );
};

export default FullPagePendingButton;


