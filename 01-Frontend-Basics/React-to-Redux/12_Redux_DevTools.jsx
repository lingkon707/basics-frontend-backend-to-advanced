'use client';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({ name: 'dev', initialState: { value: 0 }, reducers: { increment: state => state.value += 1 } });

export const store = configureStore({ reducer: slice.reducer, devTools: true });
