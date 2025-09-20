"use client"


const FullPagePendingButton = () => {
  return (

    <main>

     <div className="w-screen h-screen bg-gradient-to-tr from-blue-400 to-indigo-700 flex items-center justify-center">
    <button
      className="
        relative flex items-center gap-4
        bg-green-700 bg-opacity-20 backdrop-blur-md
        text-white text-4xl font-semibold
        px-24 py-8 rounded-2xl
        border border-white border-opacity-30
        shadow-lg shadow-indigo-900/30
        hover:bg-opacity-30
        focus:outline-none
        transition
      "
      aria-live="polite"
    >
      <span className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
      Pending
    </button>
  </div>

    </main>
    
  );
};

export default FullPagePendingButton;


