import React from "react";

// Reusable Button component
export function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Usage in App
function App() {
  return <Button label="Click Me" onClick={() => alert("Clicked!")} />;
}

export default App;
