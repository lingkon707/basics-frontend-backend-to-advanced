import React, { useState } from 'react';

const OrderModal = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-[#d7e1f9] p-6 rounded-lg w-full max-w-md shadow-lg">

        {/* Shipping Section */}
        <h2 className="text-lg font-bold mb-4 text-blue-900">SHIPPING</h2>
        <div className="space-y-3 mb-6">
          {Object.entries(shippingOptions).map(([key, option]) => (
            <label
              key={key}
              className={`flex justify-between items-center p-3 border rounded cursor-pointer ${
                selectedShipping === key ? 'border-blue-700 bg-white' : 'border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  value={key}
                  checked={selectedShipping === key}
                  onChange={() => setSelectedShipping(key)}
                />
                <span>{option.label}</span>
              </div>
              <span>{option.cost.toFixed(2)}৳</span>
            </label>
          ))}
        </div>

        {/* Order Summary */}
        <h2 className="text-lg font-bold mb-2 text-blue-900">YOUR ORDER</h2>
        <div className="text-sm text-gray-800 mb-4">
          <div className="flex justify-between font-medium">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div className="flex justify-between mt-2">
            <span>
              {product.name} × {product.quantity}
            </span>
            <span>{(product.price * product.quantity).toFixed(2)}৳</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)}৳</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>{total.toFixed(2)}৳</span>
          </div>
        </div>

        {/* Payment Method */}
        <button className="w-full py-2 bg-white text-black border border-gray-300 rounded shadow text-center font-medium hover:bg-gray-100">
          Cash on delivery
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
