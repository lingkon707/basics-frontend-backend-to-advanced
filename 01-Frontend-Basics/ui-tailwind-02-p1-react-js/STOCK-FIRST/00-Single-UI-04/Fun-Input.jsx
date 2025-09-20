import React, { useState } from "react";

const moods = [
  { id: "happy", emoji: "😊", label: "Happy" },
  { id: "sad", emoji: "😢", label: "Sad" },
  { id: "nervous", emoji: "😬", label: "Nervous" },
  { id: "calm", emoji: "😌", label: "Calm" },
];

export default function App() {
  const [secret, setSecret] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [anonymous, setAnonymous] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!secret.trim()) return alert("Please write your secret before submitting.");
    setSubmitted(true);
    // Here you can add further logic, e.g., API call
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://st5.depositphotos.com/4678277/62620/i/450/depositphotos_626209680-stock-photo-photo-young-funny-handsome-student.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 rounded-xl max-w-md w-full p-8 text-white shadow-lg">
        <h1 className="text-3xl font-semibold mb-2 text-center">Share Your Secrets</h1>
        <p className="text-center text-gray-300 mb-6">
          Your space to speak freely, no judgments.
        </p>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-400 mb-4 text-lg font-medium">
              Thank you for sharing your secret!
            </p>
            <button
              onClick={() => {
                setSecret("");
                setSelectedMood(null);
                setAnonymous(true);
                setSubmitted(false);
              }}
              className="mt-4 bg-purple-600 hover:bg-purple-700 rounded px-6 py-2 transition"
            >
              Share Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <textarea
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="What’s your secret? Write it down... 🕵️‍♂️"
              className="resize-none rounded-md bg-gray-800 text-white p-4 mb-4 min-h-[120px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              maxLength={500}
              required
            />

            <div className="flex justify-center space-x-4 mb-4">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => setSelectedMood(mood.id)}
                  className={`text-3xl transition transform hover:scale-110 ${
                    selectedMood === mood.id ? "scale-125" : ""
                  }`}
                  aria-label={mood.label}
                  title={mood.label}
                >
                  {mood.emoji}
                </button>
              ))}
            </div>

            <label className="flex items-center mb-6 space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={anonymous}
                onChange={() => setAnonymous(!anonymous)}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span>Share Anonymously 🔒</span>
            </label>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 rounded-md py-3 font-semibold transition"
            >
              Let it Out
            </button>
          </form>
        )}

        <footer className="mt-6 text-center text-gray-400 text-sm">
          Your secrets are safe here. No one will see them unless you want.
        </footer>
      </div>
    </div>
  );
}
