'use client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

/**
 * Code-splitting reducers: reducer manager pattern.
 * Allows adding reducers dynamically when a route/component loads.
 */

function createReducerManager(initialReducers) {
  const reducers = { ...initialReducers };
  let combined = combineReducers(reducers);
  let keysToRemove = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      return combined(state, action);
    },
    add: (key, reducer) => {
      if (!key || reducers[key]) return;
      reducers[key] = reducer;
      combined = combineReducers(reducers);
    },
    remove: (key) => {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      keysToRemove.push(key);
      combined = combineReducers(reducers);
    }
  };
}

/* initial store with an empty placeholder reducer */
const staticReducers = {};
const reducerManager = createReducerManager(staticReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
});

// attach manager so app code can call store.reducerManager.add(...)
store.reducerManager = reducerManager;

/* Usage:
import somethingReducer from './somethingSlice';
store.reducerManager.add('something', somethingReducer);
*/
