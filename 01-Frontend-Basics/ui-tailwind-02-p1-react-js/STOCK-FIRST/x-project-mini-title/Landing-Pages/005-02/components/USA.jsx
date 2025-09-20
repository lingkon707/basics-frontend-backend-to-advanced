import React from "react";

function USA({ children }) {
  const { blogName, date, Capital, President } = children;
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">USA</h2>
      <p><strong>Blog:</strong> {blogName}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Capital:</strong> {Capital}</p>
      <p><strong>President:</strong> {President}</p>
    </div>
  );
}

export default USA;
