'use client';
import { useMemo } from 'react';

export default function MemoizationExample({ number }) {
  const double = useMemo(() => number * 2, [number]);
  return <h2>Double: {double}</h2>;
}
