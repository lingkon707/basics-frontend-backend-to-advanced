import React, { useState, useEffect, useRef } from 'react';

const formatTime = (totalSeconds) => {
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
};

const formatMMSS = (totalSeconds) => {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};

const formatTimestamp = (ms) => new Date(ms).toLocaleTimeString();

const PauseHistoryList = ({ history }) => (
  <ul className="mt-2 max-h-32 overflow-y-auto list-disc list-inside text-sm text-left">
    {history.map((pause, i) => (
      <li key={i}>
        Start: {formatTimestamp(pause.start)}, End: {formatTimestamp(pause.end)}, Duration: {pause.duration} sec
      </li>
    ))}
  </ul>
);

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [pauseCount, setPauseCount] = useState(0);
  const [pauseTotal, setPauseTotal] = useState(0);
  const [pauseStart, setPauseStart] = useState(null);
  const [pauseHistory, setPauseHistory] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => {
    if (pauseStart) {
      const end = Date.now();
      const duration = Math.floor((end - pauseStart) / 1000);
      setPauseTotal(prev => prev + duration);
      setPauseHistory(prev => [...prev, { start: pauseStart, end, duration }]);
      setPauseStart(null);
    }
    setIsRunning(true);
  };

  const pause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    setPauseStart(Date.now());
    setPauseCount(prev => prev + 1);
  };

  const stop = () => {
    setIsRunning(false);
    setPauseStart(null);
  };

  const reset = () => {
    stop();
    setTime(0);
    setPauseCount(0);
    setPauseTotal(0);
    setPauseStart(null);
    setPauseHistory([]);
  };

  return (
    <div className="bg-white p-5 rounded shadow-md w-full sm:w-[350px]">
      <h2 className="text-xl font-semibold mb-2">Stopwatch</h2>
      <div className="text-3xl font-mono my-4">{formatTime(time)}</div>
      <div className="space-x-2">
        <button className="btn" onClick={start}>Start</button>
        <button className="btn" onClick={pause}>Pause</button>
        <button className="btn" onClick={stop}>Stop</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
      <div className="mt-4 text-sm text-left">
        <div>Paused: {pauseCount} times</div>
        <div>Total Pause Time: {pauseTotal} sec</div>
        <div className="font-semibold mt-2">Pause History:</div>
        <PauseHistoryList history={pauseHistory} />
      </div>
    </div>
  );
};

const Timer = () => {
  const [inputMin, setInputMin] = useState('');
  const [inputSec, setInputSec] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [pauseCount, setPauseCount] = useState(0);
  const [pauseTotal, setPauseTotal] = useState(0);
  const [pauseStart, setPauseStart] = useState(null);
  const [pauseHistory, setPauseHistory] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            alert("Time's up!");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => {
    if (timeLeft === 0) {
      const min = parseInt(inputMin) || 0;
      const sec = parseInt(inputSec) || 0;
      const total = min * 60 + sec;
      if (total === 0) return;
      setTimeLeft(total);
    }

    if (pauseStart) {
      const end = Date.now();
      const duration = Math.floor((end - pauseStart) / 1000);
      setPauseTotal(prev => prev + duration);
      setPauseHistory(prev => [...prev, { start: pauseStart, end, duration }]);
      setPauseStart(null);
    }

    setIsRunning(true);
  };

  const pause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    setPauseStart(Date.now());
    setPauseCount(prev => prev + 1);
  };

  const stop = () => {
    setIsRunning(false);
    setPauseStart(null);
  };

  const reset = () => {
    stop();
    setTimeLeft(0);
    setInputMin('');
    setInputSec('');
    setPauseCount(0);
    setPauseTotal(0);
    setPauseStart(null);
    setPauseHistory([]);
  };

  return (
    <div className="bg-white p-5 rounded shadow-md w-full sm:w-[350px]">
      <h2 className="text-xl font-semibold mb-2">Timer</h2>
      <div className="flex justify-center space-x-2 mb-2">
        <input
          type="number"
          className="w-16 p-1 border rounded text-center"
          placeholder="Min"
          value={inputMin}
          onChange={e => setInputMin(e.target.value)}
        />
        <input
          type="number"
          className="w-16 p-1 border rounded text-center"
          placeholder="Sec"
          value={inputSec}
          onChange={e => setInputSec(e.target.value)}
        />
      </div>
      <div className="text-3xl font-mono my-4">{formatMMSS(timeLeft)}</div>
      <div className="space-x-2">
        <button className="btn" onClick={start}>Start</button>
        <button className="btn" onClick={pause}>Pause</button>
        <button className="btn" onClick={stop}>Stop</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
      <div className="mt-4 text-sm text-left">
        <div>Paused: {pauseCount} times</div>
        <div>Total Pause Time: {pauseTotal} sec</div>
        <div className="font-semibold mt-2">Pause History:</div>
        <PauseHistoryList history={pauseHistory} />
      </div>
    </div>
  );
};

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Timer & Stopwatch with Pause Tracking</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <Stopwatch />
        <Timer />
      </div>
    </div>
  );
}
