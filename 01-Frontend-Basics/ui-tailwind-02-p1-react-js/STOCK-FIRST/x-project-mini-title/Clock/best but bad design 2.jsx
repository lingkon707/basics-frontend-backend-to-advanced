import React, { useState, useEffect, useRef } from "react";

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function formatDateTime(isoStr) {
  return new Date(isoStr).toLocaleString();
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours > 0 ? hours + "h " : ""}${minutes > 0 ? minutes + "m " : ""}${seconds}s`.trim();
}

export default function ClockMaintainApp() {
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const [subject, setSubject] = useState("");

  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("timerHistory")) || [];
    } catch {
      return [];
    }
  });

  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const pauseStartRef = useRef(null);
  const pauseIntervalsRef = useRef([]);

  useEffect(() => {
    if (running) {
      if (!startTimeRef.current) startTimeRef.current = Date.now();
      if (pauseStartRef.current) {
        const pauseEnd = Date.now();
        const pauseStart = pauseStartRef.current;
        pauseIntervalsRef.current.push({
          start: pauseStart,
          end: pauseEnd,
          duration: pauseEnd - pauseStart,
        });
        pauseStartRef.current = null;
      }

      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const totalPause = pauseIntervalsRef.current.reduce(
          (acc, p) => acc + p.duration,
          0
        );
        const elapsed = now - startTimeRef.current - totalPause;
        const newTimeLeft = duration - elapsed;

        if (newTimeLeft <= 0) {
          clearInterval(intervalRef.current);
          setRunning(false);
          setTimeLeft(0);
          saveToHistory(
            duration,
            startTimeRef.current,
            pauseIntervalsRef.current,
            now,
            subject
          );
          resetSession();
          return;
        }
        setTimeLeft(newTimeLeft);
      }, 200);
    } else {
      if (timeLeft !== 0 && !pauseStartRef.current && startTimeRef.current) {
        pauseStartRef.current = Date.now();
      }
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, duration, timeLeft, subject]);

  function resetSession() {
    startTimeRef.current = null;
    pauseStartRef.current = null;
    pauseIntervalsRef.current = [];
    setSubject("");
  }

  function saveToHistory(dur, startTime, pauseIntervals, endTime, subject) {
    const newEntry = {
      id: Date.now(),
      subject,
      duration: dur,
      startTime,
      pauseIntervals: pauseIntervals || [],
      endTime,
    };
    const newHistory = [newEntry, ...history];
    setHistory(newHistory);
    localStorage.setItem("timerHistory", JSON.stringify(newHistory));
  }

  function handleStart() {
    if (duration === 0) return alert("Set a duration first.");
    if (!subject.trim()) return alert("Enter a subject name.");
    if (timeLeft === 0) setTimeLeft(duration);
    setRunning(true);
  }

  function handlePause() {
    setRunning(false);
  }

  function handleReset() {
    setRunning(false);
    setTimeLeft(duration);
    resetSession();
  }

  const [customH, setCustomH] = useState("");
  const [customM, setCustomM] = useState("");
  const [customS, setCustomS] = useState("");

  function handleAddTimer(e) {
    e.preventDefault();
    const h = parseInt(customH) || 0;
    const m = parseInt(customM) || 0;
    const s = parseInt(customS) || 0;
    const totalMs = (h * 3600 + m * 60 + s) * 1000;
    if (totalMs <= 0) return alert("Enter a valid duration!");
    setDuration(totalMs);
    setTimeLeft(totalMs);
    setRunning(false);
    resetSession();
    setCustomH("");
    setCustomM("");
    setCustomS("");
  }

  function handleReuse(item) {
    setDuration(item.duration);
    setTimeLeft(item.duration);
    setRunning(false);
    setSubject(item.subject || "");
    resetSession();
  }

  function handleDelete(id) {
    const filtered = history.filter((h) => h.id !== id);
    setHistory(filtered);
    localStorage.setItem("timerHistory", JSON.stringify(filtered));
  }

  function handleClearAll() {
    if (window.confirm("Clear all history?")) {
      setHistory([]);
      localStorage.removeItem("timerHistory");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Clock Maintain App</h1>

      {/* Timer Card */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Subject Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-indigo-500"
        />

        <div className="text-4xl font-mono font-bold text-center text-gray-800">
          {formatTime(timeLeft || duration)}
        </div>

        <div className="flex justify-center space-x-3">
          {!running ? (
            <button
              onClick={handleStart}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold text-sm"
            >
              Start
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold text-sm"
            >
              Pause
            </button>
          )}
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold text-sm"
          >
            Reset
          </button>
        </div>

        {/* Add Custom Timer */}
        <form
          onSubmit={handleAddTimer}
          className="flex justify-center space-x-1"
        >
          <input
            type="number"
            min="0"
            placeholder="H"
            value={customH}
            onChange={(e) => setCustomH(e.target.value)}
            className="w-12 p-1 rounded border border-gray-300 text-center text-sm"
          />
          <input
            type="number"
            min="0"
            max="59"
            placeholder="M"
            value={customM}
            onChange={(e) => setCustomM(e.target.value)}
            className="w-12 p-1 rounded border border-gray-300 text-center text-sm"
          />
          <input
            type="number"
            min="0"
            max="59"
            placeholder="S"
            value={customS}
            onChange={(e) => setCustomS(e.target.value)}
            className="w-12 p-1 rounded border border-gray-300 text-center text-sm"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md font-semibold text-sm"
          >
            Set
          </button>
        </form>
      </div>

      {/* History */}
      <section className="max-w-3xl w-full mt-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-gray-900">History</h2>
          {history.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-red-600 hover:underline text-sm"
            >
              Clear All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <p className="text-gray-600 text-sm italic">No history yet.</p>
        ) : (
          <ul className="space-y-3">
            {history.map(
              ({
                id,
                subject,
                duration,
                startTime,
                pauseIntervals = [],
                endTime,
              }) => (
                <li
                  key={id}
                  className="bg-white rounded-md shadow p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2"
                >
                  <div className="flex-1 text-sm">
                    <p className="font-semibold text-gray-900">Subject: {subject || "N/A"}</p>
                    <p className="text-gray-700">Duration: {formatTime(duration)}</p>
                    <p className="text-gray-700">Start: {formatDateTime(startTime)}</p>
                    <p className="text-gray-700 mb-1">End: {formatDateTime(endTime)}</p>

                    <details className="text-gray-700">
                      <summary className="cursor-pointer font-medium">
                        Pauses ({pauseIntervals.length}, total{" "}
                        {formatTime(
                          pauseIntervals.reduce(
                            (acc, p) => acc + p.duration,
                            0
                          )
                        )}
                        )
                      </summary>
                      <ul className="list-disc ml-5 mt-1">
                        {pauseIntervals.map(({ start, end, duration }, idx) => (
                          <li key={idx}>
                            {formatDateTime(start)} → {formatDateTime(end)} (
                            {formatDuration(duration)})
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>

                  <div className="flex flex-shrink-0 gap-2 self-end md:self-auto">
                    <button
                      onClick={() => handleReuse({ subject, duration })}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Reuse
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </main>
  );
}
