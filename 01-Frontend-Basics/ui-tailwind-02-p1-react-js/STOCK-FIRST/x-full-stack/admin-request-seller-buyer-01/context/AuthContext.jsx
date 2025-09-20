import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Load users from localStorage or initialize empty
  const [allUsers, setAllUsers] = useState(() => {
    const storedUsers = localStorage.getItem("allUsers");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  // Load current user from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Save all users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }, [allUsers]);

  // Save current user to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // SIGNUP
  const signup = (name, email, password) => {
    const exists = allUsers.some(u => u.email === email);
    if (exists) {
      alert("Email already registered!");
      return;
    }
    const newUser = { name, email, password, type: null };
    const updatedUsers = [...allUsers, newUser];
    setAllUsers(updatedUsers);
    setUser(newUser);
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/user");
  };

  // LOGIN
  const login = (email, password) => {
    // Admin login
    if (email === "admin@example.com" && password === "admin") {
      const adminUser = { name: "Admin", email, type: "admin" };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      navigate("/admin");
      return;
    }

    // Normal user login
    const existingUser = allUsers.find(
      u => u.email === email && u.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem("user", JSON.stringify(existingUser));
      navigate("/user");
    } else {
      alert("Invalid credentials!");
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // remove only current user, not all users
    navigate("/login");
  };

  // UPDATE USER TYPE (admin function)
  const updateUserType = (email, type) => {
    const updatedUsers = allUsers.map(u =>
      u.email === email ? { ...u, type } : u
    );
    setAllUsers(updatedUsers);

    // Update current logged-in user if needed
    if (user && user.email === email) {
      const updatedUser = { ...user, type };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, allUsers, signup, login, logout, updateUserType }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
