'use client';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne
  }
});

export const { addUser, updateUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
