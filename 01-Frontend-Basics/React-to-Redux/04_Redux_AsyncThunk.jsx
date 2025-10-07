'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => { state.status = 'loading'; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, state => { state.status = 'failed'; });
  }
});

export default usersSlice.reducer;
