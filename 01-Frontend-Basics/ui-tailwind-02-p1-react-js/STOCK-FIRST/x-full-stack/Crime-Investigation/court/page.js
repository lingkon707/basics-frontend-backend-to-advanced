"use client";
import React, { useEffect, useState } from "react";
import jsonData from "../data.json"; // Import JSON data

const CourtPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(jsonData); // Load JSON data on mount
  }, []);

  if (!userData) {
    return <div className="container mx-auto mt-6">Loading Data...</div>;
  }

  const { personal_info, criminal_record } = userData;

  return (
    <div className="container mx-auto mt-6 p-6 bg-white rounded shadow-md">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">Court Dashboard</h1>

      {/* Personal Info */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Info</h2>
        <h3 className="text-lg font-medium">Full Name:</h3>
        <span className="block text-lg text-gray-700">{personal_info.full_name}</span>
      </section>

      {/* Criminal Record */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Criminal Record</h2>

        {/* Previous Arrests */}
        <h3 className="text-xl font-medium text-gray-800 mb-2">Previous Arrests</h3>
        {criminal_record.previous_arrests.map((arrest, index) => (
          <div key={index} className="mb-4 ml-4 text-gray-700 border-l-4 pl-4 border-red-400">
            <p><strong>Charge:</strong> {arrest.charge}</p>
            <p><strong>Date of Arrest:</strong> {arrest.date_of_arrest}</p>
            <p><strong>Court:</strong> {arrest.court}</p>
            <p><strong>Outcome:</strong> {arrest.outcome}</p>
          </div>
        ))}

        {/* Pending Cases */}
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Pending Cases</h3>
        {criminal_record.pending_cases.map((pending, index) => (
          <div key={index} className="mb-4 ml-4 text-gray-700 border-l-4 pl-4 border-yellow-400">
            <p><strong>Charge:</strong> {pending.charge}</p>
            <p><strong>Status:</strong> {pending.status}</p>
            <p><strong>Court:</strong> {pending.court}</p>
          </div>
        ))}

        {/* Known Affiliations */}
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Known Affiliations</h3>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          {criminal_record.known_affiliations.map((affiliation, index) => (
            <li key={index}>{affiliation}</li>
          ))}
        </ul>

        {/* Criminal Behavior Patterns */}
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Behavior Patterns</h3>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          {criminal_record.criminal_behavior_patterns.map((pattern, index) => (
            <li key={index}>{pattern}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CourtPage;
