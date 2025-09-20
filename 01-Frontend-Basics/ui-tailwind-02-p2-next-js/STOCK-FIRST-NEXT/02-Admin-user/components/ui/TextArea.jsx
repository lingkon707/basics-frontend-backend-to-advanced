'use client'

export default function TextArea({ name, value, onChange, placeholder, className = '' }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded ${className}`}
      rows="4"
    />
  )
}
