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
        name: "Jobed",
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

// Flatten the tree to an array
const flattenTree = (person) => {
  if (!person) return [];
  return [person, ...flattenTree(person.children)];
};

// Verify NID using the new nidNumber property
const verifyNID = (nid, person) => {
  return parseInt(nid, 10) === person.nidNumber;
};

export default function NIDVerify() {
  const familyArray = flattenTree(familyTree);
  const [index, setIndex] = useState(0);
  const [nidInput, setNidInput] = useState("");
  const [error, setError] = useState("");

  if (index >= familyArray.length) {
    return (
      <div className="p-6 max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">All Verified ✅</h1>
        <p>Congratulations! All family members have been verified.</p>
      </div>
    );
  }

  const currentPerson = familyArray[index];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verifyNID(nidInput, currentPerson)) {
      setError("");
      setNidInput("");
      setIndex(index + 1);
    } else {
      setError("Invalid NID. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">NID Verification</h1>
      <div className="mb-4">
        <p>
          <strong>Name:</strong> {currentPerson.name}
        </p>
        <p>
          <strong>Birth Year:</strong> {currentPerson.birthYear}
        </p>
        <p>
          <strong>Mother's Name:</strong> {currentPerson.motherName}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Enter NID for {currentPerson.name}:</span>
          <input
            type="number"
            value={nidInput}
            onChange={(e) => setNidInput(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </label>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Verify NID
        </button>
      </form>
      <p className="mt-4 text-center text-gray-500">
        Person {index + 1} of {familyArray.length}
      </p>
    </div>
  );
}
