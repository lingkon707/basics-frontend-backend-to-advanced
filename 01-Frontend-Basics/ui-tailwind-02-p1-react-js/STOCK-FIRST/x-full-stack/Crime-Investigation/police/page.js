"use client";
import React, { useEffect, useState } from "react";
import jsonData from "../data.json"; // Import JSON data

const PolicePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(jsonData);
  }, []);

  if (!userData) {
    return <div className="container mx-auto mt-6">Loading Data...</div>;
  }

  const {
    personal_info,
    legal_documents,
    electronic_and_digital_info,
    criminal_record,
  } = userData;

  const {
    phone_records,
    email_records,
    internet_activity,
    social_media_activity,
  } = electronic_and_digital_info;

  return (
    <div className="container mx-auto mt-6 p-6 bg-gray-100 rounded shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Police Dashboard</h1>

      {/* Personal Info */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Info</h2>
        <h3 className="text-lg font-medium">Full Name:</h3>
        <span className="block text-lg text-gray-700">{personal_info.full_name}</span>
      </section>

      {/* Legal Documents */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Legal Documents</h2>
        
        <h3 className="text-lg font-medium">Search Warrant:</h3>
        <div className="ml-4 text-gray-700">
          <p><strong>Court:</strong> {legal_documents.search_warrant.court}</p>
          <p><strong>Date Issued:</strong> {legal_documents.search_warrant.date_issued}</p>
          <p><strong>Location Searched:</strong> {legal_documents.search_warrant.location_searched}</p>
        </div>

        <h3 className="text-lg font-medium mt-4">Arrest Warrant:</h3>
        <div className="ml-4 text-gray-700">
          <p><strong>Date Issued:</strong> {legal_documents.arrest_warrant.date_issued}</p>
          <p><strong>Charges:</strong></p>
          <ul className="list-disc list-inside">
            {legal_documents.arrest_warrant.charges.map((charge, index) => (
              <li key={index}>{charge}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Electronic & Digital Info */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Electronic & Digital Info</h2>

        <h3 className="text-lg font-medium">Call Logs:</h3>
        <div className="ml-4">
          {phone_records.call_logs.map((log, index) => (
            <div key={index} className="mb-2 text-gray-700">
              <p><strong>Date:</strong> {log.date}</p>
              <p><strong>Time:</strong> {log.time}</p>
              <p><strong>Caller:</strong> {log.caller}</p>
              <p><strong>Duration:</strong> {log.duration}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium mt-4">Text Messages:</h3>
        <div className="ml-4">
          {phone_records.text_messages.map((msg, index) => (
            <div key={index} className="mb-2 text-gray-700">
              <p><strong>Date:</strong> {msg.date}</p>
              <p><strong>From:</strong> {msg.from}</p>
              <p><strong>Content:</strong> {msg.content}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium mt-4">Email Records:</h3>
        <div className="ml-4">
          {email_records.map((email, index) => (
            <div key={index} className="mb-4 text-gray-700">
              <p><strong>Date:</strong> {email.date}</p>
              <p><strong>From:</strong> {email.from}</p>
              <p><strong>To:</strong> {email.to}</p>
              <p><strong>Subject:</strong> {email.subject}</p>
              <p><strong>Body:</strong> {email.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internet Activity */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Internet Activity</h2>

        <h3 className="text-lg font-medium">Websites Visited:</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          {internet_activity.websites_visited.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ul>

        <h3 className="text-lg font-medium mt-4">Online Purchases:</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          {internet_activity.online_purchases.map((purchase, index) => (
            <li key={index}>
              <strong>Item:</strong> {purchase.item}, <strong>Website:</strong> {purchase.website}, <strong>Date:</strong> {purchase.date}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-medium mt-4">Social Media Activity (Facebook):</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          {social_media_activity.facebook.map((post, index) => (
            <li key={index}>
              <strong>Date:</strong> {post.date} - <strong>Post:</strong> {post.post}
            </li>
          ))}
        </ul>
      </section>

      {/* Criminal Record */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-2">Criminal Record</h2>

        <h3 className="text-lg font-medium">Previous Arrests:</h3>
        <div className="ml-4">
          {criminal_record.previous_arrests.map((arrest, index) => (
            <div key={index} className="mb-2 text-gray-700">
              <p><strong>Charge:</strong> {arrest.charge}</p>
              <p><strong>Date of Arrest:</strong> {arrest.date_of_arrest}</p>
              <p><strong>Court:</strong> {arrest.court}</p>
              <p><strong>Outcome:</strong> {arrest.outcome}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium mt-4">Pending Cases:</h3>
        <div className="ml-4 text-gray-700">
          {criminal_record.pending_cases.map((caseData, index) => (
            <div key={index} className="mb-2">
              <p><strong>Charge:</strong> {caseData.charge}</p>
              <p><strong>Status:</strong> {caseData.status}</p>
              <p><strong>Court:</strong> {caseData.court}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium mt-4">Known Affiliations:</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          {criminal_record.known_affiliations.map((affiliation, index) => (
            <li key={index}>{affiliation}</li>
          ))}
        </ul>

        <h3 className="text-lg font-medium mt-4">Criminal Behavior Patterns:</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          {criminal_record.criminal_behavior_patterns.map((pattern, index) => (
            <li key={index}>{pattern}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PolicePage;
