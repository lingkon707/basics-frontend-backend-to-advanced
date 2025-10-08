# 🐱 Example API Call in React Using useEffect — Explained

This example shows how to fetch data from a free API (`Cat Facts`) in a React component, handle loading and error states, and display the data.

---

## Code Example

```jsx
import { useState, useEffect } from "react";

export default function CatFact() {
  const [fact, setFact] = useState("");         // Store the fetched cat fact
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);     // Track any error

  useEffect(() => {
    // Function to fetch API data
    const fetchCatFact = async () => {
      try {
        const res = await fetch("https://catfact.ninja/fact"); // API request
        if (!res.ok) throw new Error("Failed to fetch");       // Error handling
        const data = await res.json();                          // Parse JSON
        setFact(data.fact);                                     // Update fact state
      } catch (err) {
        setError(err.message);                                  // Update error state
      } finally {
        setLoading(false);                                      // Stop loading
      }
    };

    fetchCatFact(); // Call the API function
  }, []); // Empty dependency array → run only once on component mount

  // Conditional rendering based on loading/error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Render the fetched cat fact
  return <p>🐱 Cat Fact: {fact}</p>;
}
