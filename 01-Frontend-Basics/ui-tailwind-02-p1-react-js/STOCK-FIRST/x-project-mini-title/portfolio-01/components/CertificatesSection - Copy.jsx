import React from "react";

export default function CertificatesSection({ certificates }) {
  return (
    <section className="p-8 md:p-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Certifications
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map(({ name, issuer, url, badge }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-gray-200 bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="p-4 pb-3 flex flex-col items-center text-center">
              <img
                src={badge}
                alt={`${name} badge`}
                className="w-24 h-24 object-contain mb-4"
                loading="lazy"
              />
              <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-800 transition">
                {name}
              </h4>
              <p className="text-sm text-gray-500">{issuer}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition duration-300" />
          </a>
        ))}
      </div>
    </section>
  );
}
