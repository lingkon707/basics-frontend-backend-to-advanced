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
    if(user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // SIGNUP
  const signup = (name, email, password) => {
    const exists = allUsers.some(u => u.email === email);
    if (exists) {
      alert("Email already registered!");
      return;
    }
    const newUser = { name, email, password, type: null, blocked: false };
    const updatedUsers = [...allUsers, newUser];
    setAllUsers(updatedUsers);
    setUser(newUser);
    navigate("/user");
  };

  // LOGIN
  const login = (email, password) => {
    // Admin login
    if (email === "hello@gmail.com" && password === "1") {
      const adminUser = { name: "Admin", email, type: "admin", blocked: false };
      setUser(adminUser);
      navigate("/admin");
      return;
    }

    // Normal user login
    const existingUser = allUsers.find(
      u => u.email === email && u.password === password
    );

    if (existingUser) {
      if (existingUser.blocked) {
        alert("Your account is blocked. Contact admin.");
        return;
      }
      setUser(existingUser);
      navigate("/user");
    } else {
      alert("Invalid credentials!");
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
  };

  // UPDATE USER TYPE
  const updateUserType = (email, type) => {
    const updatedUsers = allUsers.map(u =>
      u.email === email ? { ...u, type } : u
    );
    setAllUsers(updatedUsers);
    if (user && user.email === email) setUser({ ...user, type });
  };

  // DELETE USER
  const deleteUser = (email) => {
    const updatedUsers = allUsers.filter(u => u.email !== email);
    setAllUsers(updatedUsers);
    if (user && user.email === email) setUser(null);
  };

  // BLOCK / UNBLOCK USER
  const toggleBlockUser = (email) => {
    const updatedUsers = allUsers.map(u => 
      u.email === email ? { ...u, blocked: !u.blocked } : u
    );
    setAllUsers(updatedUsers);
    if (user && user.email === email && updatedUsers.find(u => u.email === email).blocked) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        allUsers,
        signup,
        login,
        logout,
        updateUserType,
        deleteUser,
        toggleBlockUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
