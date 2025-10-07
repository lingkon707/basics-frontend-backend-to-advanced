'use client';

export default function CustomButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
