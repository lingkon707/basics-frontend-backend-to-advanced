'use client';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as counterActions from './02_Redux_Slice';

/**
 * Small helpers to simplify usage across app:
 * - useAppDispatch: typed dispatch (in TS)
 * - useAppSelector: wrapper around useSelector
 * - useCounterActions: bind actions to dispatch
 */

/* For JS: simple wrappers */
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

export function useCounterActions() {
  const dispatch = useDispatch();
  // bindActionCreators available from redux but RTK re-exports helpers; we'll use simple binding:
  return {
    increment: (...args) => dispatch(counterActions.increment(...args)),
    reset: (...args) => dispatch(counterActions.reset?.(...args)),
  };
}

/* Example component usage:
const count = useAppSelector(state => state.counter.value);
const { increment } = useCounterActions();
*/
