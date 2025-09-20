'use client'

export default function Input({ type = 'text', name, value, onChange, placeholder, className = '' }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded ${className}`}
    />
  )
}
