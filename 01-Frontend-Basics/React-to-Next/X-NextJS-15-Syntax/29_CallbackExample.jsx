'use client';
import { useState, useCallback } from 'react';

export default function CallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(prev => prev + 1), []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h2>{count}</h2>
    </div>
  );
}
