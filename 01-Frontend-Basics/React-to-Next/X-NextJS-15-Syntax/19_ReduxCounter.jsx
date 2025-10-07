'use client';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store';

export default function ReduxCounter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
