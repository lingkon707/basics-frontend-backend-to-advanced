'use client';
import { memo } from 'react';

const HeavyComponent = memo(({ number }) => {
  console.log('Rendering HeavyComponent');
  return <h2>{number}</h2>;
});

export default HeavyComponent;
