import React from "react";

function formatDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  const options = { year: "numeric", month: "short" };

  const startStr = start.toLocaleDateString("en-GB", options);
  const endStr = end ? end.toLocaleDateString("en-GB", options) : "Present";

  const now = new Date();
  const endForCalc = end || now;
  const months =
    (endForCalc.getFullYear() - start.getFullYear()) * 12 +
    (endForCalc.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  let duration = "";
  if (years > 0) duration += `${years} yr${years > 1 ? "s" : ""} `;
  if (remMonths > 0) duration += `${remMonths} mo`;
  duration = duration.trim();

  return `${startStr} - ${endStr} (${duration})`;
}

export default function ExperienceSection({ work }) {
  const sortedWork = [...work].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section className="p-8 md:p-16 bg-gray-100">
      <h3 className="text-3xl font-bold text-center text-blue-800 mb-14">
        Professional Experience
      </h3>

      <div className="relative border-l-4 border-blue-600 ml-4 space-y-12 max-w-4xl mx-auto">
        {sortedWork.map((job, i) => (
          <div key={`${job.company}-${i}`} className="pl-8 relative group">
            {/* Dot */}
            <div className="absolute -left-[14px] top-1 w-7 h-7 bg-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-sm font-semibold">
              {job.company[0]}
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-center mb-1 text-sm text-gray-500">
                <span>{formatDateRange(job.startDate, job.endDate)}</span>
                {job.website && (
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Visit Site
                  </a>
                )}
              </div>

              <h4 className="text-xl font-semibold text-gray-800">{job.position}</h4>
              <p className="text-blue-700 font-medium">{job.company}</p>

              <p className="mt-3 text-gray-700">{job.summary}</p>

              {job.highlights?.length > 0 && (
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-600">
                  {job.highlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
