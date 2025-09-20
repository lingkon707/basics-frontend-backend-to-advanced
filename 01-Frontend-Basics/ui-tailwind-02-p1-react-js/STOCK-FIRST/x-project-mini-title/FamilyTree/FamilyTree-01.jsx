import React from "react";

const familyTree = {
  name: "Mamun",
  birthYear: 1945,
  motherName: "Fatima Bibi",
  children: {
    name: "Sujon",
    birthYear: 1970,
    motherName: "Ayesha Khan",
    children: {
      name: "Vivo",
      birthYear: 1992,
      motherName: "Nusrat Jahan",
      children: {
        name: "Jobed",
        birthYear: 2012,
        motherName: "Sadia Malik",
        children: {
          name: "Kamal",
          birthYear: 2032,
          motherName: "Rabia Noor",
          children: {
            name: "Shakib",
            birthYear: 2055,
            motherName: "Mahira Yousaf",
            children: null,
          },
        },
      },
    },
  },
};

const Person = ({ person }) => {
  if (!person) return null;

  return (
    <div className="ml-6 border-l-2 border-gray-300 pl-4 mt-4">
      <p>
        <strong>Name:</strong> {person.name}
      </p>
      <p>
        <strong>Birth Year:</strong> {person.birthYear}
      </p>
      <p>
        <strong>Mother&apos;s Name:</strong> {person.motherName}
      </p>
      {person.children && (
        <>
          <p className="font-semibold mt-2">Children:</p>
          <Person person={person.children} />
        </>
      )}
    </div>
  );
};

export default function FamilyTree() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Family Tree</h1>
      <Person person={familyTree} />
    </div>
  );
}
