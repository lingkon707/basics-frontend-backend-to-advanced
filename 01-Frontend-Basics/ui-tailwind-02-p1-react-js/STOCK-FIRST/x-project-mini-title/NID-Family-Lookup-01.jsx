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



// Flatten tree with parent references
const flattenTreeWithParent = (person, parent = null) => {
  if (!person) return [];
  const current = { ...person, parent };
  return [current, ...flattenTreeWithParent(person.children, current)];
};

// Get all ancestors of a person
const getAncestors = (person) => {
  const list = [];
  let current = person?.parent;
  while (current) {
    list.push(current);
    current = current.parent;
  }
  return list.reverse(); // from oldest to nearest
};

// Get all descendants of a person
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
      setError("No match found for that NID.");
      setPerson(null);
    }
  };

  const ancestors = person ? getAncestors(person) : [];
  const descendants = person ? getDescendants(person) : [];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-md shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-center">Family Line Explorer</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Enter Your NID Number:</span>
          <input
            type="number"
            value={nidInput}
            onChange={(e) => setNidInput(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          View Family Line
        </button>
      </form>

      {person && (
        <>
          {/* Ancestors */}
          <div>
            <h2 className="text-xl font-semibold mb-2">🧓 Previous Generations</h2>
            {ancestors.length === 0 ? (
              <p className="text-gray-500">No ancestors found (you might be the first generation).</p>
            ) : (
              <ul className="list-disc pl-6 space-y-1">
                {ancestors.map((p, i) => (
                  <li key={i}>
                    <strong>{p.name}</strong> (Born {p.birthYear}) – NID: {p.nidNumber}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* You */}
          <div className="bg-gray-100 p-4 rounded-md border my-4">
            <h2 className="text-lg font-semibold text-center">🧍 You</h2>
            <p>
              <strong>{person.name}</strong> — Birth Year: {person.birthYear} — NID: {person.nidNumber}
            </p>
            <p>Mother: {person.motherName}</p>
          </div>

          {/* Descendants */}
          <div>
            <h2 className="text-xl font-semibold mb-2">👶 Next Generations</h2>
            {descendants.length === 0 ? (
              <p className="text-gray-500">No descendants found.</p>
            ) : (
              <ul className="list-disc pl-6 space-y-1">
                {descendants.map((p, i) => (
                  <li key={i}>
                    <strong>{p.name}</strong> (Born {p.birthYear}) – NID: {p.nidNumber}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}