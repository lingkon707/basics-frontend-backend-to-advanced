'use client';
import { useState } from 'react';

export default function Greeting({ name, age }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello {name} {age !== undefined ? `(${age})` : ''}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
