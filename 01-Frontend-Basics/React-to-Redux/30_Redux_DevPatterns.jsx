'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Collection of small useful dev patterns:
 * - standardized async thunk with common error handling
 * - slice factory with namespacing helper
 */

/* Standardized async wrapper */
export function createStandardAsyncThunk(typePrefix, asyncFn) {
  return createAsyncThunk(typePrefix, async (arg, { rejectWithValue }) => {
    try {
      const res = await asyncFn(arg);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  });
}

/* Example: fetch posts using standardized thunk */
export const fetchPosts = createStandardAsyncThunk('dev/fetchPosts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
});

/* Slice factory: quick create a slice with common defaults */
export function createSimpleSlice({ name, initialState = {}, reducers = {}, extraReducers }) {
  return createSlice({
    name,
    initialState,
    reducers,
    extraReducers,
  });
}

/* Example slice usage */
const demoSlice = createSimpleSlice({
  name: 'demo',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {
    add: (s, a) => { s.items.push(a.payload); }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, s => { s.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (s, a) => { s.status = 'succeeded'; s.items = a.payload; })
      .addCase(fetchPosts.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload?.message || a.error?.message; });
  }
});

export const { add } = demoSlice.actions;
export default demoSlice.reducer;
