import React from 'react';
import content from './content2.json';

const Blog = () => {
  const {
    blogTitle,
    date,
    author,
    authorPhoto,
    blogThumbnail,
    heading,
    subHeading,
    content: blogContent,
    tags
  } = content;

  return (
    <div className="bg-white text-gray-800 px-4 py-10 md:px-20">
      {/* Blog Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 leading-tight">{blogTitle}</h1>

        {/* Author Section */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={authorPhoto}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>

        {/* Featured Image */}
        <img
          src={blogThumbnail}
          alt="Blog Thumbnail"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Intro Headings */}
        <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
        <h4 className="text-lg text-gray-600 mb-6">{subHeading}</h4>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          {blogContent.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === 'heading') {
              return <h3 key={index} className="text-xl font-semibold mt-6">{block.text}</h3>;
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-blue-400 pl-4 italic text-gray-600"
                >
                  {block.text}
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        {/* Tags Section */}
        {tags && (
          <div className="mt-10">
            <h4 className="text-md font-semibold text-gray-700 mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
