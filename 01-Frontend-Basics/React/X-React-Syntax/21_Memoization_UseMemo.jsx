import React, { useMemo, useState } from "react";

function ExpensiveCalculation({ number }) {
  const result = useMemo(() => {
    console.log("Calculating...");
    return number * 2; // Simulate heavy calculation
  }, [number]);

  return <h2>Result: {result}</h2>;
}

export default ExpensiveCalculation;
