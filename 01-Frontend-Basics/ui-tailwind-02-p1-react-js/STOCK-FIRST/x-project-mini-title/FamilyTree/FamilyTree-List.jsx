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


const flattenTree = (person) => {
  if (!person) return [];
  return [person, ...flattenTree(person.children)];
};

export default function AncestorList() {
  const familyArray = flattenTree(familyTree);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Ancestor Line</h1>
      <ol className="list-decimal list-inside space-y-2">
        {familyArray.map((person, idx) => (
          <li key={idx} className="border-b border-gray-200 pb-2">
            <span className="font-semibold">{person.name}</span> — Birth Year: {person.birthYear}
          </li>
        ))}
      </ol>
    </div>
  );
}