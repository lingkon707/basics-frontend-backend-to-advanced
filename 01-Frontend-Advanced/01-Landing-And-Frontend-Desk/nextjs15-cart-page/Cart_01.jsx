'use client';
import { useState } from 'react';

export default function ProductCartPage() {
  const [cart, setCart] = useState([]);

  // Example products
  const products = [
    {
      id: 1,
      name: 'Potato Crackers',
      price: 50,
      image:
        'https://pbil.in/wp-content/uploads/2025/05/2024-04-22___Potato-Cracker-shop-sign-board-design-for-India-market-8X4-scaled.png',
    },
    {
      id: 2,
      name: 'Noodles Pack',
      price: 120,
      image:
        'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    },
    {
      id: 3,
      name: 'Beverage Bottle',
      price: 90,
      image:
        'https://www.pranfoods.net/sites/default/files/2023-08/BEVERAGE.jpeg',
    },
  ];

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item, index) => index !== id));
  };

  // Calculate Total
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-indigo-700">
        🛒 Product & Cart Page
      </h1>

      {/* Product Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">৳ {product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Section */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">৳ {item.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total */}
        {cart.length > 0 && (
          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold text-indigo-700">
              ৳ {totalPrice}
            </span>
          </div>
        )}
      </section>
    </main>
  );
}
