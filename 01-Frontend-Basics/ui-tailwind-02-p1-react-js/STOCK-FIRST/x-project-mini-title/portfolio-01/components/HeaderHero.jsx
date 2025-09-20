import React from "react";

export default function HeaderHero({ basics }) {
  return (
    <section className="flex flex-col md:flex-row items-center bg-blue-900 text-white p-8 md:p-16 gap-8">
      <img
        src={basics.picture}
        alt={basics.name}
        onError={(e) => (e.target.src = basics.x_pictureFallback)}
        className="w-36 h-36 rounded-full object-cover shadow-lg flex-shrink-0"
      />
      <div className="flex flex-col max-w-3xl">
        <h1 className="text-4xl font-bold">{basics.name}</h1>
        <h2 className="text-xl font-semibold text-blue-300 mt-1">{basics.label}</h2>
        <p className="italic mt-1">
          {basics.location.region}, {basics.location.country}
        </p>
        <p
          className="mt-4 text-blue-200"
          dangerouslySetInnerHTML={{ __html: basics.x_title }}
        />
        <div className="flex space-x-6 mt-6 text-3xl">
          {basics.profiles.map(({ network, url, x_icon }) => (
            <a
              key={network}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network}
              className="hover:text-orange-400 transition-colors"
            >
              <i className={x_icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
