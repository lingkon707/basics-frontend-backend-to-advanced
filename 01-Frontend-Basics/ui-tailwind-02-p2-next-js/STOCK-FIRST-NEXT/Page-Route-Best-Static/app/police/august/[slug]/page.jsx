import { slugify } from '@/slugify'; // Adjust import if needed
import { notFound } from 'next/navigation';

const blogs = [
  { title: 'Crime in Sector 21', content: 'Details about Sector 21 incident' },
  { title: 'Robbery in Market', content: 'Details about the robbery' },
  { title: 'Cyber Crime Increase', content: 'Details on cyber crimes' }
];

export default function BlogDetails({ params }) {
  const blog = blogs.find((b) => slugify(b.title) === params.slug);

  if (!blog) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg">{blog.content}</p>
    </div>
  );
}
