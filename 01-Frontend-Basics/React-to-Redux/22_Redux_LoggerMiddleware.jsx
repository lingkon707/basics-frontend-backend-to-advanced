'use client';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const logger = store => next => action => {
  console.log('Action:', action);
  return next(action);
};

const slice = createSlice({ name: 'log', initialState: { val: 0 }, reducers: { increment: state => state.val += 1 } });

export const store = configureStore({ reducer: slice.reducer, middleware: getDefault => getDefault().concat(logger) });
