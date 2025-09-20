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

const reviews = [
  { name: 'Naya Citizen', review: 'The taste was amazing! My family loved it.' },
  { name: 'Beauty Cook', review: 'Best product I’ve tried in years. Worth every penny.' },
  { name: 'Cook with Xeni', review: 'Great flavor and quality, would highly recommend!' }
];

const faq = [
  { question: 'How can I order products?', answer: 'You can shop directly on our website.' },
  { question: 'Where do you deliver?', answer: 'We deliver to all major cities.' },
  { question: 'Do you offer bulk discounts?', answer: 'Yes, we do. Please contact customer support.' }
];

const App = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Flavor That Feeds The Soul And The Community</h1>
        <p className="text-lg mb-6">Every bite tells a story of inclusion, togetherness, and giving back.</p>
        <a href="#products" className="bg-yellow-500 text-black py-2 px-6 rounded-full text-xl">Download Brochure</a>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Satisfy Every Craving - Discover Our Flavorful Range</h2>
        <div className="flex justify-center space-x-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-md w-64">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-md"/>
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-lg text-gray-600">{product.price}</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded-full">Shop Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">{vision.title}</h2>
        <p className="text-lg max-w-4xl mx-auto">{vision.visionText}</p>
        <p className="text-lg max-w-4xl mx-auto mt-4">{vision.missionText}</p>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews - The Voice of Quality</h2>
        <div className="flex justify-center space-x-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-md w-64">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-lg text-gray-600 mt-4">{review.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="max-w-3xl mx-auto bg-gray-200 p-4 rounded-md">
              <h4 className="text-xl font-semibold">{item.question}</h4>
              <p className="text-lg text-gray-600 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
