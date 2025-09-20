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
  const [duration, setDuration] = useState(0); // in ms
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const [subject, setSubject] = useState("");

  // Load history safely
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
        // End pause interval
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
        const totalPauseTime = pauseIntervalsRef.current.reduce(
          (acc, p) => acc + p.duration,
          0
        );
        const elapsed = now - startTimeRef.current - totalPauseTime;
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
    if (duration === 0) {
      alert("Set a duration first.");
      return;
    }
    if (!subject.trim()) {
      alert("Enter a subject name.");
      return;
    }
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
    if (totalMs <= 0) {
      alert("Enter a valid duration!");
      return;
    }
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
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Clock Maintain App</h1>

      {/* Timer Display */}
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col items-center">
        <input
          type="text"
          placeholder="Subject Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Subject name"
        />

        <div className="text-6xl font-mono font-bold mb-8 text-gray-800">
          {formatTime(timeLeft || duration)}
        </div>

        <div className="flex space-x-4 mb-6">
          {!running ? (
            <button
              onClick={handleStart}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Start
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Pause
            </button>
          )}
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Reset
          </button>
        </div>

        {/* Add Custom Timer */}
        <form
          onSubmit={handleAddTimer}
          className="flex space-x-2 items-center w-full justify-center"
        >
          <input
            type="number"
            min="0"
            placeholder="H"
            value={customH}
            onChange={(e) => setCustomH(e.target.value)}
            className="w-12 p-2 rounded border border-gray-300 text-center"
            aria-label="Hours"
          />
          <span className="text-xl font-bold">:</span>
          <input
            type="number"
            min="0"
            max="59"
            placeholder="M"
            value={customM}
            onChange={(e) => setCustomM(e.target.value)}
            className="w-12 p-2 rounded border border-gray-300 text-center"
            aria-label="Minutes"
          />
          <span className="text-xl font-bold">:</span>
          <input
            type="number"
            min="0"
            max="59"
            placeholder="S"
            value={customS}
            onChange={(e) => setCustomS(e.target.value)}
            className="w-12 p-2 rounded border border-gray-300 text-center"
            aria-label="Seconds"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Set Timer
          </button>
        </form>
      </div>

      {/* History */}
      <section className="max-w-3xl w-full mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">History</h2>
          {history.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-red-600 hover:underline font-semibold"
            >
              Clear All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <p className="text-gray-600 italic">No history yet.</p>
        ) : (
          <ul className="space-y-4">
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
                  className="bg-white rounded-lg shadow p-5 flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-lg mb-1">
                      Subject: {subject || "N/A"}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                      Duration: {formatTime(duration)}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                      Started: {formatDateTime(startTime)}
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      Ended: {formatDateTime(endTime)}
                    </p>

                    <details className="text-gray-700 text-sm">
                      <summary className="cursor-pointer font-semibold mb-2">
                        Pause Details ({pauseIntervals.length} pauses, total{" "}
                        {formatTime(
                          pauseIntervals.reduce(
                            (acc, p) => acc + p.duration,
                            0
                          )
                        )}
                        )
                      </summary>
                      <ul className="list-disc list-inside space-y-1">
                        {pauseIntervals.map(({ start, end, duration }, idx) => (
                          <li key={idx}>
                            From {formatDateTime(start)} to {formatDateTime(end)} (
                            {formatDuration(duration)})
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                  <div className="flex flex-shrink-0 space-x-3 md:flex-col md:space-x-0 md:space-y-2">
                    <button
                      onClick={() => handleReuse({ subject, duration })}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition"
                      aria-label="Reuse timer"
                    >
                      Reuse
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition"
                      aria-label="Delete history entry"
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
