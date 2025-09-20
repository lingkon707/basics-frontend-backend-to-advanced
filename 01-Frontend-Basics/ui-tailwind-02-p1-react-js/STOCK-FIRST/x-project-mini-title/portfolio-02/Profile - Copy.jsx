import React from "react";

const Profile = ({ data }) => {
  const { basics, work, education, skills, languages, certificates, awards, organizations } = data;

  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-900 via-indigo-800 to-purple-900 text-gray-100 font-sans flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="md:w-1/3 bg-blue-950 flex flex-col items-center py-12 px-6 relative">
        <img
          src={basics.picture}
          alt={basics.name}
          onError={(e) => (e.target.src = basics.x_pictureFallback)}
          className="w-44 h-44 rounded-full border-4 border-coral-400 shadow-lg object-cover mb-6"
        />
        <h1 className="text-4xl font-extrabold tracking-wide mb-1">{basics.name}</h1>
        <p className="text-coral-400 uppercase tracking-wider font-semibold mb-6">{basics.label}</p>

        <p
          className="text-center px-4 text-sm text-blue-200 mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: basics.summary }}
        />

        <div className="flex flex-col space-y-4 text-coral-400 text-3xl sticky top-40">
          {basics.profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-coral-600 transition"
              aria-label={profile.network}
            >
              <i className={`${profile.x_icon}`}></i>
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 text-blue-300 text-center text-sm select-none">
          {basics.location.region}, {basics.location.country}
        </div>
      </aside>

      {/* Right Content */}
      <section className="md:w-2/3 overflow-y-auto max-h-screen p-8 space-y-14 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950">
        {/* Work Timeline */}
        <section>
          <h2 className="text-3xl uppercase text-coral-400 tracking-widest font-bold mb-8 border-b-2 border-coral-400 w-fit">
            Work Experience
          </h2>
          <div className="relative border-l-4 border-coral-400 ml-4 pl-8 space-y-10">
            {work.map((job, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-7 top-2 bg-coral-400 rounded-full w-5 h-5 border-2 border-blue-900 shadow-lg"></span>
                <h3 className="text-xl font-semibold text-blue-200 hover:text-coral-300 transition">
                  <a href={job.website} target="_blank" rel="noreferrer">
                    {job.position} @ {job.company}
                  </a>
                </h3>
                <time className="text-sm text-blue-400 italic mb-2 block">
                  {job.startDate} — {job.endDate || "Present"}
                </time>
                <p className="text-gray-300 leading-relaxed">{job.summary}</p>
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-blue-200">
                    {job.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Timeline */}
        <section>
          <h2 className="text-3xl uppercase text-coral-400 tracking-widest font-bold mb-8 border-b-2 border-coral-400 w-fit">
            Education
          </h2>
          <div className="relative border-l-4 border-coral-400 ml-4 pl-8 space-y-10">
            {education.map((edu, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-7 top-2 bg-coral-400 rounded-full w-5 h-5 border-2 border-blue-900 shadow-lg"></span>
                <h3 className="text-xl font-semibold text-blue-200">
                  {edu.studyType} in {edu.area} — {edu.institution}
                </h3>
                <time className="text-sm text-blue-400 italic mb-2 block">
                  {edu.startDate} — {edu.endDate || "Present"}
                </time>
                {edu.courses && edu.courses.length > 0 && (
                  <ul className="list-disc list-inside text-blue-300">
                    {edu.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl uppercase text-coral-400 tracking-widest font-bold mb-8 border-b-2 border-coral-400 w-fit">
            Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                title={skill.x_description}
                className="group cursor-default rounded-full bg-blue-700 p-4 w-24 h-24 flex flex-col items-center justify-center text-coral-400 font-bold text-lg shadow-lg
                  hover:shadow-coral-500 transition relative"
              >
                <i className={`${skill.x_icon} text-3xl mb-2 group-hover:text-coral-400 transition`}></i>
                <span className="text-center">{skill.name}</span>
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 text-xs bg-coral-600 text-white rounded px-2 py-1 pointer-events-none transition-all origin-bottom">
                  {skill.x_description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-3xl uppercase text-coral-400 tracking-widest font-bold mb-8 border-b-2 border-coral-400 w-fit">
            Languages
          </h2>
          <ul className="list-disc list-inside text-blue-300 text-lg space-y-2">
            {languages.map((lang, i) => (
              <li key={i}>
                <span className="font-semibold">{lang.language}</span>: {lang.fluency}
              </li>
            ))}
          </ul>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-3xl uppercase text-coral-400 tracking-widest font-bold mb-8 border-b-2 border-coral-400 w-fit">
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, i) => (
              <article
                key={i}
                className="bg-blue-700 rounded-lg p-6 shadow-lg hover:shadow-coral-500 transition flex items-center gap-6"
                aria-label={`Certificate: ${cert.name}`}
              >
                {cert.badge && (
                  <img
                    src={cert.badge}
                    alt={`${cert.name} badge`}
                    className="w-24 h-24 object-contain rounded-lg border-2 border-coral-400"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-coral-300 hover:text-coral-100 transition">
                    <a href={cert.url} target="_blank" rel="noreferrer">
                      {cert.name}
                    </a>
                  </h3>
                  <p className="text-blue-300 mt-1">Issuer: {cert.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Awards (optional) */}
        {awards && awards.length > 0 && (
          <section>
            <h2 className="text-3xl uppercase text-coral-400 tracking-widest font-bold mb-8 border-b-2 border-coral-400 w-fit">
              Awards
            </h2>
            <div className="space-y-8">
              {awards.map((award, i) => (
                <article
                  key={i}
                  className="bg-blue-700 rounded-lg p-6 shadow-lg hover:shadow-coral-500 transition"
                  aria-label={`Award: ${award.title}`}
                >
                  <h3 className="text-xl font-semibold text-coral-300">{award.title}</h3>
                  <p className="text-blue-300 text-sm mb-3 italic">
                    {award.awarder} — {award.date}
                  </p>
                  <p>{award.summary}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Organizations (optional) */}
        {organizations && organizations.length > 0 && (
          <section>
            <h2 className="text-3xl uppercase text-coral-400 tracking-widest font-bold mb-8 border-b-2 border-coral-400 w-fit">
              Organizations
            </h2>
            <div className="space-y-8">
              {organizations.map((org, i) => (
                <article
                  key={i}
                  className="bg-blue-700 rounded-lg p-6 shadow-lg hover:shadow-coral-500 transition"
                  aria-label={`Organization: ${org.name}`}
                >
                  <h3 className="text-xl font-semibold text-coral-300">{org.name}</h3>
                  <p className="text-blue-300 text-sm mb-3 italic">
                    {org.position} ({org.startDate} — {org.endDate || "Present"})
                  </p>
                  <p>{org.summary}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default Profile;
