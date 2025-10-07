'use client';

export default function Clicker() {
  const handleClick = () => alert('Button clicked!');
  return <button onClick={handleClick}>Click Me</button>;
}
