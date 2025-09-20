'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const users = [
  { username: "police", password: "1234" },
  { username: "court", password: "123" },
  { username: "cia", password: "12" },
];

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      router.push(`/${user.username}`);
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="mx-10 my-10">
   
      <form className="bg-blue-500" onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
          className="text-white"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
          className="text-white"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p>{errorMessage}</p>}

        <button type="submit" className="bg-black text-white px-5 mx-2">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
