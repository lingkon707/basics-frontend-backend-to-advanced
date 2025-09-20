import React from 'react';

const products = [
  { name: 'Cilantro Lime', price: '$50', imageUrl: 'https://www.dccbazar.com.bd/images/detailed/8/71Drb_lWlfL._SL1500_.jpg' },
  { name: 'Corn Bread', price: '$45', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/608588179928623.6501f0213467b.jpg' },
  { name: 'Spanish Rice', price: '$65', imageUrl: 'https://www.lays.com/sites/lays.com/files//2019-09/Lightly%20Salted%20Classic.png' },
];

const vision = {
  title: 'Our Vision and Mission',
  visionText: 'To create the best flavors while making a positive impact on communities.',
  missionText: 'Our mission is to provide families with premium, flavorful meals that bring people together.'
};

const App = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Flavor That Feeds The Soul And The Community
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Every bite tells a story of inclusion, togetherness, and giving back.
        </p>
        <a
          href="#products"
          className="bg-yellow-400 hover:bg-yellow-300 text-black py-3 px-8 rounded-full text-xl shadow-lg transition"
        >
          Download Brochure
        </a>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Satisfy Every Craving - Discover Our Flavorful Range
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition transform duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{product.price}</p>
                <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded-full transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{vision.title}</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">{vision.visionText}</p>
        <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-700">{vision.missionText}</p>
      </section>
    </div>
  );
};

export default App;
