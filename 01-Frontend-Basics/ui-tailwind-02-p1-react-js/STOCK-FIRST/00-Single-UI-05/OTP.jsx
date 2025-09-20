import React, { useState, useEffect, useRef } from "react";

export default function OTPApp() {
  const [phone, setPhone] = useState("");
  const [sentOTP, setSentOTP] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [status, setStatus] = useState("");
  const otpInputRef = useRef(null);

  useEffect(() => {
    if (sentOTP) {
      setStatus("OTP sent, waiting for auto-fill...");
      const timer = setTimeout(() => {
        setOtpInput(sentOTP);
        setStatus("OTP auto-filled ✅");
        otpInputRef.current?.focus();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sentOTP]);

  useEffect(() => {
    if (otpInput && sentOTP && otpInput === sentOTP) {
      setStatus("OTP success 🎉");
    }
  }, [otpInput, sentOTP]);

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,15}$/.test(val)) {
      setPhone(val);
      setStatus("");
    }
  };

  const handleSendOTP = () => {
    if (!phone || phone.length < 10) {
      setStatus("Please enter a valid phone number (10+ digits).");
      return;
    }
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setSentOTP(generatedOTP);
    setOtpInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
        Mobile OTP Verification
      </h2>

      <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={handlePhoneChange}
        maxLength={15}
        className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        onClick={handleSendOTP}
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Send OTP
      </button>

      {sentOTP && (
        <>
          <label className="block text-gray-700 font-semibold mt-6 mb-2">Enter OTP</label>
          <input
            type="text"
            placeholder="6-digit OTP"
            value={otpInput}
            onChange={(e) => {
              if (/^\d{0,6}$/.test(e.target.value)) setOtpInput(e.target.value);
            }}
            maxLength={6}
            ref={otpInputRef}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </>
      )}

      <p
        className={`mt-6 text-center font-semibold ${
          status === "OTP success 🎉"
            ? "text-green-600"
            : status.includes("sent") || status.includes("auto-filled")
            ? "text-blue-600"
            : "text-red-600"
        }`}
      >
        {status}
      </p>
    </div>
  );
}
