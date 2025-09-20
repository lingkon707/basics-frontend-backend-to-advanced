import React from "react";

import Resume from "./resume.json";

import HeaderHero from "./components/HeaderHero";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificatesSection from "./components/CertificatesSection";
import LanguagesSection from "./components/LanguagesSection";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <HeaderHero basics={Resume.basics} />
      <section className="max-w-5xl mx-auto">
        <article className="prose prose-lg px-6 md:px-0 py-12 max-w-none">
          <h3>About Me</h3>
          <p
            dangerouslySetInnerHTML={{ __html: Resume.basics.summary }}
          />
        </article>

        <SkillsSection skills={Resume.skills} />
        <ExperienceSection work={Resume.work} />
        <EducationSection education={Resume.education} />
        <CertificatesSection certificates={Resume.certificates} />
        <LanguagesSection languages={Resume.languages} />
      </section>
    </main>
  );
}
