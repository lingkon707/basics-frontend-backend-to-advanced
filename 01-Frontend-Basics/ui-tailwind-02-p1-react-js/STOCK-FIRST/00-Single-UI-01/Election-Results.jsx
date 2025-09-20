import React, { useState } from "react";

const Election = () => {
  // Data objects

// Citizens with voting status
const citizens = {
  1: { name: "Rahim Uddin", voted: true, votedFor: 201 },
  2: { name: "Fatima Begum", voted: false, votedFor: null },
  3: { name: "Jamal Hossain", voted: true, votedFor: 202 },
  4: { name: "Shakil Ahmed", voted: true, votedFor: 201 },
  5: { name: "Nusrat Jahan", voted: false, votedFor: null },
};

// Candidates
const candidates = {
  201: { name: "Md. Kamal Hassan" },
  202: { name: "Ayesha Siddiqua" },
};


  // Calculate votes count per candidate
  const voteCounts = {};
  Object.values(citizens).forEach((citizen) => {
    if (citizen.voted) {
      voteCounts[citizen.votedFor] = (voteCounts[citizen.votedFor] || 0) + 1;
    }
  });

  // Total voters
  const totalVoters = Object.keys(citizens).length;
  // Number voted
  const totalVoted = Object.values(citizens).filter((c) => c.voted).length;
  // Number not voted
  const totalNotVoted = totalVoters - totalVoted;

  // Determine winner and loser
  const candidateVotesArray = Object.entries(voteCounts).map(([id, count]) => ({
    id,
    name: candidates[id].name,
    votes: count,
  }));

  candidateVotesArray.sort((a, b) => b.votes - a.votes);

  const winner = candidateVotesArray[0] || null;
  const loser = candidateVotesArray[candidateVotesArray.length - 1] || null;

  // UI state for which info to show
  const [view, setView] = useState("summary");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Election Dashboard</h1>

      {/* Buttons to toggle views */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setView("summary")}
          className={`px-4 py-2 rounded ${
            view === "summary" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Summary
        </button>
        <button
          onClick={() => setView("citizens")}
          className={`px-4 py-2 rounded ${
            view === "citizens" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Citizens
        </button>
        <button
          onClick={() => setView("candidates")}
          className={`px-4 py-2 rounded ${
            view === "candidates" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Candidates
        </button>
        <button
          onClick={() => setView("votes")}
          className={`px-4 py-2 rounded ${
            view === "votes" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Vote Counts
        </button>
        <button
          onClick={() => setView("results")}
          className={`px-4 py-2 rounded ${
            view === "results" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Results
        </button>
      </div>

      {/* Content Display */}
      <div>
        {view === "summary" && (
          <div className="text-center space-y-3 text-gray-700">
            <p className="text-lg font-semibold">Total Citizens: {totalVoters}</p>
            <p className="text-lg font-semibold text-green-600">Voted: {totalVoted}</p>
            <p className="text-lg font-semibold text-red-600">Not Voted: {totalNotVoted}</p>
            <p className="text-lg font-semibold">Candidates: {Object.keys(candidates).length}</p>
          </div>
        )}

        {view === "citizens" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Citizens Voting Status</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Citizen</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Voted?</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Voted For</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(citizens).map(([id, citizen]) => (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{citizen.name}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {citizen.voted ? (
                        <span className="text-green-600 font-semibold">Yes</span>
                      ) : (
                        <span className="text-red-600 font-semibold">No</span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {citizen.voted ? candidates[citizen.votedFor].name : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === "candidates" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Candidates</h2>
            <ul className="list-disc list-inside text-gray-700">
              {Object.entries(candidates).map(([id, candidate]) => (
                <li key={id} className="mb-2">
                  {candidate.name} (ID: {id})
                </li>
              ))}
            </ul>
          </div>
        )}

        {view === "votes" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Current Vote Counts</h2>
            {candidateVotesArray.length === 0 ? (
              <p className="text-gray-700">No votes yet.</p>
            ) : (
              <ul className="text-gray-700">
                {candidateVotesArray.map(({ id, name, votes }) => (
                  <li key={id} className="mb-2">
                    {name}: <span className="font-bold">{votes}</span> vote{votes > 1 ? "s" : ""}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {view === "results" && (
          <div className="text-center text-gray-800 space-y-3">
            <h2 className="text-xl font-semibold mb-4">Election Results</h2>
            {winner ? (
              <>
                <p className="text-green-600 text-2xl font-bold">
                  Winner: {winner.name} ({winner.votes} votes)
                </p>
                <p className="text-red-600 text-xl font-semibold">
                  Loser: {loser.name} ({loser.votes} votes)
                </p>
              </>
            ) : (
              <p>No votes cast yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Election;
