"use client";
import { useRef } from "react";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

export default function ResumePage() {
  const resumeRef = useRef(null);

  const handleDownloadPDF = () => {
    const node = resumeRef.current;
    if (!node) return;

    domtoimage.toPng(node, { cacheBust: true, quality: 1 })
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [img.width, img.height],
          });
          pdf.addImage(dataUrl, 'PNG', 0, 0, img.width, img.height);
          pdf.save('Lingkon_Resume.pdf');
        };
      })
      .catch((err) => {
        console.error("PDF generation failed:", err);
      });
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen px-6 py-12">
      {/* Entire resume is wrapped in this div */}
      <div ref={resumeRef} className="space-y-16">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-2">🔹 LINGKON ISLAM</h1>
          <p className="text-lg text-gray-300">Frontend Developer | ReactJS | NextJS | TypeScript</p>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            100% Responsive, modern web apps and scalable UI/UX components.
            Passionate about clean code and cutting-edge frontend technologies.
          </p>
        </section>

        {/* Experience */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Work Experience</h2>
          <div className="space-y-6">
            {[
              {
                role: "Frontend Developer (Full-Time)",
                company: "Nexis LTD",
                duration: "Sep 2023 – Jul 2024 (11 mos)",
                desc: "Worked as a TypeScript Developer (Frontend) building scalable frontend apps using Next.js, Prisma, ZOD, and TRPC in an on-site role at Uttora 12, Dhaka.",
                desc2: "Projects: Hogla Pata | Neer-Education (abroad study) | E-commerce etc."
              },
              {
                role: "MERN Stack Developer (Apprenticeship)",
                company: "IIT, University of Dhaka",
                duration: "Jun 2023 – Aug 2023 (3 mos)",
                desc: "Completed hands-on training in React, Node.js, Express, and MongoDB. Gained strong backend and frontend development experience."
              },
              {
                role: "Frontend Developer (Internship + Fulltime)",
                company: "BDTask Software LTD.",
                duration: "Oct 2022 – Jun 2023 (9 mos)",
                desc: "Agro AI E-commerce project built using TypeScript, NextJS, Tailwind CSS. [Backend Python, Django]. Worked in an on-site environment at Khilkhet, Dhaka."
              }
            ].map((exp, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-yellow-500/50 transition-shadow">
                <h3 className="text-xl font-semibold text-yellow-400">{exp.role}</h3>
                <p className="text-gray-300">{exp.company} | {exp.duration}</p>
                <p className="text-gray-400 mt-2">{exp.desc}</p>
                {exp.desc2 && <p className="text-gray-400 mt-1">{exp.desc2}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Educational Qualifications</h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-yellow-500/50 transition-shadow">
            <h3 className="text-xl font-semibold text-yellow-400">
              Diploma in Engineering | Computer Science
            </h3>
            <p className="text-gray-300">
              Nawabganj Govt Polytechnic, Bangladesh | 2018 - 2023 || CGPA 3.52 out of 4.00
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Frontend Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Meal Management App", link: "https://meal-manager1.vercel.app/" },
              { title: "Real Estate - India & Asia", link: "https://real-estate-agent.vercel.app/" },
              { title: "Dokan.com", link: "https://lingkon-dokan.netlify.app/" },
              { title: "Buggati", link: "https://buggati-shop.vercel.app/" }
            ].map((proj, idx) => (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-yellow-500/50 hover:scale-105 transition-all flex flex-col items-center justify-center text-center"
              >
                <span className="font-semibold text-yellow-400 mb-2">{proj.title}</span>
                <span className="text-gray-400 text-sm">View Project</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="fixed bottom-6 right-6 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
      >
        Download as PDF
      </button>
    </div>
  );
}
