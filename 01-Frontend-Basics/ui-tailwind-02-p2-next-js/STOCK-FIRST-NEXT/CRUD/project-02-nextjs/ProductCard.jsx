export default function ProductCard({ product, index, handleEdit, handleDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
      </div>

      {/* Edit & Delete Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => handleEdit(index)}
          className="flex-1 bg-yellow-400 text-white p-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="flex-1 bg-red-500 text-white p-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
