import React from "react";

function Spain({ children }) {
  const { Capital, President } = children;
  return (
    <div className="border p-4 rounded shadow mb-4 max-w-sm">
      <h2 className="text-xl font-bold mb-2">Spain</h2>
      <p><strong>Capital:</strong> {Capital}</p>
      <p><strong>Prime Minister:</strong> {President}</p>
    </div>
  );
}

export default Spain;
