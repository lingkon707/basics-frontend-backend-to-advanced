import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    text: "This is a testimonial text from John.",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Jane Smith",
    text: "This is a testimonial from Jane.",
  },
  // Add more testimonial objects here
];

const filterCategories = ["All", "Category1", "Category2"];

const pages = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  // Testimonials modal state
  const [modalActive, setModalActive] = useState(false);
  const [modalTestimonial, setModalTestimonial] = useState(null);

  // Filter state
  const [filter, setFilter] = useState("all");

  // Form state
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const [formValid, setFormValid] = useState(false);

  // Navigation state
  const [activePage, setActivePage] = useState("home");

  // Form validation effect
  useEffect(() => {
    const isValid =
      formValues.name.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formValues.email);
    setFormValid(isValid);
  }, [formValues]);

  // Filtered items example
  const filteredItems = testimonialsData.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform transition-transform ${
          sidebarActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex-shrink-0`}
      >
        <div className="p-4 font-bold text-xl border-b border-gray-700">
          Sidebar Menu
        </div>
        <nav className="p-4 space-y-2">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`block w-full text-left px-3 py-2 rounded ${
                activePage === page.id ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header with sidebar toggle button */}
        <header className="flex items-center justify-between p-4 bg-gray-100 border-b md:hidden">
          <button
            onClick={() => setSidebarActive(!sidebarActive)}
            className="p-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            ☰
          </button>
          <h1 className="text-xl font-bold">React + Tailwind Demo</h1>
          <div />
        </header>

        {/* Pages */}
        <main className="p-4 flex-1 overflow-auto">
          {activePage === "home" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>

              {/* Filter select */}
              <div className="mb-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border px-3 py-1 rounded"
                >
                  {filterCategories.map((cat) => (
                    <option key={cat.toLowerCase()} value={cat.toLowerCase()}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Testimonials list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setModalTestimonial(item);
                      setModalActive(true);
                    }}
                    className="cursor-pointer border p-4 rounded hover:shadow-lg"
                  >
                    <img
                      src={item.avatar}
                      alt={item.title}
                      className="w-20 h-20 rounded-full mx-auto mb-2"
                    />
                    <h3 className="text-center font-semibold">{item.title}</h3>
                    <p className="text-sm text-center">{item.text.slice(0, 50)}...</p>
                  </div>
                ))}
              </div>

              {/* Modal */}
              {modalActive && modalTestimonial && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded p-6 max-w-md w-full relative">
                    <button
                      onClick={() => setModalActive(false)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                      ✕
                    </button>
                    <img
                      src={modalTestimonial.avatar}
                      alt={modalTestimonial.title}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-center mb-2">
                      {modalTestimonial.title}
                    </h3>
                    <p className="text-center">{modalTestimonial.text}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activePage === "about" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p>This is the About page content.</p>
            </div>
          )}

          {activePage === "contact" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-md"
                noValidate
              >
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    value={formValues.name}
                    onChange={(e) =>
                      setFormValues({ ...formValues, name: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={!formValid}
                  className={`px-4 py-2 rounded text-white ${
                    formValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
