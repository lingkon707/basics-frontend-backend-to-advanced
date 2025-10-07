'use client';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { createSlice } from '@reduxjs/toolkit';

/**
 * Using redux-persist for rehydration across reloads.
 */

/* Example slice */
const settingsSlice = createSlice({
  name: 'settings',
  initialState: { theme: 'light' },
  reducers: {
    setTheme: (s, a) => { s.theme = a.payload; },
  },
});

export const { setTheme } = settingsSlice.actions;

/* Persist config */
const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['settings'], // only persist settings slice
};

const persistedReducer = persistReducer(persistConfig, settingsSlice.reducer);

export const store = configureStore({
  reducer: {
    settings: persistedReducer,
  },
  // Note: when combining multiple persisted reducers, you typically use combineReducers
});

export const persistor = persistStore(store);

/* In app root, wrap with PersistGate (from redux-persist/integration/react) to delay rendering until rehydration */
