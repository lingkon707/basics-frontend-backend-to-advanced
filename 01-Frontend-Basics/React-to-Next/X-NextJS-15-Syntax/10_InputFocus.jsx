'use client';
import { useRef } from 'react';

export default function InputFocus() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
