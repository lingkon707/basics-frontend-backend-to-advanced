'use client';

export default function FruitsList() {
  const fruits = ['Apple', 'Banana', 'Mango'];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
