import React from "react";

function Clicker() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}

export default Clicker;
