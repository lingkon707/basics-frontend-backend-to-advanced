'use client';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'tsExample',
  initialState: { count: 0 },
  reducers: { increment: state => state.count += 1 }
});

export const { increment } = slice.actions;
export default slice.reducer;
