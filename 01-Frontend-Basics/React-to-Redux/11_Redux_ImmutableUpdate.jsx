'use client';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'immutable',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => { state.items.push(action.payload); },
    removeItem: (state, action) => { state.items = state.items.filter(i => i !== action.payload); }
  }
});

export const { addItem, removeItem } = slice.actions;
export default slice.reducer;
