"use client";
import { FiDownload } from "react-icons/fi";


import { useRef } from "react";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
import Link from "next/link";
import { FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

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
      bgcolor: "#111827", // tailwind bg-gray-900
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

  const skills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    { name: "NextJS", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
  ];

  const experiences = [
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
      desc: "Agro AI E-commerce project build using TypeScript, NextJS, Tailwind CSS. [Backend Python, Django]. Worked in an on-site environment at Khilkhet, Dhaka."
    }
  ];

  const education = [
    {
      degree: "Diploma in Engineering | Computer Science",
      institution: "Nawabganj Govt Polytechnic, Bangladesh",
      year: "2018 - 2023 || CGPA 3.52 out of 4.00",
    }
  ];

  const projects = [
    { title: "Meal Management App", link: "https://meal-manager1.vercel.app/" },
    { title: "Real Estate - India & Asia", link: "https://real-estate-agent.vercel.app/" },
    { title: "Dokan.com", link: "https://lingkon-dokan.netlify.app/" },
    { title: " Buggati ", link: "https://buggati-shop.vercel.app/" }
  ];

  return (
  <div className="relative min-h-screen bg-black flex items-center justify-center p-4">
    {/* ✅ Download Button */}
    <button
      onClick={handleDownloadPDF}
      className="fixed top-6 right-6 z-50 bg-yellow-400 text-black px-3 py-2 rounded-full hover:bg-yellow-500 shadow-lg flex items-center gap-2 text-sm"
    >
      <FiDownload className="text-base" />
      {/* <span className="hidden sm:inline">Download PDF</span> */}
    </button>

    {/* ✅ Resume Content (A4 Size) */}
    <div
      ref={resumeRef}
      style={{ width: "794px", height: "1123px" }}
      className="bg-gray-900 text-white p-6 overflow-hidden shadow-2xl text-sm"
    >
      {/* Header */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-yellow-400 mb-1">
          🔹 LINGKON ISLAM
        </h1>
        <p className="text-gray-300 text-base">
          Frontend Developer | ReactJS | NextJS | TypeScript | Tailwind CSS
        </p>
        <p className="text-gray-400 mt-1 text-xs max-w-xl mx-auto">
          100% Responsive, modern web apps and scalable UI/UX components. Passionate about clean code and cutting-edge frontend technologies.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-800 p-3 rounded-md shadow">
              <h3 className="font-semibold text-yellow-400 text-sm">{exp.role}</h3>
              <p className="text-gray-300 text-xs">{exp.company} | {exp.duration}</p>
              <p className="text-gray-400 text-xs mt-1">{exp.desc}</p>
              {exp.desc2 && <p className="text-gray-400 text-xs">{exp.desc2}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">My Industry Skills</h2>
        <div className="grid grid-cols-4 gap-3">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-800 p-2 rounded-md text-xs">
              <div className="text-xl mb-1">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">Education</h2>
        {education.map((edu, idx) => (
          <div key={idx} className="bg-gray-800 p-3 rounded-md shadow">
            <h3 className="font-semibold text-yellow-400 text-sm">{edu.degree}</h3>
            <p className="text-gray-300 text-xs">{edu.institution} | {edu.year}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">Frontend Projects</h2>
        <div className="grid grid-cols-2 gap-3">
          {projects.map((proj, idx) => (
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
