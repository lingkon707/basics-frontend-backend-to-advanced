import React from "react";

function UK({ children }) {
  const { Capital, President } = children;
  return (
    <div className="border p-4 rounded shadow mb-4 max-w-sm">
      <h2 className="text-xl font-bold mb-2">UK</h2>
      <p><strong>Capital:</strong> {Capital}</p>
      <p><strong>Prime Minister:</strong> {President}</p>
    </div>
  );
}

export default UK;
