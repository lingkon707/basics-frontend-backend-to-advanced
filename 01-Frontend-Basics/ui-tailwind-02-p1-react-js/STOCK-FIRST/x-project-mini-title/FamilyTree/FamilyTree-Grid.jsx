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
      name: "Asad Khan",
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

// Flatten the nested tree into an array
const flattenTree = (person) => {
  if (!person) return [];
  return [
    {
      name: person.name,
      birthYear: person.birthYear,
      motherName: person.motherName,
    },
    ...flattenTree(person.children),
  ];
};

const FamilyGrid = () => {
  const familyArray = flattenTree(familyTree);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Family Tree Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {familyArray.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
            <p>
              <span className="font-medium">Birth Year:</span> {person.birthYear}
            </p>
            <p>
              <span className="font-medium">Mother&apos;s Name:</span>{" "}
              {person.motherName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyGrid;
