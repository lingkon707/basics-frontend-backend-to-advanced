import { useState, useEffect } from "react";

export default function CatFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const res = await fetch("https://catfact.ninja/fact");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFact(data.fact);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCatFact();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <p>🐱 Cat Fact: {fact}</p>;
}
