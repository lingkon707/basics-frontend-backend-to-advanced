// Context example
import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

function Display() {
  const count = useContext(CountContext);
  return <h2>Count: {count}</h2>;
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={count}>
      <Display />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </CountContext.Provider>
  );
}

export default App;

// Redux vs Context: Context simpler, Redux better for complex global state
