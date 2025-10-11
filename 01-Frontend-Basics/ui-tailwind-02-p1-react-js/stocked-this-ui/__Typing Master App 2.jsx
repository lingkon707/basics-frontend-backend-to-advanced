"use client";
import { useState, useEffect, useRef } from "react";

const practiceTexts = {
  "Custom Text": "Type your own text here. Add multiple sentences for practice.",
  "Random Words": "apple banana orange grape melon kiwi mango peach pear",
  "Numbers": "1234 5678 91011 1213 1415",
  "Punctuation": ". , ! ? ; : - ' \" ()",
  "Sentence": "The quick brown fox jumps over the lazy dog. Practice makes perfect. Typing fast requires accuracy."
};

export default function TypingMaster() {
  const [mode, setMode] = useState("Random Words");
  const [textToType, setTextToType] = useState(practiceTexts[mode]);
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [customTime, setCustomTime] = useState(60);
  const [started, setStarted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const intervalRef = useRef(null);

  useEffect(() => {
    resetPractice();
  }, [mode]);

  useEffect(() => {
    if (timeLeft <= 0) clearInterval(intervalRef.current);
  }, [timeLeft]);

  const handleInput = (e) => {
    const val = e.target.value;
    if (!started) startTimer();
    setUserInput(val);

    // Accuracy
    const correctChars = val.split("").filter((c, i) => c === textToType[i]).length;
    setAccuracy(((correctChars / val.length) * 100) || 100);

    // WPM
    const minutes = ((customTime - timeLeft) / 60) || 1;
    setWpm(Math.round(val.split(" ").length / minutes));

    // Word & sentence count
    setWordCount(val.trim().split(/\s+/).filter(Boolean).length);
    setSentenceCount(val.split(/[.!?]+/).filter(s => s.trim().length > 0).length);
  };

  const startTimer = () => {
    setStarted(true);
    setTimeLeft(customTime);
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetPractice = () => {
    setTextToType(practiceTexts[mode]);
    setUserInput("");
    setWpm(0);
    setWordCount(0);
    setSentenceCount(0);
    setAccuracy(100);
    setStarted(false);
    setTimeLeft(customTime);
    clearInterval(intervalRef.current);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8 md:p-12 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">⌨️ Typing Master</h1>

        {/* Mode Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {Object.keys(practiceTexts).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === m ? "bg-blue-400 text-white" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Custom Time */}
        <div className="flex justify-center gap-3 mb-4 items-center">
          <label className="text-sm">Set Time (seconds):</label>
          <input
            type="number"
            min="10"
            max="600"
            value={customTime}
            onChange={(e) => setCustomTime(parseInt(e.target.value) || 60)}
            className="w-20 text-black px-2 py-1 rounded-md"
          />
          <button
            onClick={resetPractice}
            className="px-4 py-1 bg-green-600 hover:bg-green-700 rounded-lg"
          >
            Start
          </button>
        </div>

        {/* Text to type */}
        <div className="w-full p-4 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white mb-4 min-h-[100px]">
          {textToType}
        </div>

        {/* Input box */}
        <textarea
          value={userInput}
          onChange={handleInput}
          className="w-full h-36 p-4 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none font-sans mb-4"
          placeholder="Start typing here..."
          disabled={timeLeft === 0}
        />

        {/* Stats */}
        <div className="flex justify-between text-white font-semibold mb-2 flex-wrap gap-2">
          <span>Words: {wordCount}</span>
          <span>Sentences: {sentenceCount}</span>
          <span>WPM: {wpm}</span>
          <span>Accuracy: {accuracy.toFixed(1)}%</span>
          <span>Time Left: {timeLeft}s</span>
        </div>

        {/* Reset button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={resetPractice}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
