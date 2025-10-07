'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './11_Redux_ImmutableUpdate';

export default function FormRedux() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => { e.preventDefault(); dispatch(addItem(value)); setValue(''); };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
}
