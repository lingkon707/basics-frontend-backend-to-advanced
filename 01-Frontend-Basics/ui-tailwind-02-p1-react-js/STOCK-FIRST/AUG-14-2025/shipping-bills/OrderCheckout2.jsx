import React, { useState } from "react";

const OrderCheckout = () => {
  const shippingOptions = {
  insideDhaka: { label: "Inside Dhaka (ঢাকার ভিতর)", cost: 60 },
  outsideDhaka: { label: "Outside Dhaka (ঢাকার বাইরে)", cost: 100 },
};

  const product = {
    name: "দলিল যার জমি তার বই",
    quantity: 1,
    price: 490,
  };

  const [selectedShipping, setSelectedShipping] = useState("insideDhaka");

  const shippingCost = shippingOptions[selectedShipping].cost;
  const subtotal = product.price * product.quantity;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white max-w-4xl w-full rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Shipping Options */}
        <section className="md:w-1/2 p-10 bg-indigo-50">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">Shipping</h2>
          <div className="space-y-6">
            {Object.entries(shippingOptions).map(([key, option]) => (
              <label
                key={key}
                className={`flex justify-between items-center cursor-pointer rounded-lg p-5 border-2 transition-shadow
                  ${
                    selectedShipping === key
                      ? "border-indigo-600 bg-white shadow-md"
                      : "border-transparent hover:border-indigo-300 bg-indigo-50"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="shipping"
                    value={key}
                    checked={selectedShipping === key}
                    onChange={() => setSelectedShipping(key)}
                    className="accent-indigo-600 w-6 h-6"
                  />
                  <span className="text-lg font-semibold text-indigo-900">
                    {option.label}
                  </span>
                </div>
                <span className="text-indigo-800 font-semibold text-lg">
                  {option.cost.toFixed(2)}৳
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Order Summary */}
        <section className="md:w-1/2 p-10 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-8">Your Order</h2>

            <div className="text-gray-700 space-y-6 text-lg">
              <div className="flex justify-between font-semibold border-b pb-2">
                <span>Product</span>
                <span>Subtotal</span>
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <span>
                  {product.name} × {product.quantity}
                </span>
                <span>{(product.price * product.quantity).toFixed(2)}৳</span>
              </div>

              <div className="flex justify-between border-b py-2">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)}৳</span>
              </div>

              <div className="flex justify-between border-b py-2">
                <span>Shipping</span>
                <span>{shippingCost.toFixed(2)}৳</span>
              </div>

              <div className="flex justify-between font-extrabold text-indigo-900 text-2xl py-2">
                <span>Total</span>
                <span>{total.toFixed(2)}৳</span>
              </div>
            </div>
          </div>

          <button
            className="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-4 rounded-lg font-bold shadow-lg"
            type="button"
          >
            Cash on Delivery
          </button>
        </section>
      </div>
    </div>
  );
};

export default OrderCheckout;
