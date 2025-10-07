'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserById = createAsyncThunk('users/fetchById', async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
});

const slice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => { state.user = action.payload; });
  }
});

export default slice.reducer;
