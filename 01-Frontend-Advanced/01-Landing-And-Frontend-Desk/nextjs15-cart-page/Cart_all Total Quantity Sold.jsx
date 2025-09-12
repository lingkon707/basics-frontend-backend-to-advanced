"use client";

import React, { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Frozen Food",
    image: "https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png",
    description: "Premium frozen food products for everyday convenience.",
    price: 12.99,
  },
  {
    id: 2,
    name: "Cheer Up Banner",
    image: "https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png",
    description: "Vibrant banners to brighten up your day.",
    price: 8.5,
  },
  {
    id: 3,
    name: "PranUp KV",
    image: "https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png",
    description: "Healthy and tasty products from PranUp.",
    price: 10.0,
  },
];

export default function CartPage() {
  const [products] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [cash, setCash] = useState(100); // starting cash
  const [payment, setPayment] = useState("");
  const [orderHistory, setOrderHistory] = useState([]);
  const [message, setMessage] = useState("");

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setMessage("");
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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const confirmOrder = () => {
    const payAmount = parseFloat(payment);

    if (cartItems.length === 0) {
      setMessage("Cart is empty!");
      return;
    }

    if (isNaN(payAmount) || payAmount <= 0) {
      setMessage("Enter a valid payment amount!");
      return;
    }

    if (payAmount < total) {
      setMessage("Payment is less than total, cannot confirm order.");
      return;
    }

    if (payAmount > total) {
      setMessage(`Payment is extra. Return ${payAmount - total} Tk.`);
      return;
    }

    // Confirm order
    const totalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    setOrderHistory([
      ...orderHistory,
      {
        id: orderHistory.length + 1,
        subtotal: total,
        quantity: totalQuantity,
      },
    ]);

    setCash((prev) => prev + total);
    setCartItems([]);
    setPayment("");
    setMessage("✅ Order confirmed!");
  };

  const totalConfirmedOrders = orderHistory.length;
  const totalQuantitySold = orderHistory.reduce(
    (acc, order) => acc + order.quantity,
    0
  );

  return (
    <section className="bg-gray-950 min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-16 space-y-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Products Section */}
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
                  className="h-36 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-cyan-300">
                    {product.name}
                  </h3>
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

        {/* Cart Section */}
        <div className="bg-gray-900/90 rounded-xl shadow-lg p-5 space-y-5">
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

          {/* Payment Input */}
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Enter payment amount"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
            <button
              onClick={confirmOrder}
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

      {/* Dashboard Section */}
      <div className="max-w-7xl mx-auto bg-gray-900/90 rounded-xl shadow-lg p-5 space-y-5">
        <h2 className="text-3xl font-bold text-cyan-400">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-gray-300 font-semibold">Total Confirmed Orders</h3>
            <p className="text-cyan-300 font-bold text-lg">{totalConfirmedOrders}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-gray-300 font-semibold">Total Quantity Sold</h3>
            <p className="text-cyan-300 font-bold text-lg">{totalQuantitySold}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-gray-300 font-semibold">Cash Balance</h3>
            <p className="text-cyan-300 font-bold text-lg">{cash.toFixed(2)} Tk</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-gray-300 font-semibold">Last Subtotal</h3>
            <p className="text-cyan-300 font-bold text-lg">
              {orderHistory.length > 0 ? orderHistory[orderHistory.length - 1].subtotal.toFixed(2) : 0} $
            </p>
          </div>
        </div>

        {/* Order History List */}
        <div className="mt-5 p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-cyan-400 font-bold mb-2">Order History (First → Last)</h3>
          {orderHistory.length === 0 ? (
            <p className="text-gray-400 text-sm">No orders confirmed yet.</p>
          ) : (
            <ul className="list-decimal list-inside text-gray-300 text-sm">
              {orderHistory.map((order) => (
                <li key={order.id}>
                  Order {order.id}: Subtotal ${order.subtotal.toFixed(2)} — Quantity: {order.quantity}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
