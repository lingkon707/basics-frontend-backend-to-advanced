import { useAuth } from "../context/AuthContext";

export default function UserView() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>

      {!user.type && (
        <div className="bg-yellow-100 p-4 rounded">Waiting for admin to assign your role...</div>
      )}

      {user.type === "buyer" && (
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="text-xl mb-2">Buyer Dashboard</h3>
          <p>Browse products and place orders here.</p>
        </div>
      )}

      {user.type === "seller" && (
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-xl mb-2">Seller Dashboard</h3>
          <p>Manage your products and orders here.</p>
        </div>
      )}
    </div>
  );
}
