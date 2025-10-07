'use client';
import { useContext } from 'react';
import { ThemeContext } from './ContextExample';

export default function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <h2>Theme: {theme}</h2>;
}
