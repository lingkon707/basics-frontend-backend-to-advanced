import React from "react";

const Profile = ({ data }) => {
  const { basics, work, education, skills, languages, certificates, awards, organizations } = data;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg my-10 font-sans text-gray-900">
      {/* Basics */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        <img
          src={basics.picture}
          alt={basics.name}
          onError={(e) => (e.target.src = basics.x_pictureFallback)}
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600 shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-1">{basics.name}</h1>
          <h2 className="text-indigo-600 text-xl mb-4">{basics.label}</h2>
          <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: basics.summary }}></p>
          <p className="mb-4 text-sm text-gray-600">
            Location: <span className="font-semibold">{basics.location.region}, {basics.location.country}</span>
          </p>
          <div className="flex gap-4 flex-wrap">
            {basics.profiles.map(profile => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition"
                title={profile.network}
              >
                <i className={`${profile.x_icon}`}></i> <span className="hidden sm:inline">{profile.network}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">Work Experience</h3>
        <div className="space-y-6">
          {work.map((job, i) => (
            <article
              key={i}
              className="p-5 border border-gray-200 rounded-md hover:shadow-lg transition"
              aria-label={`Work at ${job.company} as ${job.position}`}
            >
              <h4 className="text-xl font-semibold text-indigo-700">
                {job.position}{" "}
                <a href={job.website} target="_blank" rel="noreferrer" className="hover:underline text-indigo-600">
                  @ {job.company}
                </a>
              </h4>
              <p className="text-gray-500 text-sm mb-2">
                {job.startDate} - {job.endDate || "Present"}
              </p>
              <p className="leading-relaxed">{job.summary}</p>
              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {job.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">Education</h3>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <article key={i} className="p-5 border border-gray-200 rounded-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-700">
                {edu.studyType} in {edu.area} - {edu.institution}
              </h4>
              <p className="text-gray-500 text-sm mb-2">
                {edu.startDate} - {edu.endDate || "Present"}
              </p>
              {edu.courses && edu.courses.length > 0 && (
                <div>
                  <strong className="block mb-1">Courses:</strong>
                  <ul className="list-disc list-inside text-gray-700">
                    {edu.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">Skills</h3>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <li
              key={i}
              title={skill.x_description}
              className="flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full shadow-sm hover:bg-indigo-200 transition cursor-default"
            >
              <i className={skill.x_icon}></i> {skill.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">Languages</h3>
        <ul className="list-disc list-inside text-gray-700">
          {languages.map((lang, i) => (
            <li key={i}>
              <strong>{lang.language}</strong> — {lang.fluency}
            </li>
          ))}
        </ul>
      </section>

      {/* Certificates */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">Certificates</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <article
              key={i}
              className="p-5 border border-gray-200 rounded-md hover:shadow-lg transition flex items-center gap-4"
            >
              {cert.badge && (
                <img
                  src={cert.badge}
                  alt={`${cert.name} badge`}
                  className="w-20 h-20 object-contain rounded-md"
                />
              )}
              <div>
                <h4 className="text-lg font-semibold text-indigo-700 hover:underline">
                  <a href={cert.url} target="_blank" rel="noreferrer">
                    {cert.name}
                  </a>
                </h4>
                <p className="text-gray-600 text-sm">Issuer: {cert.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Awards */}
      {awards && awards.length > 0 && (
        <section className="mb-10">
          <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">Awards</h3>
          <div className="space-y-6">
            {awards.map((award, i) => (
              <article key={i} className="p-5 border border-gray-200 rounded-md hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-indigo-700">{award.title}</h4>
                <p className="text-gray-600 text-sm mb-2">
                  {award.awarder} - {award.date}
                </p>
                <p>{award.summary}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Organizations */}
      {organizations && organizations.length > 0 && (
        <section className="mb-10">
          <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2 mb-6">Organizations</h3>
          <div className="space-y-6">
            {organizations.map((org, i) => (
              <article key={i} className="p-5 border border-gray-200 rounded-md hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-indigo-700">{org.name}</h4>
                <p className="text-gray-600 text-sm mb-2">
                  {org.position} ({org.startDate} - {org.endDate || "Present"})
                </p>
                <p>{org.summary}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
