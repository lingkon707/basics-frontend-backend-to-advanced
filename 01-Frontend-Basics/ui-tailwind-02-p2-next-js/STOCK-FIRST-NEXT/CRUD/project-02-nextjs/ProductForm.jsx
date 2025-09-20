export default function ProductForm({
  name,
  price,
  setName,
  setPrice,
  handleSubmit,
  editingIndex,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow mb-8"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editingIndex !== null ? "Edit Product" : "Add New Product"}
      </h2>

      {/* Product Name Input */}
      <input
        type="text"
        placeholder="Product Name"
        className="w-full border p-2 mb-3 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Product Price Input */}
      <input
        type="number"
        placeholder="Price"
        className="w-full border p-2 mb-3 rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {editingIndex !== null ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
