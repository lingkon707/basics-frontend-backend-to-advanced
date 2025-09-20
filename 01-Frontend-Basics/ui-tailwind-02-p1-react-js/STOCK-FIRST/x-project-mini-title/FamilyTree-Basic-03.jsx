import React from 'react';

const PersonCard = ({ person }) => {
  if (!person) return null;

  return (
    <div className="border rounded-lg p-4 my-4 ml-4 bg-white shadow-md">
      <p><span className="font-semibold">Name:</span> {person.name}</p>
      <p><span className="font-semibold">Birth Year:</span> {person.birthYear}</p>
      <p><span className="font-semibold">NID Number:</span> {person.nidNumber}</p>
      <p><span className="font-semibold">Mother's Name:</span> {person.motherName}</p>

      {/* Recursively render children */}
      {person.children && (
        <div className="border-l-2 border-gray-300 mt-4 pl-4">
          <PersonCard person={person.children} />
        </div>
      )}
    </div>
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
    <div className="max-w-2xl mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Family Tree</h1>
      <PersonCard person={familyTree} />
    </div>
  );
};

export default FamilyTree;
