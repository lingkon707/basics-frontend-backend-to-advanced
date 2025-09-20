import React from "react";

const Profile = ({ data }) => {
  const { basics, work, education, skills, languages, certificates, awards, organizations } = data;

  return (
    <main className="bg-gradient-to-tr from-indigo-50 via-white to-teal-50 min-h-screen p-8 font-sans text-gray-900">
      {/* Container */}
      <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Header */}
        <header className="bg-indigo-700 text-white p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={basics.picture}
            alt={basics.name}
            onError={(e) => (e.target.src = basics.x_pictureFallback)}
            className="w-40 h-40 rounded-full border-4 border-teal-300 object-cover shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold tracking-tight">{basics.name}</h1>
            <p className="text-xl font-semibold mt-1 text-teal-200">{basics.label}</p>
            <p
              className="mt-5 max-w-xl leading-relaxed text-indigo-100"
              dangerouslySetInnerHTML={{ __html: basics.summary }}
            />
            <div className="mt-6 flex flex-wrap gap-6 items-center text-indigo-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-teal-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span className="text-lg">{basics.location.region}, {basics.location.country}</span>
              </div>
              {/* Profiles */}
              <nav className="flex flex-wrap gap-4 text-2xl">
                {basics.profiles.map(profile => (
                  <a
                    key={profile.network}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal-400 transition"
                    aria-label={profile.network}
                    title={profile.network}
                  >
                    <i className={`${profile.x_icon}`}></i>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>

        {/* Section Wrapper */}
        <section className="divide-y divide-gray-200">
          {/* Work Experience */}
          <section className="bg-indigo-50 px-10 py-12">
            <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-teal-400 pb-2 inline-block">
              Work Experience
            </h2>
            <div className="space-y-8">
              {work.map((job, idx) => (
                <article
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                  aria-label={`Worked as ${job.position} at ${job.company}`}
                >
                  <h3 className="text-2xl font-semibold text-indigo-700 hover:text-teal-500 transition">
                    <a href={job.website} target="_blank" rel="noreferrer">
                      {job.position} @ {job.company}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">
                    {job.startDate} — {job.endDate || "Present"}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{job.summary}</p>
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="list-disc list-inside mt-3 text-gray-600">
                      {job.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="bg-white px-10 py-12">
            <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-teal-400 pb-2 inline-block">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <article
                  key={idx}
                  className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
                  aria-label={`${edu.studyType} in ${edu.area} at ${edu.institution}`}
                >
                  <h3 className="text-2xl font-semibold text-indigo-700">
                    {edu.studyType} in {edu.area} — {edu.institution}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">
                    {edu.startDate} — {edu.endDate || "Present"}
                  </p>
                  {edu.courses && edu.courses.length > 0 && (
                    <>
                      <h4 className="font-semibold text-teal-600 mb-2">Courses:</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {edu.courses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="bg-indigo-50 px-10 py-12">
            <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-teal-400 pb-2 inline-block">
              Skills
            </h2>
            <ul className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold cursor-default flex items-center gap-2 shadow-sm hover:bg-teal-200 transition"
                  title={skill.x_description}
                >
                  <i className={skill.x_icon}></i> {skill.name}
                </li>
              ))}
            </ul>
          </section>

          {/* Languages */}
          <section className="bg-white px-10 py-12">
            <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-teal-400 pb-2 inline-block">
              Languages
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              {languages.map((lang, i) => (
                <li key={i}>
                  <span className="font-semibold">{lang.language}</span>: {lang.fluency}
                </li>
              ))}
            </ul>
          </section>

          {/* Certificates */}
          <section className="bg-indigo-50 px-10 py-12">
            <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-teal-400 pb-2 inline-block">
              Certificates
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert, i) => (
                <article
                  key={i}
                  className="flex bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition gap-6 items-center"
                  aria-label={`Certificate: ${cert.name}`}
                >
                  {cert.badge && (
                    <img
                      src={cert.badge}
                      alt={`${cert.name} badge`}
                      className="w-24 h-24 object-contain rounded-md"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-700 hover:text-teal-600 transition">
                      <a href={cert.url} target="_blank" rel="noreferrer">
                        {cert.name}
                      </a>
                    </h3>
                    <p className="text-gray-600 mt-1">Issuer: {cert.issuer}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Awards */}
          {awards && awards.length > 0 && (
            <section className="bg-white px-10 py-12">
              <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-teal-400 pb-2 inline-block">
                Awards
              </h2>
              <div className="space-y-8">
                {awards.map((award, i) => (
                  <article
                    key={i}
                    className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    aria-label={`Award: ${award.title}`}
                  >
                    <h3 className="text-2xl font-semibold text-indigo-700">{award.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {award.awarder} — {award.date}
                    </p>
                    <p>{award.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Organizations */}
          {organizations && organizations.length > 0 && (
            <section className="bg-indigo-50 px-10 py-12">
              <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-teal-400 pb-2 inline-block">
                Organizations
              </h2>
              <div className="space-y-8">
                {organizations.map((org, i) => (
                  <article
                    key={i}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    aria-label={`Organization: ${org.name}`}
                  >
                    <h3 className="text-2xl font-semibold text-indigo-700">{org.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {org.position} ({org.startDate} — {org.endDate || "Present"})
                    </p>
                    <p>{org.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </section>
      </div>
    </main>
  );
};

export default Profile;
