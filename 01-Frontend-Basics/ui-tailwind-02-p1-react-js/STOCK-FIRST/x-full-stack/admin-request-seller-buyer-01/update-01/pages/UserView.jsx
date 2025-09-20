import { useAuth } from "../context/AuthContext";

const products = [
  {
    name: "Orange",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Orange.jpg",
  },
  {
    name: "Persimmons",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Persimmons.jpg",
  },
  {
    name: "White Peach",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/White_Peach.jpg",
  },
  {
    name: "Clementine Orange",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Clementine_Orange.jpg",
  },
  {
    name: "Golden Berry",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Golden_Berry.jpg",
  },
  {
    name: "Muskmelon",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Muskmelon.jpg",
  },
  {
    name: "Papaya",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Papaya.jpg",
  },
  {
    name: "Apricots",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Apricots.jpg",
  },
  {
    name: "Mangoes",
    image: "https://www.fruitsmith.com/pub/media/wysiwyg/Mangoes.jpg",
  },
];

const sellerStamps = [
  "https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg",
  "https://img.freepik.com/photos-premium/jeune-homme-isole-bleu_1368-124991.jpg?semt=ais_hybrid&w=740&q=80",
  "https://t4.ftcdn.net/jpg/13/59/11/25/360_F_1359112582_xvEcVjeK5wH61QCVaPuNjyuf5cTm10NF.jpg",
  "https://img.freepik.com/premium-photo/handsome-smiling-man-pointing-themselves-isolated-gray-background_146377-7504.jpg",
];

export default function UserView() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>

      {!user.type && (
        <div className="bg-yellow-100 p-4 rounded">
          Waiting for admin to assign your role...
        </div>
      )}

      {user.type === "buyer" && (
        <div className="bg-blue-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Browse Fruits - Buyer Page</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded shadow p-2 border hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded"
                />
                <h4 className="mt-2 text-center font-medium">{product.name}</h4>
                <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {user.type === "seller" && (
        <div className="bg-green-50 p-4 rounded shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Seller Page, Product Listings</h3>
            <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
              + Add New Product
            </button>
          </div>
          <div className="flex mb-4 gap-2">
            {sellerStamps.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt="Seller Stamp"
                className="w-10 h-10 rounded-full border-2 border-green-400"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded shadow p-2 border hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded"
                />
                <h4 className="mt-2 text-center font-medium">{product.name}</h4>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-yellow-500 text-white py-1 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
