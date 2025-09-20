import React, { useState } from "react";

const familyTree = {
  name: "Mamun",
  birthYear: 1945,
  nidNumber: 1,           
  motherName: "Fatima Bibi",
  children: {
    name: "Sujon",
    birthYear: 1970,
    nidNumber: 2,
    motherName: "Ayesha Khan",
    children: {
      name: "Asad",
      birthYear: 1992,
      nidNumber: 3,
      motherName: "Nusrat Jahan",
      children: {
        name: "Joba",
        birthYear: 2012,
        nidNumber: 4,
        motherName: "Sadia Malik",
        children: {
          name: "Kamal",
          birthYear: 2032,
          nidNumber: 5,
          motherName: "Rabia Noor",
          children: {
            name: "Shakib",
            birthYear: 2055,
            nidNumber: 6,
            motherName: "Mahira Yousaf",
            children: null,
          },
        },
      },
    },
  },
};


const flattenTreeWithParent = (person, parent = null) => {
  if (!person) return [];
  const current = { ...person, parent };
  return [current, ...flattenTreeWithParent(person.children, current)];
};

const getAncestors = (person) => {
  const list = [];
  let current = person?.parent;
  while (current) {
    list.push(current);
    current = current.parent;
  }
  return list.reverse();
};

const getDescendants = (person) => {
  const list = [];
  const recurse = (node) => {
    if (node?.children) {
      list.push(node.children);
      recurse(node.children);
    }
  };
  recurse(person);
  return list;
};

export default function NIDFamilyExplorer() {
  const [nidInput, setNidInput] = useState("");
  const [person, setPerson] = useState(null);
  const [error, setError] = useState("");

  const fullTree = flattenTreeWithParent(familyTree);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = fullTree.find((p) => p.nidNumber === parseInt(nidInput));
    if (found) {
      setPerson(found);
      setError("");
    } else {
      setPerson(null);
      setError("❌ No match found for that NID.");
    }
  };

  const ancestors = person ? getAncestors(person) : [];
  const descendants = person ? getDescendants(person) : [];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          🧬 NID Family Explorer
        </h1>

        {/* NID Input */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="number"
            value={nidInput}
            onChange={(e) => setNidInput(e.target.value)}
            placeholder="Enter your NID (e.g., 2013)"
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {error && <p className="text-red-600 text-center font-medium">{error}</p>}

        {person && (
          <>
            {/* YOU SECTION */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">🧍 You</h2>
              <p><strong>Name:</strong> {person.name}</p>
              <p><strong>Birth Year:</strong> {person.birthYear}</p>
              <p><strong>NID:</strong> {person.nidNumber}</p>
              <p><strong>Mother:</strong> {person.motherName}</p>
            </div>

            {/* ANCESTORS SECTION */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">👴 Previous Generations</h2>
              {ancestors.length === 0 ? (
                <p className="text-gray-500 italic">No ancestors found. You're the first generation.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ancestors.map((a, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <p><strong>{a.name}</strong></p>
                      <p>Birth Year: {a.birthYear}</p>
                      <p>NID: {a.nidNumber}</p>
                      <p>Mother: {a.motherName}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* DESCENDANTS SECTION */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">👶 Next Generations</h2>
              {descendants.length === 0 ? (
                <p className="text-gray-500 italic">No next generation found for you.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {descendants.map((d, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <p><strong>{d.name}</strong></p>
                      <p>Birth Year: {d.birthYear}</p>
                      <p>NID: {d.nidNumber}</p>
                      <p>Mother: {d.motherName}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
