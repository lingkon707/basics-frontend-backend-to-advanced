import React, { useState } from 'react';

const data = {
  "A": [
    "Abortion", "Affirmative Action", "Age", "Age, Generations & Tech", "Algorithms",
    "American News Pathways 2020 Project", "American Trends Panel", "Angela Merkel", "Apps",
    "Artificial Intelligence", "Asian Americans", "Atheism & Agnosticism", "Audio, Radio & Podcasts",
    "Authoritarianism", "Automation"
  ],
  "B": ["Bag"],
  "H": [
    "Happiness & Life Satisfaction", "Health Care", "Health Policy", "Healthcare Online", "High-Skilled Immigration",
    "Higher Education", "Hinduism", "Hispanic/Latino Demographics", "Hispanic/Latino Identity", "Hispanic/Latino Voters",
    "Hispanics/Latinos", "Hispanics/Latinos & Income", "Hispanics/Latinos & Language", "Hispanics/Latinos & Education",
    "Historically Black Protestantism", "Homeownership & Renting", "Household Structure & Family Roles",
    "Human Enhancement", "Human Rights"
  ],
  "R": [
    "Race & Ethnicity", "Race, Ethnicity & Politics", "Race, Ethnicity & Religion", "Race Relations",
    "Racial Bias & Discrimination", "Racial & Ethnic Groups", "Racial & Ethnic Groups Online", "Racial & Ethnic Identity",
    "Racial & Ethnic Shifts", "Racial Intermarriage", "Recessions & Recoveries", "Refugees & Asylum Seekers", "Religion",
    "Religion & Government", "Religion & Abortion", "Religion & Bioethics", "Religion & Death Penalty", "Religion & Government"
  ]
};

function FilterList() {
  const [selectedLetter, setSelectedLetter] = useState('A');

  return (
    <div className='bg-green-200 min-h-screen'>

       <div className="container  mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setSelectedLetter('A')}
        >
          A
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setSelectedLetter('B')}
        >
          B
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setSelectedLetter('H')}
        >
          H
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setSelectedLetter('R')}
        >
          R
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data[selectedLetter].map((item, index) => (
          <div key={index} className="bg-black text-white p-4 rounded-lg shadow-lg">
            {item}
          </div>
        ))}
      </div>
    </div>


    </div>
   
  );
}

export default FilterList;
