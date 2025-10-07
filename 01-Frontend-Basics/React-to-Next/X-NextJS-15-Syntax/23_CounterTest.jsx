'use client';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './01_Counter';

test('increments counter', () => {
  render(<Counter />);
  const button = screen.getByText('Increment');
  fireEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
});
