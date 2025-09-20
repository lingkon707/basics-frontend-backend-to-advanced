import React from 'react';
import content from './content1.json';


const Blog = () => {
  const {
    blogTitle,
    date,
    author,
    authorPhoto,
    blogThumbnail,
    heading,
    subHeading,
    content: blogContent
  } = content;

  return (
    <div className="blog-container" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      {/* Header */}
      <h1>{blogTitle}</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img 
          src={authorPhoto} 
          alt={author} 
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} 
        />
        <div>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{author}</p>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'gray' }}>{date}</p>
        </div>
      </div>

      {/* Blog Thumbnail */}
      <img 
        src={blogThumbnail} 
        alt="Blog thumbnail" 
        style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} 
      />

      {/* Headings */}
      <h2>{heading}</h2>
      <h4 style={{ color: '#666' }}>{subHeading}</h4>

      {/* Content */}
      {blogContent.map((paragraph, index) => (
        <p key={index} style={{ lineHeight: '1.6' }}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Blog;
