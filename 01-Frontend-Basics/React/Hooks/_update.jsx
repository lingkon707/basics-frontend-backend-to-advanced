import { useState } from "react";

export default function UpdateUser() {
  const [username, setUsername] = useState("");   // User input
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();           // Prevent page reload
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",          // Update existing user
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }), // Send updated username
      });

      if (!res.ok) throw new Error("Failed to update user");

      const data = await res.json();
      setMessage(`Username updated to: ${data.username}`);
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter new username"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Username"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
