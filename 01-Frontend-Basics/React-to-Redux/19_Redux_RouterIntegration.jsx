'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function RouterCounter() {
  const count = useSelector(state => state.counter.value);
  const router = useRouter();

  return <button onClick={() => router.push('/about')}>Count: {count} - Go About</button>;
}
