'use client';
import { Suspense, lazy } from 'react';

const LazyLoaded = lazy(() => import('./CustomButton'));

export default function LazyComponent() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <LazyLoaded />
    </Suspense>
  );
}
