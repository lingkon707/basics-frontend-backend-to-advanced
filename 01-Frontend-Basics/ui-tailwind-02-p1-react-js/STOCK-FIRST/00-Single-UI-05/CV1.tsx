import React from "react";

export default function CharacterProfile() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-lg text-gray-900 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img
          src="https://cdn.pixabay.com/photo/2018/08/18/16/23/indian-man-3615047_1280.jpg"
          alt="Aarav Mehta"
          className="w-40 h-40 rounded-xl object-cover shadow-md"
          loading="lazy"
          draggable={false}
        />
        <h1 className="text-4xl font-extrabold">
          Aarav Mehta
        </h1>
      </div>

      {/* Basic Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-pink-500 pb-2 mb-4">Basic Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Age:</strong> 27</li>
          <li><strong>Gender:</strong> Male</li>
          <li><strong>Ethnicity:</strong> Indian (Gujarati)</li>
          <li><strong>Nationality:</strong> Indian</li>
          <li><strong>Occupation:</strong> Software Engineer & Freelance Digital Artist</li>
          <li><strong>Education Level:</strong> Bachelor’s Degree in Computer Science</li>
        </ul>
      </section>

      {/* Physical Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-pink-500 pb-2 mb-4">Physical Description</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Height:</strong> 5’10” (178 cm)</li>
          <li><strong>Weight:</strong> 72 kg (158 lbs)</li>
          <li><strong>Hair Color:</strong> Thick, wavy black hair</li>
          <li><strong>Eye Color:</strong> Deep brown with flecks of amber</li>
          <li><strong>Distinguishing Features:</strong> Faint scar above right eyebrow; minimalist compass tattoo on left forearm</li>
        </ul>
      </section>

      {/* Personality Traits */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-pink-500 pb-2 mb-4">Personality Traits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold underline mb-2">Positive Traits</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Thoughtful</li>
              <li>Resilient</li>
              <li>Creative</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold underline mb-2">Negative Traits</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Overly self-critical</li>
              <li>Stubborn</li>
              <li>Sometimes socially reserved</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold underline mb-2">Hobbies & Interests</h3>
          <p>Sketching digital art, hiking, exploring indie music, cooking experimental recipes.</p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold underline mb-2">Motivation & Stress Management</h3>
          <p>
            Motivated by merging creativity with technology to inspire others. Handles stress through solitude, meditation, drawing, and long walks.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-pink-500 pb-2 mb-4">Background</h2>
        <p className="mb-2">
          Raised in Ahmedabad in a middle-class family of educators. Younger sister pursuing medicine.
        </p>
        <p className="mb-2">
          Significant life events include winning a national coding competition and a solo Himalayan backpacking trip.
        </p>
        <p className="mb-2">
          Major accomplishments include developing an app empowering local artisans.
        </p>
        <p>
          Has faced imposter syndrome and struggles balancing cultural expectations with ambitions.
        </p>
      </section>

      {/* Current Situation */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-pink-500 pb-2 mb-4">Current Situation</h2>
        <p><strong>Living Situation:</strong> Lives alone in a cozy Bengaluru apartment filled with plants and artwork.</p>
        <p><strong>Relationships:</strong> Close childhood friends and a low-key relationship with a fellow artist.</p>
        <p><strong>Goals:</strong> Launch a startup blending AI and digital art to democratize creativity.</p>
        <p><strong>Recent Changes:</strong> Left corporate job to pursue freelance passion projects full-time.</p>
      </section>

      {/* Additional Elements */}
      <section>
        <h2 className="text-2xl font-bold border-b-2 border-pink-500 pb-2 mb-4">Additional Elements</h2>
        <div className="mb-4">
          <h3 className="font-semibold underline mb-2">Quotes</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>“Purpose isn’t found; it’s created.”</li>
            <li>“Mistakes are just stepping stones, not tombstones.”</li>
            <li>“True creativity is born from the heart’s quiet rebellion.”</li>
          </ul>
        </div>

        <p className="mb-4"><strong>Greatest Fear:</strong> Losing his sense of identity in the rush to conform.</p>
        <p><strong>Biggest Dream:</strong> To build a platform empowering marginalized artists worldwide.</p>
      </section>
    </div>
  );
}
