'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => { state.status = 'succeeded'; state.data = action.payload; })
      .addCase(fetchPosts.rejected, state => { state.status = 'failed'; });
  }
});

export default postsSlice.reducer;
