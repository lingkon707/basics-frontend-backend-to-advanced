import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">MyApp</div>
      <div className="space-x-4">
        {user ? (
          <>
            {user.type === "admin" && <Link to="/admin" className="hover:text-yellow-300">Admin</Link>}
            {user.type !== "admin" && <Link to="/user" className="hover:text-yellow-300">Dashboard</Link>}
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-yellow-300">Login</Link>
            <Link to="/signup" className="hover:text-yellow-300">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
