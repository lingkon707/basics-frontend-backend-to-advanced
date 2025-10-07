'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetch', async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (err) {
    throw new Error('Failed to fetch');
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => { state.status = 'loading'; })
      .addCase(fetchData.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload; })
      .addCase(fetchData.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message; });
  }
});

export default dataSlice.reducer;
