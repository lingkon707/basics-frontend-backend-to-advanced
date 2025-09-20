"use client";

const numbers = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
  { number: 9 },
];

export default function NumerologyGrid() {
  return (
    <main className="min-h-screen bg-white p-6 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
        {numbers.map((item) => (
          <div
            key={item.number}

            // className="bg-[url('https://i.imgur.com/8Km9tLL.jpg')] bg-cover bg-center rounded-xl shadow-lg flex items-center justify-between px-6 py-4 text-white"
            className="bg-[#6495ED] bg-cover bg-center rounded-xl shadow-lg flex items-center justify-between px-6 py-4 text-white"
          >
            <div>
              <p className="text-lg font-medium">Number {item.number} in</p>
              <p className="text-lg font-medium">Numerology</p>
            </div>
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-yellow-400 border-dashed text-2xl font-bold">
              {item.number}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
