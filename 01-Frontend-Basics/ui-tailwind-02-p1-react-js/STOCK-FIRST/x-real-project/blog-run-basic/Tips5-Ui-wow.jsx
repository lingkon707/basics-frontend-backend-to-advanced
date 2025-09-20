import React from "react";

// Blog data object with new fields added
const blogData = {
  title: "5 tips for your success",
  author: {
    name: "John Doe",
    image:
      "https://cdn.pixabay.com/photo/2018/08/18/16/23/indian-man-3615047_1280.jpg", // example author image URL
  },
  publishDate: "August 12, 2025",
  blogThumbnail: {
    url: "https://pbil.in/wp-content/uploads/2025/05/2024-04-22___Potato-Cracker-shop-sign-board-design-for-India-market-8X4-scaled.png",
    alt: "Success concept image",
  },
  intro:
    "To ensure that you can celebrate your personal successes, we have summarized 5 tips that will help you achieve your goals!",
  tips: [
    {
      id: 1,
      title: "Go the extra mile",
      content:
        "The bigger your goals are, the more time and energy you have to invest in achieving them. Be willing to put other aspects of your life on the back burner for a period of time. Maybe you’re putting up with a lot of sleepless nights to work on your idea or missing the family party because of an important investors’ appointment. With the extra mile, you not only run a marathon, but also overcome detours, hurdles and even falls.",
    },
    {
      id: 2,
      title: "Lifelong learning",
      content:
        "Learning is a lifelong process, because there will never be a moment when one knows and can do everything personally or professionally. For your own success, it is important that you are open to input and feedback, as well as evaluating information and making it useful to you. Use the exchange with others to benefit from their experiences and not to imitate their mistakes. At the same time, it is also important to learn from your own experiences in order not to repeat mistakes and to be able to continue what has been successful.",
    },
    {
      id: 3,
      title: "Focus your challenges",
      content:
        "To be successful, you must not shy away from your individual challenges. You may face unpleasant, arduous or seemingly unsolvable situations that make you doubt not only your goal, but also yourself. Focus consciously on your challenges, deal with the situation and determine the next steps! In difficult phases that challenge you personally, it is important to exchange ideas with your peers in order to be strengthened on a professional and personal level.",
    },
    {
      id: 4,
      title: "Prioritize your health",
      content:
        "While you are mastering your challenges, investing extra time and energy, continuously learning and developing, you should not forget your own physical and mental health. Being successful also means giving yourself intentional breaks and recharging your own battery. Whether it’s a day with the family, a weekend at a cabin, or a workout – you need to find the right balance for yourself to get closer to your goals and not ‘burn out’ at the same time.",
    },
    {
      id: 5,
      title: "Get out of your comfort zone",
      content:
        "Successful people are courageous and willing to grow beyond themselves. This means stepping out of the familiar, the safe and the controllable and thereby consciously leaving the comfort zone. The most important and probably most difficult thing is to overcome the fear zone, then to proceed through the learning zone and finally to profit from your personal development in the growth zone. With the new skills and abilities, your comfort zone expands and things that previously caused great uncertainty become a habit.",
    },
  ],
};

export default function BlogDetails() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{blogData.title}</h1>

      {/* Author info and publish date */}
      <div className="flex items-center mb-8 space-x-4">
        <img
          src={blogData.author.image}
          alt={`${blogData.author.name} avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-900 font-semibold">{blogData.author.name}</p>
          <p className="text-gray-500 text-sm">{blogData.publishDate}</p>
        </div>
      </div>

      {/* Blog Thumbnail */}
      <div className="mb-8">
        <img
          src={blogData.blogThumbnail.url}
          alt={blogData.blogThumbnail.alt}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-10">{blogData.intro}</p>

      {/* Tips */}
      <div className="space-y-10">
        {blogData.tips.map((tip) => (
          <section
            key={tip.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              {tip.id}. {tip.title}
            </h2>
            <p className="text-gray-800 leading-relaxed">{tip.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
