'use client';
import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2>Timer: {time}</h2>;
}
