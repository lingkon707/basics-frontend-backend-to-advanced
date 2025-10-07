import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <Child onClick={handleClick} />
      <h2>Count: {count}</h2>
    </div>
  );
}

export default Parent;
