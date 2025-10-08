import { useState, useEffect } from "react";

export default function FetchUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return <div>{user ? user.name : "Loading..."}</div>;
}
