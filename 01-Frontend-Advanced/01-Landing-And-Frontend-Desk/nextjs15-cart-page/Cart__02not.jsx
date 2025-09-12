'use client';

import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    name: 'Frozen Food',
   image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Premium frozen food products for everyday convenience.',
    price: 12.99,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Cheer Up Banner',
    image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Vibrant banners to brighten up your day.',
    price: 8.5,
    quantity: 2,
  },
  {
    id: 3,
    name: 'PranUp KV',
    image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Healthy and tasty products from PranUp.',
    price: 10.0,
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  // Quantity handlers
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Order calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5.99 : 0; // Flat shipping
  const total = subtotal + shipping;

  // Checkout handler (dummy)
  const checkoutHandler = () => {
    alert('Checkout is not implemented yet!');
  };

  return (
    <section className="bg-gray-950 min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-cyan-400 mb-12 drop-shadow-lg">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-300 text-center text-lg">Your cart is empty.</p>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center gap-4 bg-gray-900/80 rounded-3xl shadow-lg p-5 hover:shadow-cyan-400/50 transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-cyan-300">{item.name}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                    <p className="text-gray-200 font-semibold">Price: ${item.price.toFixed(2)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-1 rounded-lg font-semibold"
                      >
                        -
                      </button>
                      <span className="text-gray-200 font-medium px-2">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-1 rounded-lg font-semibold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto bg-red-500 hover:bg-red-600 text-gray-900 px-3 py-1 rounded-lg font-semibold transition-all duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-900/80 rounded-3xl shadow-lg p-6 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-cyan-400">Order Summary</h2>
            <div className="flex justify-between text-gray-300 font-medium">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-300 font-medium">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-200 font-bold text-xl border-t border-gray-700 pt-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={checkoutHandler}
              className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
