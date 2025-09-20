import React from "react";

const coreFeatures = {
  "AI Agents 🧠": [
    "No-Code AI Agents Builder",
    "Generative AI Steps: Image, Text",
    "Loops",
    "AI charts builder",
    "File upload, URL lookup",
    "Create To-Dos from workflow",
    "AI Agent Generator",
  ],
  "Metrics 📊": [
    "Business Data Dashboard",
    "Stripe, Google Analytics, Beehiv & YouTube Connectors",
    "12 months data syncing",
    "Goals & Targets",
    "Use metrics data in Agents",
  ],
  "Docs 📄": [
    "Unlimited Context Docs",
    "Powerful Notion-style editor",
    "AI Assistant to chat with any Doc",
    "'Memory' feature to teach your AI Assistant relevant background",
    "Select any Doc as Agent context",
  ],
};

export default function CoreFeatures() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Core features:</h2>
        <hr className="mb-6 border-gray-200" />

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(coreFeatures).map(([sectionTitle, items], i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-4">{sectionTitle}</h3>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-gray-800">
                    <span>✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
