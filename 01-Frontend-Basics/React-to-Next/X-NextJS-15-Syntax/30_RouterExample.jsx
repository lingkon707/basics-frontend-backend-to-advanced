'use client';
import Link from 'next/link';

export default function RouterExample() {
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </nav>
  );
}
