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
// Flatten tree with parent linkage
const flattenTreeWithParents = (person, parent = null) => {
  if (!person) return [];
  return [
    { ...person, parent },
    ...flattenTreeWithParents(person.children, person),
  ];
};

export default function FatherNIDVerify() {
  const fullFamily = flattenTreeWithParents(familyTree);

  const [yourNID, setYourNID] = useState("");
  const [fatherNID, setFatherNID] = useState("");
  const [step, setStep] = useState(1);
  const [you, setYou] = useState(null);
  const [fatherValid, setFatherValid] = useState(false);
  const [error, setError] = useState("");

  const handleYourNIDSubmit = (e) => {
    e.preventDefault();
    const person = fullFamily.find((p) => p.nidNumber === parseInt(yourNID, 10));
    if (person) {
      setYou(person);
      setStep(2);
      setError("");
    } else {
      setError("Your NID is invalid.");
    }
  };

  const handleFatherNIDSubmit = (e) => {
    e.preventDefault();
    if (!you?.parent) {
      setError("No parent found for this user.");
      return;
    }
    if (parseInt(fatherNID, 10) === you.parent.nidNumber) {
      setFatherValid(true);
      setError("");
    } else {
      setError("Father's NID is incorrect.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Father NID Verification</h1>

      {step === 1 && (
        <form onSubmit={handleYourNIDSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Enter Your NID Number:</span>
            <input
              type="number"
              value={yourNID}
              onChange={(e) => setYourNID(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        </form>
      )}

      {step === 2 && !fatherValid && (
        <form onSubmit={handleFatherNIDSubmit} className="space-y-4">
          <p className="text-sm text-gray-600">
            Hello <strong>{you.name}</strong>. Please enter your father's NID.
          </p>
          <label className="block">
            <span className="text-gray-700">Enter Father's NID:</span>
            <input
              type="number"
              value={fatherNID}
              onChange={(e) => setFatherNID(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Verify Father
          </button>
        </form>
      )}

      {fatherValid && you?.parent && (
        <div className="bg-green-100 border border-green-400 rounded-md p-4">
          <h2 className="text-xl font-bold text-green-700 mb-2">✅ Father's Info Valid</h2>
          <p>
            <strong>Name:</strong> {you.parent.name}
          </p>
          <p>
            <strong>Birth Year:</strong> {you.parent.birthYear}
          </p>
          <p>
            <strong>NID:</strong> {you.parent.nidNumber}
          </p>
          <p>
            <strong>Mother's Name:</strong> {you.parent.motherName}
          </p>
        </div>
      )}
    </div>
  );
}
