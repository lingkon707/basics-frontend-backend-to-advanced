import React from "react";

export default function CertificatesSection({ certificates }) {
  return (
    <section className="p-8 md:p-16 bg-white">
      <h3 className="text-3xl font-semibold text-blue-900 mb-8">Certificates</h3>
      <div className="flex flex-wrap gap-6">
        {certificates.map(({ name, url, badge }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-24 block border rounded shadow hover:shadow-lg transition overflow-hidden"
            title={name}
          >
            <img
              src={badge}
              alt={name}
              className="object-contain w-full h-full p-2 bg-white"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
