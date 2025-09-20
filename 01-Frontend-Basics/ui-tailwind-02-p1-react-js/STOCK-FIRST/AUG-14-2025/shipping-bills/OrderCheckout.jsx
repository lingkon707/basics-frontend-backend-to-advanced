import React, { useState } from 'react';

const OrderCheckout = () => {
  const shippingOptions = {
    insideDhaka: {
      label: 'Inside Dhaka (ঢাকার ভিতর)',
      cost: 60,
    },
    outsideDhaka: {
      label: 'Outside Dhaka (ঢাকার বাইরে)',
      cost: 100,
    },
  };

  const product = {
    name: 'দলিল যার জমি তার বই',
    quantity: 1,
    price: 490,
  };

  const [selectedShipping, setSelectedShipping] = useState('insideDhaka');

  const shippingCost = shippingOptions[selectedShipping].cost;
  const subtotal = product.quantity * product.price;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md grid md:grid-cols-2 gap-10 p-10">
        {/* Shipping Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Shipping</h2>
          <div className="space-y-4">
            {Object.entries(shippingOptions).map(([key, option]) => (
              <label
                key={key}
                className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
                  selectedShipping === key
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    value={key}
                    checked={selectedShipping === key}
                    onChange={() => setSelectedShipping(key)}
                    className="accent-blue-600 w-5 h-5"
                  />
                  <span className="text-md font-medium">{option.label}</span>
                </div>
                <span className="text-md font-semibold">{option.cost.toFixed(2)}৳</span>
              </label>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Your Order</h2>
          <div className="space-y-4 text-gray-800 text-md">
            {/* Product Row */}
            <div className="flex justify-between font-medium border-b pb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span>{product.name} × {product.quantity}</span>
              <span>{(product.price * product.quantity).toFixed(2)}৳</span>
            </div>
            {/* Subtotal */}
            <div className="flex justify-between border-b py-2">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)}৳</span>
            </div>
            {/* Shipping */}
            <div className="flex justify-between border-b py-2">
              <span>Shipping</span>
              <span>{shippingCost.toFixed(2)}৳</span>
            </div>
            {/* Total */}
            <div className="flex justify-between font-bold text-lg py-2">
              <span>Total</span>
              <span>{total.toFixed(2)}৳</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Cash on delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCheckout;
