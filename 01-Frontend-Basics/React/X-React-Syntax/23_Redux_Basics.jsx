import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    default: return state;
  }
}

const store = createStore(reducer);

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
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
