import React, { useState } from "react";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>}
      <button onClick={() => setLoggedIn(!loggedIn)}>Toggle Login</button>
    </div>
  );
}

export default Login;
