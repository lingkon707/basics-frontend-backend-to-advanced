"use client";
import React, { useEffect, useState } from "react";
import jsonData from "../data.json";

const CIAPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(jsonData);
  }, []);

  if (!userData) {
    return <div className="container mx-auto mt-6">Loading Data...</div>;
  }

  const { personal_info, criminal_record, financial_info } = userData;

  return (
    <div className="container mx-auto mt-6 p-6 bg-white rounded shadow-md">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">CIA Dashboard</h1>

      {/* Personal Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Info</h2>
        <h3 className="text-lg font-medium">Full Name:</h3>
        <span className="block text-lg text-gray-700">{personal_info.full_name}</span>
      </section>

      {/* Criminal Record */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Criminal Record</h2>

        <h3 className="text-xl font-medium text-gray-800 mb-2">Previous Arrests</h3>
        {criminal_record.previous_arrests.map((arrest, index) => (
          <div key={index} className="ml-4 mb-4 text-gray-700 border-l-4 border-red-400 pl-4">
            <p><strong>Charge:</strong> {arrest.charge}</p>
            <p><strong>Date of Arrest:</strong> {arrest.date_of_arrest}</p>
            <p><strong>Court:</strong> {arrest.court}</p>
            <p><strong>Outcome:</strong> {arrest.outcome}</p>
          </div>
        ))}

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Pending Cases</h3>
        {criminal_record.pending_cases.map((pending, index) => (
          <div key={index} className="ml-4 mb-4 text-gray-700 border-l-4 border-yellow-400 pl-4">
            <p><strong>Charge:</strong> {pending.charge}</p>
            <p><strong>Status:</strong> {pending.status}</p>
            <p><strong>Court:</strong> {pending.court}</p>
          </div>
        ))}

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Known Affiliations</h3>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          {criminal_record.known_affiliations.map((affiliation, index) => (
            <li key={index}>{affiliation}</li>
          ))}
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Criminal Behavior Patterns</h3>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          {criminal_record.criminal_behavior_patterns.map((pattern, index) => (
            <li key={index}>{pattern}</li>
          ))}
        </ul>
      </section>

      {/* Financial Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Financial Information</h2>

        {/* Bank Accounts */}
        <h3 className="text-xl font-medium text-gray-800 mb-2">Bank Accounts</h3>
        {financial_info.bank_accounts.map((account, index) => (
          <div key={index} className="ml-4 mb-4 text-gray-700 border-l-4 border-green-400 pl-4">
            <p><strong>Bank Name:</strong> {account.bank_name}</p>
            <p><strong>Account Number:</strong> {account.account_number}</p>
            <p><strong>Type:</strong> {account.account_type}</p>
            <p><strong>Balance:</strong> {account.balance}</p>
          </div>
        ))}

        {/* Credit History */}
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Credit History</h3>
        {financial_info.credit_history.loans.map((loan, index) => (
          <div key={index} className="ml-4 mb-4 text-gray-700 border-l-4 border-indigo-400 pl-4">
            <p><strong>Type:</strong> {loan.type}</p>
            <p><strong>Amount:</strong> {loan.amount}</p>
            <p><strong>Outstanding Balance:</strong> {loan.outstanding_balance}</p>
            <p><strong>Status:</strong> {loan.status}</p>
          </div>
        ))}
        <p className="ml-4 text-gray-700"><strong>Credit Score:</strong> {financial_info.credit_history.credit_score}</p>

        {/* Assets */}
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Assets</h3>
        {financial_info.assets.map((asset, index) => (
          <div key={index} className="ml-4 mb-4 text-gray-700 border-l-4 border-blue-400 pl-4">
            <p><strong>Type:</strong> {asset.type}</p>
            {asset.type === "Real Estate" && asset.property_details && (
              <>
                <p><strong>Address:</strong> {asset.property_details.address}</p>
                <p><strong>Value:</strong> {asset.property_details.value}</p>
              </>
            )}
            {asset.type === "Vehicle" && asset.vehicle_details && (
              <>
                <p><strong>Make:</strong> {asset.vehicle_details.make}</p>
                <p><strong>Model:</strong> {asset.vehicle_details.model}</p>
                <p><strong>Year:</strong> {asset.vehicle_details.year}</p>
                <p><strong>Registration No:</strong> {asset.vehicle_details.registration_number}</p>
                <p><strong>Value:</strong> {asset.vehicle_details.value}</p>
              </>
            )}
          </div>
        ))}

        {/* Income Sources */}
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Income Sources</h3>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          {financial_info.income_sources.map((source, index) => (
            <li key={index}>{source}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CIAPage;
