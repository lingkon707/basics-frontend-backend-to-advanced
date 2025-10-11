"use client";
import { useState, useEffect, useRef } from "react";

const practiceTexts = {
  "Custom Text": "",
  "Random Words": ["apple", "banana", "orange", "grape", "melon"],
  "Numbers": ["1234", "5678", "91011", "1213", "1415"],
  "Punctuation": [". , ! ? ; : - ' \" ()"],
  "Sentence": [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect.",
    "Typing fast requires accuracy."
  ]
};

export default function TypingMasterApp() {
  const [mode, setMode] = useState("Random Words");
  const [textToType, setTextToType] = useState("");
  const [userInput, setUserInput] = useState("");
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    generateText(mode);
  }, [mode]);

  const generateText = (mode) => {
    setUserInput("");
    setWpm(0);
    setAccuracy(100);
    setStartTime(null);

    let newText = "";
    if (mode === "Custom Text") {
      newText = "Type your own text here...";
    } else if (mode === "Random Words") {
      newText = practiceTexts["Random Words"].join(" ");
    } else if (mode === "Numbers") {
      newText = practiceTexts["Numbers"].join(" ");
    } else if (mode === "Punctuation") {
      newText = practiceTexts["Punctuation"].join(" ");
    } else if (mode === "Sentence") {
      newText = practiceTexts["Sentence"].join(" ");
    }

    setTextToType(newText);
  };

  const handleInput = (e) => {
    const val = e.target.value;
    if (!startTime) setStartTime(new Date());
    setUserInput(val);

    // Accuracy
    const correctChars = val.split("").filter((c, i) => c === textToType[i]).length;
    setAccuracy(((correctChars / val.length) * 100) || 100);

    // WPM
    const now = new Date();
    const minutes = ((now - startTime) / 1000 / 60) || 1;
    setWpm(Math.round((val.split(" ").length) / minutes));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-800 via-teal-700 to-green-600 flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8 md:p-12 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Typing Master App
        </h1>

        {/* Mode Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {Object.keys(practiceTexts).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === m ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Text to type */}
        <div className="w-full p-4 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white mb-4 min-h-[100px]">
          {textToType}
        </div>

        {/* Input box */}
        <textarea
          ref={inputRef}
          value={userInput}
          onChange={handleInput}
          className="w-full h-36 p-4 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none font-sans mb-4"
          placeholder="Start typing here..."
        />

        {/* Stats */}
        <div className="flex justify-between text-white font-semibold">
          <span>WPM: {wpm}</span>
          <span>Accuracy: {accuracy.toFixed(1)}%</span>
        </div>

        {/* Reset button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => generateText(mode)}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
