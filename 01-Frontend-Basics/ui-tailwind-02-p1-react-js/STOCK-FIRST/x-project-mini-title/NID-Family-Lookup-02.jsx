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



// Helper functions
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
      setError("❌ NID not found.");
    }
  };

  const ancestors = person ? getAncestors(person) : [];
  const descendants = person ? getDescendants(person) : [];

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-md shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-800">NID Family Lookup</h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="number"
            value={nidInput}
            onChange={(e) => setNidInput(e.target.value)}
            placeholder="Enter Your NID"
            required
            className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        {person && (
          <>
            {/* You */}
            <div className="border rounded-md p-4 bg-blue-50 text-sm">
              <h2 className="font-semibold text-blue-700 mb-2">🧍 You</h2>
              <div className="grid grid-cols-2 gap-2">
                <div><strong>Name:</strong> {person.name}</div>
                <div><strong>Birth Year:</strong> {person.birthYear}</div>
                <div><strong>NID:</strong> {person.nidNumber}</div>
                <div><strong>Mother:</strong> {person.motherName}</div>
              </div>
            </div>

            {/* Previous Generations */}
            <div className="border rounded-md p-4 bg-gray-100 text-sm">
              <h2 className="font-semibold text-gray-800 mb-2">👴 Previous Generations</h2>
              {ancestors.length === 0 ? (
                <p className="text-gray-500 italic">No ancestors found.</p>
              ) : (
                <ul className="space-y-1">
                  {ancestors.map((a, i) => (
                    <li key={i} className="border-b pb-1">
                      <strong>{a.name}</strong> – Born: {a.birthYear}, NID: {a.nidNumber}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Next Generations */}
            <div className="border rounded-md p-4 bg-gray-100 text-sm">
              <h2 className="font-semibold text-gray-800 mb-2">👶 Next Generations</h2>
              {descendants.length === 0 ? (
                <p className="text-gray-500 italic">No descendants found.</p>
              ) : (
                <ul className="space-y-1">
                  {descendants.map((d, i) => (
                    <li key={i} className="border-b pb-1">
                      <strong>{d.name}</strong> – Born: {d.birthYear}, NID: {d.nidNumber}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}