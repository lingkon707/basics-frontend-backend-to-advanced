import React, { useState } from 'react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date('2025-08-01'));
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth.getMonth() + 1, currentMonth.getFullYear());
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const weeks = [];
    let days = [];

    // Empty slots before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="flex justify-center items-center w-14 h-14"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className="flex justify-center items-center w-14 h-14 border-t border-l">
          <span className="text-lg text-black">{day}</span>
        </div>
      );
      if (days.length === 7) {
        weeks.push(<div key={`week-${weeks.length}`} className="flex">{days}</div>);
        days = [];
      }
    }

    // If there are remaining days
    if (days.length) {
      weeks.push(<div key={`week-${weeks.length}`} className="flex">{days}</div>);
    }

    return weeks;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  return (
    <div className="w-full h-full bg-blue-900 text-white flex flex-col items-center">
      <div className="w-full max-w-md bg-cover bg-center p-6" style={{ backgroundImage: 'url("https://via.placeholder.com/1200x800?text=Sky+Image")' }}>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold ">{`${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`}</div>
          <div className="flex space-x-4">
            <button onClick={handlePrevMonth} className="text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={handleNextMonth} className="text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-7 gap-1 text-center text-lg">
          <div className="font-semibold">M</div>
          <div className="font-semibold">T</div>
          <div className="font-semibold">W</div>
          <div className="font-semibold">T</div>
          <div className="font-semibold">F</div>
          <div className="font-semibold">S</div>
          <div className="font-semibold">S</div>
        </div>
        <div className="mt-2 ">
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
