import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; }
  }
});

const store = configureStore({ reducer: counterSlice.reducer });

function Counter() {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
