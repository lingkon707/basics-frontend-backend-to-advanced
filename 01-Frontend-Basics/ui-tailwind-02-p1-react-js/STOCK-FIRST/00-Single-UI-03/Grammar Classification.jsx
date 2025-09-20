import React, { useState } from "react";

const classificationData = {
  Sentence: {
    description:
      "A sentence is a set of words that is complete in itself, typically containing a subject and predicate.",
    examples: [
      "She runs fast.",
      "The dog barks loudly.",
      "I am learning React.",
    ],
  },
  "Part of Speech": {
    description:
      "There are 8+ main parts of speech that classify words according to their function in a sentence.",
    parts: [
      {
        name: "Noun",
        subclassification: [
          "Proper Noun",
          "Common Noun",
          "Abstract Noun",
          "Collective Noun",
          "Concrete Noun",
        ],
      },
      {
        name: "Pronoun",
        subclassification: [
          "Personal Pronoun",
          "Possessive Pronoun",
          "Reflexive Pronoun",
          "Relative Pronoun",
          "Demonstrative Pronoun",
        ],
      },
      {
        name: "Verb",
        subclassification: [
          "Action Verb",
          "Linking Verb",
          "Helping Verb",
          "Transitive Verb",
          "Intransitive Verb",
        ],
      },
      {
        name: "Adjective",
        subclassification: [
          "Descriptive Adjective",
          "Quantitative Adjective",
          "Demonstrative Adjective",
          "Possessive Adjective",
        ],
      },
      {
        name: "Adverb",
        subclassification: [
          "Manner",
          "Place",
          "Time",
          "Frequency",
          "Degree",
          "Probability",
        ],
      },
      {
        name: "Preposition",
        subclassification: [
          "Time Preposition",
          "Place Preposition",
          "Direction Preposition",
          "Agent Preposition",
          "Instrument Preposition",
        ],
      },
      {
        name: "Conjunction",
        subclassification: [
          "Coordinating Conjunction",
          "Subordinating Conjunction",
          "Correlative Conjunction",
        ],
      },
      {
        name: "Interjection",
        subclassification: ["Surprise", "Joy", "Pain", "Approval", "Disapproval"],
      },
      {
        name: "Article",
        subclassification: ["Definite Article", "Indefinite Article"],
      },
    ],
  },
  Tense: {
    description:
      "Tense indicates the time of the action or state of being as shown by a verb.",
    types: [
      "Present Simple",
      "Present Continuous",
      "Present Perfect",
      "Past Simple",
      "Past Continuous",
      "Past Perfect",
      "Future Simple",
      "Future Continuous",
      "Future Perfect",
    ],
  },
  Preposition: {
    description:
      "Prepositions show relationships between nouns (or pronouns) and other words in a sentence.",
    examples: [
      "at, in, on, from, with, about, against, among, before, after",
    ],
  },
};

export default function ClassificationApp() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center font-sans">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">English Grammar Classification</h1>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {Object.keys(classificationData).map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(selectedCategory === category ? null : category)
            }
            className={`
              px-5 py-3 rounded-lg font-semibold text-gray-700
              hover:bg-blue-600 hover:text-white transition
              border-2 border-blue-600
              ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content display */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 text-gray-700">
        {!selectedCategory && (
          <p className="text-center text-lg italic text-gray-500">
            Select a category above to see details.
          </p>
        )}

        {selectedCategory === "Sentence" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Sentence</h2>
            <p className="mb-4">{classificationData.Sentence.description}</p>
            <h3 className="font-semibold mb-2">Examples:</h3>
            <ul className="list-disc list-inside space-y-1">
              {classificationData.Sentence.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </>
        )}

        {selectedCategory === "Part of Speech" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Parts of Speech</h2>
            <p className="mb-6">{classificationData["Part of Speech"].description}</p>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4">
              {classificationData["Part of Speech"].parts.map((part) => (
                <div key={part.name}>
                  <h3 className="text-xl font-semibold mb-1">{part.name}</h3>
                  <p className="italic mb-1">Sub-classification:</p>
                  <ul className="list-disc list-inside ml-4 space-y-0.5">
                    {part.subclassification.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedCategory === "Tense" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Tense</h2>
            <p className="mb-6">{classificationData.Tense.description}</p>
            <ul className="list-disc list-inside space-y-1 max-w-md mx-auto">
              {classificationData.Tense.types.map((tense, i) => (
                <li key={i}>{tense}</li>
              ))}
            </ul>
          </>
        )}

        {selectedCategory === "Preposition" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Preposition</h2>
            <p className="mb-4">{classificationData.Preposition.description}</p>
            <h3 className="font-semibold mb-2">Examples:</h3>
            <p>{classificationData.Preposition.examples[0]}</p>
          </>
        )}
      </div>
    </div>
  );
}
