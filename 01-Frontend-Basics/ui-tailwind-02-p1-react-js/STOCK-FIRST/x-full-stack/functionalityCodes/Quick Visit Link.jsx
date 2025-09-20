import React, { useState } from "react";

export default function VisitLinkApp() {
  const [input, setInput] = useState("");
  const [visitUrl, setVisitUrl] = useState("");

  function buildFullUrl(slug) {
    if (!slug) return "";
    const trimmed = slug.trim();

    if (
      trimmed.startsWith("fb.com") ||
      trimmed.startsWith("www.fb.com")
    ) {
      return "https://" + trimmed;
    }
    if (
      trimmed.startsWith("youtube.com") ||
      trimmed.startsWith("www.youtube.com") ||
      trimmed.startsWith("youtu.be")
    ) {
      return "https://" + trimmed;
    }

    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      return trimmed;
    }

    if (trimmed.includes(".")) {
      return "https://" + trimmed;
    }

    return "https://" + trimmed;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setVisitUrl(buildFullUrl(input));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-extrabold text-[#1e40af] mb-8 text-center tracking-wide">
          Quick Visit Link
        </h1>

        <form onSubmit={onSubmit} className="mb-8">
          <label
            htmlFor="slugInput"
            className="block mb-3 text-[#1e40af] font-semibold tracking-wide"
          >
            Enter URL Slash (e.g., fb.com/sad12)
          </label>
          <input
            id="slugInput"
            type="text"
            placeholder="fb.com/sad12"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 rounded-xl border border-[#3b82f6] text-[#0f172a] placeholder-[#93c5fd] font-medium focus:outline-none focus:ring-4 focus:ring-[#60a5fa] transition"
            spellCheck={false}
          />
          <button
            type="submit"
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-xl text-white font-semibold text-lg shadow-lg hover:from-[#2563eb] hover:to-[#1e40af] transition"
          >
            Generate Visit Link
          </button>
        </form>

        {visitUrl && (
          <div className="bg-[#e0e7ff] rounded-xl p-6 border border-[#3b82f6] shadow-md text-center">
            <p className="mb-4 text-[#1e40af] font-semibold text-lg">
              Your Visit Link:
            </p>
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              {visitUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
