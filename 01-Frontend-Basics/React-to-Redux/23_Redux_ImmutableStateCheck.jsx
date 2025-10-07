'use client';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'check',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => { state.items.push(action.payload); },
  }
});

export const { addItem } = slice.actions;
export default slice.reducer;
