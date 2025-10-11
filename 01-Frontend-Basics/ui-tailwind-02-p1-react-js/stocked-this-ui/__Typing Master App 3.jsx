"use client";
import { useState, useEffect, useRef } from "react";

const practiceTexts = {
  "Random Words": "apple banana orange grape melon kiwi mango peach pear",
  "Sentence": "The quick brown fox jumps over the lazy dog. Practice makes perfect."
};

export default function StudentTypingApp() {
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
    <main className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 md:p-8 text-gray-800">
        <h1 className="text-2xl font-bold text-center mb-4">Typing Practice</h1>

        {/* Mode Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {Object.keys(practiceTexts).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 rounded border font-medium text-sm ${
                mode === m ? "bg-blue-400 text-white" : "border-blue-400 text-blue-700"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Custom Time */}
        <div className="flex justify-center gap-2 mb-4 items-center text-sm">
          <label>Time (seconds):</label>
          <input
            type="number"
            min="10"
            max="300"
            value={customTime}
            onChange={(e) => setCustomTime(parseInt(e.target.value) || 60)}
            className="w-16 px-2 py-1 border rounded"
          />
          <button
            onClick={resetPractice}
            className="px-3 py-1 bg-blue-400 text-white rounded"
          >
            Start
          </button>
        </div>

        {/* Text to type */}
        <div className="w-full p-3 rounded border bg-gray-50 mb-3 min-h-[80px]">
          {textToType}
        </div>

        {/* Input box */}
        <textarea
          value={userInput}
          onChange={handleInput}
          className="w-full h-32 p-2 border rounded resize-none mb-3"
          placeholder="Start typing here..."
          disabled={timeLeft === 0}
        />

        {/* Stats */}
        <div className="flex justify-between text-sm font-medium mb-2 flex-wrap gap-2">
          <span>Words: {wordCount}</span>
          <span>Sentences: {sentenceCount}</span>
          <span>WPM: {wpm}</span>
          <span>Accuracy: {accuracy.toFixed(1)}%</span>
          <span>Time Left: {timeLeft}s</span>
        </div>

        {/* Reset button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={resetPractice}
            className="px-5 py-1 bg-blue-400 text-white rounded font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
