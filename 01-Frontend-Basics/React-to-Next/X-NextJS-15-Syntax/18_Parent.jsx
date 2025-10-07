'use client';
import { useState, useCallback } from 'react';
import Child from './CustomButton';

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => setCount(prev => prev + 1), []);

  return (
    <div>
      <Child onClick={handleClick} />
      <h2>Count: {count}</h2>
    </div>
  );
}
