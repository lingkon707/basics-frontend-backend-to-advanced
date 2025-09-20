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

  return `${startStr} - ${endStr} (${duration.trim()})`;
}

export default function ExperienceSection({ work }) {
  const sortedWork = [...work].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <h3 className="text-3xl font-bold text-center text-blue-800 mb-14">
        Professional Experience
      </h3>

      <div className="relative border-l-2 border-blue-500 pl-6 lg:pl-10 max-w-5xl mx-auto space-y-14">
        {sortedWork.map((job, i) => (
          <div key={`${job.company}-${i}`} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[22px] top-1 w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-md text-lg font-bold ring-4 ring-white">
              {job.company[0]}
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 transition duration-300 hover:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-500 mb-2">
                <span>{formatDateRange(job.startDate, job.endDate)}</span>
                {job.website && (
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 sm:mt-0 text-blue-600 hover:underline font-medium"
                  >
                    Visit Website
                  </a>
                )}
              </div>

              <h4 className="text-2xl font-semibold text-gray-800 mb-1">{job.position}</h4>
              <p className="text-blue-700 font-medium mb-3">{job.company}</p>

              <p className="text-gray-700">{job.summary}</p>

              {job.highlights?.length > 0 && (
                <ul className="list-disc list-inside mt-4 space-y-1 text-gray-600 text-sm">
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
