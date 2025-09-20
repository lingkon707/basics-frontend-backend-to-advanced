import React, { useState } from "react";

const CopilotSetup = () => {
  // Initialize the state as an object with keys for each toggle
  const [settings, setSettings] = useState({
    shareData: true,
    startLogin: true,
    shortcut: true
  });

  // Toggle function to update specific key in settings object
  const toggleSwitch = (key) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key]
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full sm:w-[500px] lg:w-[600px] p-8 space-y-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Hi, I'm Copilot, your AI companion.
        </h2>
        <div className="space-y-6">
          {/* Share data toggle */}
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl">
            <div className="max-w-[60ch]">
              <span className="text-lg text-wrap text-gray-700">Shonal diagnostic darosoft products</span>
            </div>
            <button
              onClick={() => toggleSwitch("shareData")}
              className={`w-12 h-7 flex items-center rounded-full p-1 transition duration-300 ${
                settings.shareData ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  settings.shareData ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          {/* Start on login toggle */}
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl">
            <div className="max-w-[60ch]">
              <span className="text-lg text-gray-700">Start Copilot on login to keep it handy</span>
            </div>
            <button
              onClick={() => toggleSwitch("startLogin")}
              className={`w-12 h-7 flex items-center rounded-full p-1 transition duration-300 ${
                settings.startLogin ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  settings.startLogin ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          {/* Open with shortcut toggle */}
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl">
            <div className="max-w-[60ch]">
              <span className="text-lg text-gray-700">Open Copilot using Alt+Spacebar shortcut</span>
            </div>
            <button
              onClick={() => toggleSwitch("shortcut")}
              className={`w-12 h-7 flex items-center rounded-full p-1 transition duration-300 ${
                settings.shortcut ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  settings.shortcut ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Continue button */}
        <div className="mt-8">
          <button className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopilotSetup;
