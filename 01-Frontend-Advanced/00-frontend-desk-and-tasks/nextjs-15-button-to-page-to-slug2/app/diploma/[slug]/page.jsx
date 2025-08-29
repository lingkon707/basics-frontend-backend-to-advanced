import { notFound } from "next/navigation";
import { stackDataWithPath } from "../stackData";

export default function DiplomaDetailPage({ params }) {
  const { slug } = params; // App Router passes param object

  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const item = stackDataWithPath.find((d) => toSlug(d.title) === slug);

  if (!item) return notFound();

  return (
    <main className="py-20 px-10">
      <div className={`${item.color} text-white p-8 rounded shadow-lg`}>
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <p className="mt-4 text-lg">{item.description}</p>

        <a
          href="/diploma"
          className="inline-block mt-6 bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
        >
          ⬅ Back to Diploma List
        </a>
      </div>
    </main>
  );
}
