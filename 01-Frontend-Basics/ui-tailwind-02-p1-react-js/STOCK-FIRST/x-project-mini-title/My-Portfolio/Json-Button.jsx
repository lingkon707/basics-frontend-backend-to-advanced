
import React from "react";

const skillLevelsColors = {
  Expert: "bg-green-600 text-white",
  Advanced: "bg-blue-600 text-white",
  Intermediate: "bg-yellow-400 text-gray-900",
  Proficient: "bg-purple-600 text-white",
};

export default function App() {
  const handleClick = (level) => {
    alert(`You clicked: ${level}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-800 mb-10">
        Skill Level Buttons
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(skillLevelsColors).map(([level, classes]) => (
          <button
            key={level}
            onClick={() => handleClick(level)}
            className={`rounded-full px-6 py-2 font-semibold text-sm sm:text-base shadow-md hover:scale-105 transform transition duration-300 ${classes}`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}




// export default function ProfilePage() {
 
//   return (
//     <div className="min-h-screen bg-gray-50 px-5 sm:px-8 md:px-16 py-16 font-sans max-w-6xl mx-auto">
//       {/* Header */}
//       <header className="text-center mb-20 px-2 sm:px-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-sky-900 mb-5 leading-tight">
//           Lingkon Islam
//         </h1>
//         <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
//           Passionate Frontend Developer specializing in React, Next.js, and modern web
//           technologies. Dedicated to crafting clean, responsive, and performant user
//           interfaces.
//         </p>
//       </header>



     
//     </div>
//   );
// }
