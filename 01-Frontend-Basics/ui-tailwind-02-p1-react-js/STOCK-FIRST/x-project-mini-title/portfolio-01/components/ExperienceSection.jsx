import React from "react";

function formatDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  const options = { year: "numeric", month: "short" };

  const startStr = start.toLocaleDateString("en-GB", options);
  const endStr = end ? end.toLocaleDateString("en-GB", options) : "Present";

  // Calculate duration
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
  // Sort descending by startDate
  const sortedWork = [...work].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section className="p-8 md:p-16 bg-white">
      <h3 className="text-3xl font-semibold text-blue-900 mb-8">Professional Experience</h3>
      <div className="flex flex-col space-y-8">
        {sortedWork.map((job, i) => (
          <div
            key={`${job.company}-${i}`}
            className="border-l-4 border-teal-600 pl-6 relative group"
          >
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -left-10 top-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg hover:bg-teal-700 transition"
              title={job.company}
            >
              {job.company[0]}
            </a>
            <div className="mb-1 text-sm text-gray-500">{formatDateRange(job.startDate, job.endDate)}</div>
            <h4 className="text-xl font-semibold text-gray-900">{job.position}</h4>
            <p className="font-medium text-teal-700">{job.company}</p>
            <p className="mt-2 text-gray-700">{job.summary}</p>
            {job.highlights?.length > 0 && (
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {job.highlights.map((hl, idx) => (
                  <li key={idx}>{hl}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
