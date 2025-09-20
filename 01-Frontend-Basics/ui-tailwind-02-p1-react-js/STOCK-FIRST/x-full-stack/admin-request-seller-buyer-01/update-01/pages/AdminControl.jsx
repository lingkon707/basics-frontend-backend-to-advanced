import { useAuth } from "../context/AuthContext";

export default function AdminControl() {
  const { allUsers, updateUserType, deleteUser, toggleBlockUser } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Control</h2>
      <table className="w-full border rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map(u => (
            <tr key={u.email} className="border-b hover:bg-gray-100">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.type || "Not set"}</td>
              <td className="p-2">{u.blocked ? "Blocked" : "Active"}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => updateUserType(u.email, "buyer")} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Buyer</button>
                <button onClick={() => updateUserType(u.email, "seller")} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Seller</button>
                <button onClick={() => toggleBlockUser(u.email)} className={`px-3 py-1 rounded text-white ${u.blocked ? "bg-yellow-600 hover:bg-yellow-700" : "bg-yellow-500 hover:bg-yellow-600"}`}>
                  {u.blocked ? "Unblock" : "Block"}
                </button>
                <button onClick={() => deleteUser(u.email)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
