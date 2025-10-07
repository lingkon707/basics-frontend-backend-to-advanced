'use client';

export default function Profile({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
}
