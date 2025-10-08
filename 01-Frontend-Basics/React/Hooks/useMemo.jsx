import { useState, useMemo } from "react";

export default function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 1000;
  }, [count]);

  return (
    <div>
      <p>Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
