"use client";

export default function Resume() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 md:px-12 py-12 font-sans relative">
      
      {/* Download Resume CTA */}
     <section className="max-w-xl mx-auto mb-16 text-center">
  <a
    href="/Lingkon_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition shadow-lg shadow-yellow-400/50"
  >
    Download PDF Resume
  </a>
</section>

    
    </div>
  );
}
