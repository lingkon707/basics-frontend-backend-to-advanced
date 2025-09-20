import React from "react";

function UK({ children }) {
  const { blogName, date, author, topic, org, capital, president } = children;

  return (
    <div className="border p-4 rounded shadow bg-blue-100 mb-4">
      <h2 className="text-xl font-bold text-blue-900"> UK - {org}</h2>
      <p><strong>Blog:</strong> {blogName}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Topic:</strong> {topic}</p>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>President:</strong> {president}</p>
    </div>
  );
}


export default UK;
