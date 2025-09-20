import React, { useState } from "react";
import CodeDisplay from "./CodeDisplay";
import codesData from "./codes.json";

const CodeGrid = () => {
  const [activeProblem, setActiveProblem] = useState(null);

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      {/* Flex Container */}
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg min-h-[500px]">
        
        {/* LEFT: Problem List */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Problems</h2>
          <div className="space-y-4">
            {codesData.map((problem, index) => (
              <button
                key={index}
                onClick={() => setActiveProblem(index)}
                className={`
                  w-full py-3 px-5 text-left rounded-lg 
                  font-medium text-lg transition-all duration-300
                  ${activeProblem === index 
                    ? "bg-black text-white shadow-md" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
                `}
              >
                {problem.title}
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE BORDER */}
        <div className="hidden md:block w-px bg-gray-200"></div>

        {/* RIGHT: Code Viewer */}
        <div className="w-full md:w-1/2 p-6 bg-gray-50">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Solution</h2>
          {activeProblem !== null ? (
            <CodeDisplay
              title={codesData[activeProblem].title}
              code={codesData[activeProblem].code}
            />
          ) : (
            <p className="text-gray-500">Select a problem to view the solution.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeGrid;
