'use client';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({ name: 'counter', initialState: { value: 0 }, reducers: { increment: state => state.value += 1 } });
const themeSlice = createSlice({ name: 'theme', initialState: { mode: 'light' }, reducers: { toggle: state => state.mode = state.mode === 'light' ? 'dark' : 'light' } });

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, theme: themeSlice.reducer }
});
