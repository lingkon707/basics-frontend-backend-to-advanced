import React from 'react';

const PersonList = ({ person }) => {
  if (!person) return null;

  return (
    <li className="mb-2">
      <div className="font-medium">
        {person.name} <span className="text-gray-500 text-sm">(NID: {person.nidNumber}, Born: {person.birthYear})</span>
      </div>
      <div className="text-sm text-gray-600 ml-2">Mother: {person.motherName}</div>

      {person.children && (
        <ol className="list-decimal list-inside ml-5 mt-2 border-l pl-4 border-gray-300">
          <PersonList person={person.children} />
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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-10">
      <h1 className="text-2xl font-bold mb-4">Family Tree</h1>
      <ol className="list-decimal list-inside">
        <PersonList person={familyTree} />
      </ol>
    </div>
  );
};

export default FamilyTree;
