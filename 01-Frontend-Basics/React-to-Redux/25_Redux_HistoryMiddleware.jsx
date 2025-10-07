'use client';
import { createSlice, configureStore } from '@reduxjs/toolkit';

/**
 * History middleware + slice.
 * Middleware captures dispatched actions and stores a lightweight history by dispatching addHistory.
 * To avoid infinite loops, middleware ignores the addHistory action.
 */

/* Simple history slice */
const historySlice = createSlice({
  name: 'history',
  initialState: { actions: [] },
  reducers: {
    addHistory: (state, action) => {
      // store limited info to avoid heavy payloads
      const entry = {
        type: action.payload.type,
        time: Date.now(),
        meta: action.payload.meta || null,
      };
      state.actions.unshift(entry);
      if (state.actions.length > 50) state.actions.pop();
    },
    clearHistory: (state) => { state.actions = []; },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;

/* Middleware that records actions */
const historyMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  if (action.type !== addHistory.type) {
    storeAPI.dispatch(addHistory({ type: action.type }));
  }
  return result;
};

/* Example other slice */
const slice = createSlice({
  name: 'sample',
  initialState: { value: 0 },
  reducers: { inc: (s) => { s.value += 1; } },
});

export const { inc } = slice.actions;

export const store = configureStore({
  reducer: {
    sample: slice.reducer,
    history: historySlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(historyMiddleware),
});
