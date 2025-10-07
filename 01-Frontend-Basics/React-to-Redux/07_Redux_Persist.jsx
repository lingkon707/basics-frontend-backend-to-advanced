'use client';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './02_Redux_Slice';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
