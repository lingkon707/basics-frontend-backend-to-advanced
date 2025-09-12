'use client';

import React, { useState } from 'react';

const initialProducts = [
  {
    id: 101,
    name: 'Frozen Food',
    image: 'https://images.deliveryhero.io/image/darkstores/nv-global-catalog/bd/ab654f37-32de-4750-9c08-7de894ac0bfc.jpg?height=480',
    description: 'Premium frozen food products.',
    price: 12.99,
  },
  {
    id: 102,
    name: 'Cheer Up Banner',
     image: 'https://images.deliveryhero.io/image/darkstores/nv-global-catalog/bd/ab654f37-32de-4750-9c08-7de894ac0bfc.jpg?height=480',
    description: 'Vibrant banners for any occasion.',
    price: 8.5,
  },
  {
    id: 103,
    name: 'PranUp KV',
     image: 'https://images.deliveryhero.io/image/darkstores/nv-global-catalog/bd/ab654f37-32de-4750-9c08-7de894ac0bfc.jpg?height=480',
    description: 'Healthy and tasty products.',
    price: 10.0,
  },
];








export default function ShopCartPage() {
  const [products] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [payment, setPayment] = useState('');
  const [message, setMessage] = useState('');

  // Account Section states
  const [totalSell, setTotalSell] = useState(0);
  const [totalCash, setTotalCash] = useState(0);

  // Cart functions
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

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

  // Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  // Payment
  const checkoutHandler = () => {
    const pay = parseFloat(payment);
    if (isNaN(pay)) {
      setMessage('❌ Please enter a valid payment amount.');
    } else if (pay < total) {
      setMessage('⚠️ Payment is less than total. Order not submitted.');
    } else if (pay > total) {
      const refund = (pay - total).toFixed(2);
      setMessage(`✅ Order confirmed! Refund: $${refund}`);
      setTotalSell((prev) => prev + total);
      setTotalCash((prev) => prev + total); // only real sell counted
    } else {
      setMessage('✅ Order confirmed! Thank you for payment.');
      setTotalSell((prev) => prev + total);
      setTotalCash((prev) => prev + total);
    }

    setCartItems([]);
    setPayment('');
  };

  const netCash = totalCash; // after refunds we already count only net sell

  return (
    <section className="bg-gray-950 min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Products */}
        <div>
          <h1 className="text-3xl font-extrabold text-cyan-400 mb-6">
            Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900/80 rounded-xl shadow-md overflow-hidden text-sm hover:shadow-cyan-400/40 transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-cyan-300">{product.name}</h3>
                  <p className="text-gray-400 text-xs">{product.description}</p>
                  <p className="text-gray-200 font-semibold text-sm">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 text-sm font-semibold py-1.5 rounded-md transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cart + Order Summary */}
        <div className="bg-gray-900/90 rounded-xl shadow-lg p-5 space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-sm">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-gray-800 rounded-lg p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-cyan-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-100 text-sm"
                    >
                      -
                    </button>
                    <span className="px-2 text-gray-200 text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-100 text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-xs font-semibold text-gray-900 rounded-md"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Order Summary */}
          <div className="pt-3 border-t border-gray-700 space-y-2 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-100 font-bold text-base">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Enter payment amount"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
            <button
              onClick={checkoutHandler}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold py-2 rounded-md transition text-sm"
            >
              Confirm Order
            </button>
          </div>

          {message && (
            <p className="text-center text-sm font-semibold mt-3 text-cyan-300">
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Account Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-gray-900/95 rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Account Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Total Sell</p>
            <p className="text-xl font-bold text-cyan-300">
              ${totalSell.toFixed(2)}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Total Cash in Wallet</p>
            <p className="text-xl font-bold text-green-400">
              ${totalCash.toFixed(2)}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Net Cash After Sell</p>
            <p className="text-xl font-bold text-yellow-400">
              ${netCash.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

