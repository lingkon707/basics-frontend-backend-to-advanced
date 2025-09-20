"use client"


const FullPagePendingButton = () => {
  return (

    <main>

     <div className="w-screen h-screen bg-black flex items-center justify-center">
    <button
      className="
        relative flex items-center gap-5
        bg-cyan-500 text-pink-400 text-3xl font-bold
        px-20 py-6 rounded-sm
        border-4 border-pink-400
        shadow-[4px_4px_0_rgba(255,0,255,0.7)]
        hover:shadow-[6px_6px_0_rgba(255,0,255,1)]
        focus:outline-none
        transition
        font-mono
      "
      aria-live="polite"
    >
      <span className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-sm animate-spin pixel-spinner"></span>
      Pending
      <style>{`
        @keyframes pixel-spin {
          0% { transform: rotate(0deg) }
          100% { transform: rotate(360deg) }
        }
        .pixel-spinner {
          animation: pixel-spin 1s linear infinite;
          image-rendering: pixelated;
        }
      `}</style>
    </button>
  </div>

    </main>
    
  );
};

export default FullPagePendingButton;


