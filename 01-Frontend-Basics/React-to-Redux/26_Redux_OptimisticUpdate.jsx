'use client';
import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Pattern: apply optimistic update first, then call server.
 * On failure — rollback to previous state.
 */

/* Async call to update an item on server */
export const updateItemOnServer = createAsyncThunk(
  'items/updateOnServer',
  async ({ id, changes }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/api/items/${id}`, changes);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState: { items: [], error: null },
  reducers: {
    /* Optimistic update: apply immediately */
    optimisticUpdate: (state, action) => {
      const { id, changes } = action.payload;
      const idx = state.items.findIndex(i => i.id === id);
      if (idx !== -1) {
        state.items[idx] = { ...state.items[idx], ...changes, __optimistic: true };
      }
    },
    /* Rollback using previous payload (full previous item) */
    rollbackUpdate: (state, action) => {
      const { previous } = action.payload;
      const idx = state.items.findIndex(i => i.id === previous.id);
      if (idx !== -1) {
        state.items[idx] = previous;
      }
    },
    addItemLocal: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateItemOnServer.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.items.findIndex(i => i.id === updated.id);
        if (idx !== -1) {
          state.items[idx] = updated; // replace with server-canonical
        }
      })
      .addCase(updateItemOnServer.rejected, (state, action) => {
        state.error = action.payload?.message || 'Update failed';
      });
  }
});

export const { optimisticUpdate, rollbackUpdate, addItemLocal } = itemsSlice.actions;

/* Example store */
export const store = configureStore({
  reducer: { items: itemsSlice.reducer },
});

/* Example usage (pseudo):
const previous = store.getState().items.items.find(i=>i.id===42);
dispatch(optimisticUpdate({id:42, changes:{name:'New'}}));
dispatch(updateItemOnServer({id:42, changes:{name:'New'}})).unwrap().catch(()=>{
  dispatch(rollbackUpdate({ previous }));
});
*/
