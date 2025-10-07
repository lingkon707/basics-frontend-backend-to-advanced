'use client';
import { createSlice, configureStore } from '@reduxjs/toolkit';

/**
 * App-level reset action: dispatch `resetApp()` to reset many slices.
 * Each slice listens for the `resetApp` action (using extraReducers).
 */

export const appResetSlice = createSlice({
  name: 'appReset',
  initialState: {},
  reducers: {
    resetApp: (state, action) => state, // action creator only — reducer noop
  },
});

export const { resetApp } = appResetSlice.actions;

/* Example counter slice that resets on resetApp */
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (s) => { s.value += 1; },
  },
  extraReducers: (builder) => {
    builder.addCase(resetApp, () => ({ value: 0 }));
  },
});

export const { increment } = counterSlice.actions;

/* Example store exporting reset action */
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
