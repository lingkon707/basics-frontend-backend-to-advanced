import React from "react";

const PersonList = ({ person, level = 1 }) => {
  if (!person) return null;

  return (
    <li className="relative pl-6 pb-4">
      {/* Line connector */}
      {level > 1 && (
        <span className="absolute left-0 top-2 h-full border-l-2 border-gray-300"></span>
      )}

      <div className="bg-gray-50 p-3 rounded-md shadow-sm hover:shadow-md transition">
        <p className="text-lg font-semibold text-gray-800">{person.name}</p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-500">NID:</span> {person.nidNumber}
          {"  |  "}
          <span className="font-medium text-gray-500">Born:</span> {person.birthYear}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Mother:</span> {person.motherName}
        </p>
      </div>

      {/* Render child if exists */}
      {person.children && (
        <ol className="list-decimal list-inside mt-2 ml-4">
          <PersonList person={person.children} level={level + 1} />
        </ol>
      )}
    </li>
  );
};

const FamilyTree = () => {
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

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">📜 Family Tree</h1>
      <ol className="list-decimal list-inside">
        <PersonList person={familyTree} />
      </ol>
    </div>
  );
};

export default FamilyTree;
