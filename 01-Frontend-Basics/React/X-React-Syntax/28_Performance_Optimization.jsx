import React, { memo } from "react";

const HeavyComponent = memo(({ number }) => {
  console.log("Rendering HeavyComponent");
  return <h2>{number}</h2>;
});

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <HeavyComponent number={count} />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

export default App;
