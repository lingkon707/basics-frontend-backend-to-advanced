import React from "react";

const App = () => {
  return (
    <div className="bg-white text-gray-900 font-sans scroll-smooth">

      

     

     
      <section className="min-h-screen snap-start bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Travel Stories</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Experience our journeys through visual storytelling and immersive articles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              img: "https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg",
              title: "Exploring Asia's Secret Beaches",
            },
            {
              img: "https://newsroom.aaa.com/wp-content/uploads/2021/06/Plane-taking-off-twilight-1024x684.jpg",
              title: "Backpacking Europe in 30 Days",
            },
            {
              img: "https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg",
              title: "Cultural Journeys in the Alps",
            },
          ].map((blog, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img src={blog.img} alt={blog.title} className="w-full h-60 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default App;
