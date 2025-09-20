import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("June 25, 2025");
  const [selectedTime, setSelectedTime] = useState("9:00 AM");

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>HealthRate - Dr. Emily Chen</title>
        <meta name="description" content="Doctor Profile Page with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row items-start md:space-x-12 bg-white rounded-lg shadow-lg">
        {/* Left Section: Doctor Profile */}
        <div className="flex-shrink-0 w-full md:w-2/5">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200"
            alt="Dr. Emily Chen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: Doctor Info and Appointment Booking */}
        <div className="w-full md:w-3/5 space-y-8">
          {/* Doctor's Info */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-800">Dr. Emily Chen, MD</h1>
            <p className="text-lg text-gray-600">Internal Medicine, Cardiology</p>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <span className="font-semibold text-teal-600">4.8</span>
                <span className="ml-2">38 reviews</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Dr. Emily Chen is praised for professionalism, empathy, and clear explanations. Patients value her cardiology expertise and easy booking. Some note rare communication delays.
            </p>
          </div>

          {/* Ratings */}
          <div className="flex space-x-4 mt-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Wait Time</h3>
              <div className="flex items-center space-x-2">
                <span className="text-teal-600 font-semibold">4.63</span>
                <span>⭐⭐⭐⭐☆</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Bedside Manner</h3>
              <div className="flex items-center space-x-2">
                <span className="text-teal-600 font-semibold">4.19</span>
                <span>⭐⭐⭐⭐☆</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Clear Explanations</h3>
              <div className="flex items-center space-x-2">
                <span className="text-teal-600 font-semibold">4.74</span>
                <span>⭐⭐⭐⭐☆</span>
              </div>
            </div>
          </div>

          {/* Top Patient Visit Reasons */}
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Top Patient Visit Reasons</h3>
            <div className="flex space-x-4">
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Hypertension Management - 35%</p>
              </div>
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Preventive Cardiology - 25%</p>
              </div>
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "22%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Heart Failure - 22%</p>
              </div>
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "18%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Chest Pain Evaluation - 18%</p>
              </div>
            </div>
          </div>

          {/* Professional Activities */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Professional Activities</h3>
            <div className="flex space-x-4 mt-4">
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "47%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Hypertension - 47%</p>
              </div>
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "24%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Cardiovascular Disease - 24%</p>
              </div>
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "16%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Preventive Care - 16%</p>
              </div>
              <div className="w-1/4">
                <div className="w-full bg-teal-100 rounded-full h-2.5 mb-2">
                  <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Electrocardiograms - 10%</p>
              </div>
            </div>
          </div>

          {/* Appointment Booking */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800">Book an Appointment</h3>
            <div className="flex space-x-8 mt-4">
              {/* Calendar */}
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedDate("June 25, 2025")}
                  >
                    25
                  </div>
                  <div
                    className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedDate("June 26, 2025")}
                  >
                    26
                  </div>
                </div>
                <p className="text-lg text-gray-600">Selected Date: {selectedDate}</p>
              </div>

              {/* Time */}
              <div className="flex flex-col space-y-4">
                <button
                  className="bg-teal-600 text-white py-2 rounded-lg"
                  onClick={() => setSelectedTime("9:00 AM")}
                >
                  9:00 AM
                </button>
                <button
                  className="bg-teal-600 text-white py-2 rounded-lg"
                  onClick={() => setSelectedTime("10:00 AM")}
                >
                  10:00 AM
                </button>
                <button
                  className="bg-teal-600 text-white py-2 rounded-lg"
                  onClick={() => setSelectedTime("11:00 AM")}
                >
                  11:00 AM
                </button>
              </div>
            </div>

            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg mt-6 transform transition duration-300 hover:bg-teal-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
