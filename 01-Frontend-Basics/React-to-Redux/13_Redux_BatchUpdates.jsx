'use client';
import { batch } from 'react-redux';
import { increment, reset } from './02_Redux_Slice';

export function batchUpdate(dispatch) {
  batch(() => {
    dispatch(increment());
    dispatch(reset());
  });
}
