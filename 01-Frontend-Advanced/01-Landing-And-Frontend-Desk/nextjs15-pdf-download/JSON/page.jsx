"use client";
import { FiDownload } from "react-icons/fi";

import { useRef } from "react";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import resumeData from "./resumeData.json"; // Adjust the path based on your file location

const iconMap = {
  FaJsSquare: FaJsSquare,
  FaReact: FaReact,
  SiNextdotjs: SiNextdotjs,
  SiTypescript: SiTypescript,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiTailwindcss: SiTailwindcss,
  FaNodeJs: FaNodeJs,
};

export default function Resume() {
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
      bgcolor: "#111827",
      quality: 1,
      cacheBust: true,
    };

    domtoimage
      .toPng(node, params)
      .then((dataUrl) => {
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [A4_WIDTH_PX, A4_HEIGHT_PX],
        });

        pdf.addImage(dataUrl, "PNG", 0, 0, A4_WIDTH_PX, A4_HEIGHT_PX);
        pdf.save("Lingkon_Resume_A4.pdf");
      })
      .catch((err) => {
        console.error("PDF error:", err);
      });
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4">
      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="fixed top-6 right-6 z-50 bg-yellow-400 text-black px-3 py-2 rounded-full hover:bg-yellow-500 shadow-lg flex items-center gap-2 text-sm"
      >
        <FiDownload className="text-base" />
      </button>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        style={{ width: "794px", height: "1123px" }}
        className="bg-gray-900 text-white p-6 overflow-hidden shadow-2xl text-sm"
      >
        {/* Header */}
        <section className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-yellow-400 mb-1">
            {resumeData.header.name}
          </h1>
          <p className="text-gray-300 text-base">{resumeData.header.title}</p>
          <p className="text-gray-400 mt-1 text-xs max-w-xl mx-auto">
            {resumeData.header.description}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">
            Work Experience
          </h2>
          <div className="space-y-4">
            {resumeData.experiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-800 p-3 rounded-md shadow">
                <h3 className="font-semibold text-yellow-400 text-sm">
                  {exp.role}
                </h3>
                <p className="text-gray-300 text-xs">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-gray-400 text-xs mt-1">{exp.desc}</p>
                {exp.desc2 && (
                  <p className="text-gray-400 text-xs">{exp.desc2}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">
            My Industry Skills
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {resumeData.skills.map((skill, idx) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-gray-800 p-2 rounded-md text-xs"
                >
                  <div className={`text-xl mb-1 ${skill.color}`}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">
            Education
          </h2>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="bg-gray-800 p-3 rounded-md shadow">
              <h3 className="font-semibold text-yellow-400 text-sm">
                {edu.degree}
              </h3>
              <p className="text-gray-300 text-xs">
                {edu.institution} | {edu.year}
              </p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">
            Frontend Projects
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {resumeData.projects.map((proj, idx) => (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-md text-center text-xs hover:shadow-yellow-500/50"
              >
                <p className="font-semibold text-yellow-400">{proj.title}</p>
                <p className="text-gray-400">View Project</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
