import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center py-12 px-6">
      <Head>
        <title>Doctor Profile</title>
      </Head>
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-2xl flex flex-col md:flex-row gap-8 p-8 md:p-10">
        
        {/* Doctor Profile Section */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            className="h-40 w-40 object-cover rounded-full border-4 border-gray-300"
            src="/doctor-image.jpg" // Add your image path
            alt="Doctor Profile"
          />
        </div>
        
        {/* Doctor Details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">Dr. Emily Chen, MD</h1>
          <p className="text-xl text-gray-500">Internal Medicine, Cardiology</p>
          
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="text-yellow-500">⭐ 4.8</span>
            <span className="text-sm">38 reviews</span>
          </div>

          <p className="text-gray-600 text-lg">
            Dr. Emily Chen is praised for professionalism, empathy, and clear explanations. 
            Patients value her cardiology expertise and easy booking. Some note rare communication delays.
          </p>

          {/* Ratings Section */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <span className="text-sm text-gray-500">Wait Time</span>
              <div className="text-xl font-semibold text-gray-800">4.63</div>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-500">Bedside Manner</span>
              <div className="text-xl font-semibold text-gray-800">4.19</div>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-500">Clear Explanations</span>
              <div className="text-xl font-semibold text-gray-800">4.74</div>
            </div>
          </div>

          {/* Patient Visit Reasons */}
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Top Patient Visit Reasons</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Hypertension Management</span><span>35%</span>
              </li>
              <li className="flex justify-between">
                <span>Preventive Cardiology</span><span>25%</span>
              </li>
              <li className="flex justify-between">
                <span>Heart Failure Monitoring</span><span>22%</span>
              </li>
              <li className="flex justify-between">
                <span>Chest Pain Evaluation</span><span>18%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Appointment Booking Section */}
        <div className="w-full md:w-80 bg-gray-100 p-6 rounded-lg space-y-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Book an Appointment</h2>
          
          {/* Date Picker */}
          <div>
            <label htmlFor="appointment-date" className="text-sm text-gray-600">Choose a Date</label>
            <input
              id="appointment-date"
              type="date"
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label htmlFor="appointment-time" className="text-sm text-gray-600">Choose a Time</label>
            <select
              id="appointment-time"
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            >
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
            </select>
          </div>

          {/* Book Now Button */}
          <button className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg hover:bg-yellow-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
