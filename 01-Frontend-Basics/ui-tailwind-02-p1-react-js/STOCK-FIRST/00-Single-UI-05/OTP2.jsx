import React, { useState, useEffect, useRef } from "react";

export default function OTPMobileApp() {
  const [phone, setPhone] = useState("");
  const [sentOTP, setSentOTP] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [status, setStatus] = useState("");
  const otpInputRef = useRef(null);

  useEffect(() => {
    if (sentOTP) {
      setStatus("OTP sent. Auto-filling...");
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
      setStatus("✅ OTP Verified Successfully");
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
      setStatus("❌ Enter valid phone number");
      return;
    }
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setSentOTP(generatedOTP);
    setOtpInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🔐 OTP Login
        </h2>

        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700 block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="01XXXXXXXXX"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={15}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
        </div>

        <button
          onClick={handleSendOTP}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-base hover:bg-blue-700 transition mb-4"
        >
          Send OTP
        </button>

        {sentOTP && (
          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-700 block mb-1">
              Enter OTP
            </label>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otpInput}
              onChange={(e) => {
                if (/^\d{0,6}$/.test(e.target.value))
                  setOtpInput(e.target.value);
              }}
              maxLength={6}
              ref={otpInputRef}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
          </div>
        )}

        <p
          className={`text-center text-sm font-medium mt-4 ${
            status.includes("✅")
              ? "text-green-600"
              : status.includes("❌")
              ? "text-red-500"
              : "text-blue-600"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
