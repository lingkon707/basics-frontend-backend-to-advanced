import React, { useState } from 'react';

const ProductSearch = () => {
  const products = [
    { name: 'Apple', price: 100 },
    { name: 'Banana', price: 40 },
    { name: 'Orange', price: 60 },
    { name: 'Mango', price: 120 },
    { name: 'Pineapple', price: 150 }
  ];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
