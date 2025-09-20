import content from '@/app/content.json';
import { slugify } from '@/app/utils/slugify';

export default function PersonDetailPage({ params }) {
  
  const { slug } = params;
  
  // console.log('Slug param:', slug);
  // console.log('Persons data:', content.persons);

  // const personData = content.persons.find((p) => slugify(p.Name) === slug);
  const personData = content.persons.find(
  (p) => slugify(p.Name).toLowerCase() === slug.toLowerCase().trim()
);


  if (!personData) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold text-lg">
        Person not found
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 bg-gradient-to-tr from-indigo-50 via-white to-indigo-50 rounded-3xl shadow-xl">
      {/* Photo and Name */}
      <div className="flex items-center space-x-6 mb-12">
        <img
          src={personData.Photo}
          alt={`${personData.Name} photo`}
          className="w-20 h-20 rounded-full object-cover border-4 border-indigo-300 shadow-md"
          loading="lazy"
        />
        <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
          {personData.Name}
        </h1>
      </div>

      {/* Person Details Table */}
      <div className="bg-white rounded-2xl shadow-md p-8 border border-indigo-100">
        <dl className="grid grid-cols-2 gap-y-6 gap-x-12 text-indigo-900 text-lg font-medium">
          <div>
            <dt className="text-indigo-700 font-semibold">Room Number:</dt>
            <dd>{personData.RoomNumber || 'N/A'}</dd>
          </div>
          <div>
            <dt className="text-indigo-700 font-semibold">District:</dt>
            <dd>{personData.District || 'N/A'}</dd>
          </div>
          <div>
            <dt className="text-indigo-700 font-semibold">Mobile Number:</dt>
            <dd>{personData.MobileNumber || 'N/A'}</dd>
          </div>
          <div>
            <dt className="text-indigo-700 font-semibold">Floor:</dt>
            <dd>{personData.Floor || 'N/A'}</dd>
          </div>
          <div>
            <dt className="text-indigo-700 font-semibold">Join Date:</dt>
            <dd>{personData.JoinDate || 'N/A'}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
