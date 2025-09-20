"use client"


const FullPagePendingButton = () => {
  return (

    <main>

     <div className="w-screen h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center">
    <button
      className="
        relative flex items-center gap-4
        bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
        text-white text-4xl font-extrabold
        px-24 py-7 rounded-full
        shadow-lg shadow-purple-400/50
        focus:outline-none
        transition
        hover:scale-105
      "
      aria-live="polite"
    >
      <span className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-bounce animate-spin"></span>
      Pending
    </button>
  </div>

    </main>
    
  );
};

export default FullPagePendingButton;


