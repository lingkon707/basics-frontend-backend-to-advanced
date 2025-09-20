
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const rawHours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const intlHours = String(rawHours).padStart(2, "0");

  // BDTIME logic
  let bdOutput = "BDTIME not applicable";
  if (rawHours >= 13 && rawHours <= 23) {
    const bdTime = rawHours - 12;
    bdOutput = `BDTIME = ${bdTime} : ${minutes} : ${seconds}`;
  }

  // Format date
  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Date */}
      <div className="text-2xl font-bold mb-6">{formattedDate}</div>

      {/* International Time */}
      <div className="mb-4 text-center">
        <div className="text-lg font-semibold mb-1">International Time</div>
        <div className="text-3xl bg-white px-6 py-3 rounded-lg shadow">
          {intlHours} : {minutes} : {seconds}
        </div>
      </div>

      {/* BDTIME */}
      <div className="text-center">
        <div className="text-lg font-semibold mb-1">BDTIME</div>
        <div className="text-3xl bg-white px-6 py-3 rounded-lg shadow">
          {bdOutput}
        </div>
      </div>
    </div>
  );
};

export default Clock;
