'use client';
import { useState } from 'react';

export default function FormValidation() {
  const [email, setEmail] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!email.includes('@')) alert('Invalid email!');
    else alert(`Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
