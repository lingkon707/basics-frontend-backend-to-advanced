import { useAuth } from "../context/AuthContext";

export default function AdminControl() {
  const { allUsers, updateUserType } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Control</h2>
      <table className="w-full border rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map(u => (
            <tr key={u.email} className="border-b hover:bg-gray-100">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.type || "Not set"}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => updateUserType(u.email, "buyer")} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Buyer</button>
                <button onClick={() => updateUserType(u.email, "seller")} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Seller</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
