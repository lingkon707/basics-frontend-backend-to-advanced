import React, { useState, useEffect } from "react";

export default function OTPApp() {
  const [phone, setPhone] = useState("");
  const [sentOTP, setSentOTP] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [status, setStatus] = useState("");

  // Simulate auto-fill after OTP sent
  useEffect(() => {
    if (sentOTP) {
      const timer = setTimeout(() => {
        setOtpInput(sentOTP);
        setStatus("OTP auto-filled");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sentOTP]);

  // Check OTP match
  useEffect(() => {
    if (otpInput && sentOTP && otpInput === sentOTP) {
      setStatus("OTP success");
    }
  }, [otpInput, sentOTP]);

  function handleSendOTP() {
    if (!phone.match(/^\d{10,15}$/)) {
      setStatus("Enter a valid phone number");
      return;
    }
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setSentOTP(generatedOTP);
    setOtpInput("");
    setStatus("OTP sent");
  }

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Send OTP</h2>

      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
          marginBottom: 12,
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={handleSendOTP}
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        Send OTP
      </button>

      {sentOTP && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
            maxLength={6}
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              boxSizing: "border-box",
              marginBottom: 12,
            }}
          />
        </>
      )}

      <div
        style={{
          minHeight: 24,
          color: status === "OTP success" ? "green" : "red",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {status}
      </div>
    </div>
  );
}
