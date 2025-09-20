import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminControl from "./pages/AdminControl";
import UserView from "./pages/UserView";

function ProtectedRoute({ children, admin }) {
  const { user } = useAuth();
  if(!user) return <Navigate to="/login" />;
  if(admin && user.type !== "admin") return <Navigate to="/user" />;
  return children;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute admin>
              <AdminControl />
            </ProtectedRoute>
          } />
          <Route path="/user" element={
            <ProtectedRoute>
              <UserView />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
