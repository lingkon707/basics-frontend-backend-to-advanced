"use client";
import { useRef } from "react";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

export default function ResumePage() {
  const resumeRef = useRef(null);

  const handleDownloadPDF = () => {
    const node = resumeRef.current;
    if (!node) return;

    const scale = 2;
    const A4_WIDTH_PX = 794;
    const A4_HEIGHT_PX = 1123;

    const params = {
      width: A4_WIDTH_PX * scale,
      height: A4_HEIGHT_PX * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${A4_WIDTH_PX}px`,
        height: `${A4_HEIGHT_PX}px`,
      },
      bgcolor: "#1f2937",
      quality: 1,
      cacheBust: true,
    };

    domtoimage.toPng(node, params).then((dataUrl) => {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [A4_WIDTH_PX, A4_HEIGHT_PX],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, A4_WIDTH_PX, A4_HEIGHT_PX);
      pdf.save("Lingkon_Resume_A4.pdf");
    }).catch((err) => {
      console.error("PDF error:", err);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-12">
      <div
        ref={resumeRef}
        style={{ width: "794px", height: "1123px" }}
        className="bg-gray-900 text-white p-10 overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-yellow-400">🔹 LINGKON ISLAM</h1>
          <p className="text-lg text-gray-300">Frontend Developer | ReactJS | NextJS | TypeScript</p>
          <p className="text-sm text-gray-400 mt-2">
            Building modern, responsive web apps. Clean code. Solid UI.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Work Experience</h2>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded">
              <p className="font-semibold text-yellow-300">Frontend Developer (Full-Time)</p>
              <p className="text-gray-300">Nexis LTD | Sep 2023 – Jul 2024</p>
              <p className="text-gray-400">
                Built scalable frontend apps using Next.js, Prisma, ZOD, TRPC.
              </p>
              <p className="text-gray-400">
                Projects: Hogla Pata, Neer-Education, E-commerce.
              </p>
            </div>

            <div className="bg-gray-800 p-3 rounded">
              <p className="font-semibold text-yellow-300">MERN Stack Developer (Apprenticeship)</p>
              <p className="text-gray-300">IIT, University of Dhaka | Jun 2023 – Aug 2023</p>
              <p className="text-gray-400">
                Training in React, Node.js, Express, MongoDB.
              </p>
            </div>

            <div className="bg-gray-800 p-3 rounded">
              <p className="font-semibold text-yellow-300">Frontend Developer (Intern + Fulltime)</p>
              <p className="text-gray-300">BDTask Software LTD. | Oct 2022 – Jun 2023</p>
              <p className="text-gray-400">
                Agro AI eCommerce project using TypeScript, NextJS, Tailwind.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Education</h2>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <p className="font-semibold text-yellow-300">Diploma in Computer Engineering</p>
            <p className="text-gray-300">Nawabganj Govt Polytechnic | 2018 - 2023</p>
            <p className="text-gray-400">CGPA: 3.52 / 4.00</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { title: "Meal Manager", link: "https://meal-manager1.vercel.app/" },
              { title: "Real Estate", link: "https://real-estate-agent.vercel.app/" },
              { title: "Dokan.com", link: "https://lingkon-dokan.netlify.app/" },
              { title: "Buggati", link: "https://buggati-shop.vercel.app/" }
            ].map((proj, idx) => (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded hover:shadow-lg hover:shadow-yellow-400/30"
              >
                <p className="text-yellow-300 font-medium">{proj.title}</p>
                <p className="text-gray-400 text-xs">Visit Project</p>
              </a>
            ))}
          </div>
        </section>

        
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 shadow-lg"
      >
        Download A4 PDF
      </button>
    </div>
  );
}
