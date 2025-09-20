import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState(() => {
    const storedUsers = localStorage.getItem("allUsers");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [adminLogs, setAdminLogs] = useState(() => {
    const logs = localStorage.getItem("adminLogs");
    return logs ? JSON.parse(logs) : [];
  });

  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }, [allUsers]);

  useEffect(() => {
    if(user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("adminLogs", JSON.stringify(adminLogs));
  }, [adminLogs]);

  // Helper for admin activity
  const addAdminLog = (action) => {
    const newLog = { action, date: new Date().toLocaleString() };
    setAdminLogs(prev => [...prev, newLog]);
  };

  const signup = (name, email, password) => {
    if(allUsers.some(u => u.email === email)){
      toast.error("Email already exists");
      return;
    }
    const newUser = { name, email, password, type: null, blocked: false };
    setAllUsers([...allUsers, newUser]);
    setUser(newUser);
    toast.success("Signup successful");
    navigate("/user");
  };

  const login = (email, password) => {
    if(email === "hello@gmail.com" && password === "1"){
      const adminUser = { name: "Admin", email, type: "admin", blocked: false };
      setUser(adminUser);
      toast.success("Admin login success");
      navigate("/admin");
      return;
    }

    const existingUser = allUsers.find(u => u.email === email && u.password === password);
    if(existingUser){
      if(existingUser.blocked){
        toast.error("Your account is blocked");
        return;
      }
      setUser(existingUser);
      toast.success("Login successful");
      navigate("/user");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    toast.info("Logged out");
    navigate("/login");
  };

  const updateUserType = (email, type) => {
    const updatedUsers = allUsers.map(u => u.email === email ? {...u, type} : u);
    setAllUsers(updatedUsers);
    if(user?.email === email) setUser({...user, type});
    addAdminLog(`Updated ${email} role to ${type}`);
  };

  const deleteUser = (email) => {
    setAllUsers(allUsers.filter(u => u.email !== email));
    if(user?.email === email) setUser(null);
    addAdminLog(`Deleted user ${email}`);
    toast.info(`Deleted user ${email}`);
  };

  const toggleBlockUser = (email) => {
    const updatedUsers = allUsers.map(u => u.email === email ? {...u, blocked: !u.blocked} : u);
    setAllUsers(updatedUsers);
    if(user?.email === email && updatedUsers.find(u => u.email === email).blocked) setUser(null);
    addAdminLog(`${email} ${updatedUsers.find(u => u.email === email).blocked ? "blocked" : "unblocked"}`);
  };

  return (
    <AuthContext.Provider value={{
      user, allUsers, signup, login, logout,
      updateUserType, deleteUser, toggleBlockUser,
      adminLogs
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
