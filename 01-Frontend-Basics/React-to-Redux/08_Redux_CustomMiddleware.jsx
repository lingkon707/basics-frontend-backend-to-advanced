'use client';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  return next(action);
};

const slice = createSlice({ name: 'test', initialState: { value: 0 }, reducers: { increment: state => state.value += 1 } });

export const store = configureStore({
  reducer: slice.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware)
});
