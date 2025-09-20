import content from './Data';

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6">
        <div className="flex items-center justify-between container mx-auto">
          <h1 className="text-2xl">{content.header.title}</h1>
          <div className="space-x-4">
            {content.header.categories.map((category, idx) => (
              <button
                key={idx}
                className="text-white hover:bg-blue-500 px-4 py-2 rounded-md"
              >
                {category}
              </button>
            ))}
            <button className="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto my-10 px-4">
        {/* Documentation Categories */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Documentation Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.documentation.categories.map((category, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="text-blue-600">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Video Playlist Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Video Playlist</h2>
          <div className="space-y-6">
            {content.videoPlaylists.featured.map((playlist, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/default-thumbnail.jpg"
                    alt={playlist.title}
                    className="h-16 w-16 object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{playlist.title}</h3>
                  <a href={playlist.videoLink} className="text-blue-600 hover:underline">Watch Now</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Support Center. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
