'use client';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './02_Redux_Slice';

export default function CounterHooks() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
