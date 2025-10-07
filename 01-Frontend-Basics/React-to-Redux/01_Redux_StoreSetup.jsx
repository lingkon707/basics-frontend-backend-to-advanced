'use client';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './02_Redux_Slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

export default store;
