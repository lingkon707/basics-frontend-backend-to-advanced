'use client';
import { useMemo } from 'react';

export default function ExpensiveCalculation({ number }) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return number * 2;
  }, [number]);

  return <h2>Result: {result}</h2>;
}
