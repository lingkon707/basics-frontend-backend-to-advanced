'use client';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './01_Redux_StoreSetup';
import Counter from './03_Redux_Counter';

test('renders counter', () => {
  render(<Provider store={store}><Counter /></Provider>);
  expect(screen.getByText(/0/)).toBeInTheDocument();
});
