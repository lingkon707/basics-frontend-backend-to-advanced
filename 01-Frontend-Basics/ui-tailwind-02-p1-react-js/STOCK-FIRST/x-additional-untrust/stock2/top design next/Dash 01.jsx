export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f5f6fa] text-gray-800 font-sans">
      {/* Container */}
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-20 h-screen bg-white shadow-lg flex flex-col items-center py-6 space-y-8">
          <div className="text-black font-bold text-2xl">🩺</div>
          <div className="space-y-6 text-xl text-gray-400">
            <button>🏠</button>
            <button>📁</button>
            <button className="text-pink-500">🔘</button>
            <button>📊</button>
            <button>🧾</button>
            <button>⚙️</button>
          </div>
        </aside>

        {/* Content */}
        <section className="flex-1 p-8">

          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">Good Morning, Mikel 👋</h2>
              <p className="text-sm text-gray-500">Sunday, April 30, 2023, 8:00am EST</p>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-md text-sm"
              />
              <button className="text-sm bg-white px-4 py-2 border rounded-md">🔔 Updates</button>
              <button className="text-sm bg-pink-500 text-white px-4 py-2 rounded-md">+ Add tasks</button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["Rx", "Lab Order", "Referral", "Fax", "Compose email"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 bg-white border text-sm rounded-md hover:shadow"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Patient Conversations */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold">Patient Conversations</h3>
              <button className="text-sm px-4 py-2 border border-pink-500 text-pink-500 rounded-md">
                Compose
              </button>
            </div>
            <table className="w-full text-sm">
              <thead className="text-left text-gray-400">
                <tr>
                  <th>Patients</th>
                  <th>Conversations</th>
                  <th>Date updated</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    patient: "Charles Diaz",
                    message: "What PNV should I be taking if I'm experiencing dizziness?",
                    date: "April 30, 2023",
                    time: "11:10 AM",
                  },
                  {
                    patient: "Mia Saravas, Me",
                    message: "What does it mean I have a case of mild fever but I...",
                    date: "April 28, 2023",
                    time: "12:35 PM",
                  },
                  {
                    patient: "Randy Newman, Me, Ashley",
                    message: "You don’t have to worry about a thing here because...",
                    date: "April 26, 2023",
                    time: "1:45 PM",
                  },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2">{row.patient}</td>
                    <td className="py-2 text-gray-700">{row.message}</td>
                    <td className="py-2">{row.date}</td>
                    <td className="py-2">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tasks Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold">Tasks</h3>
              <button className="text-sm px-4 py-2 border border-pink-500 text-pink-500 rounded-md">
                Compose
              </button>
            </div>
            <table className="w-full text-sm">
              <thead className="text-left text-gray-400">
                <tr>
                  <th>Done</th>
                  <th>Assigned To</th>
                  <th>Description</th>
                  <th>Task Created</th>
                  <th>Task Due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    assigned: "Kathryn Murphy",
                    description: "Magpie signed consent. No further action needed",
                    created: "April 30, 2023",
                    due: "May 04, 2023",
                    done: false,
                  },
                  {
                    assigned: "Jacob Jones",
                    description: "Bathroom sink in birth suite 1 broken. Do not use.",
                    created: "April 30, 2023",
                    due: "May 02, 2023",
                    done: true,
                  },
                  {
                    assigned: "Tom Westbrook",
                    description: "Please send lab results for Selma Linkletter to Dr. Long",
                    created: "April 28, 2023",
                    due: "May 01, 2023",
                    done: true,
                  },
                  {
                    assigned: "Randy Newman",
                    description: "Please make sure the prescription is delivered to Tom",
                    created: "April 26, 2023",
                    due: "April 27, 2023",
                    done: true,
                  },
                ].map((task, idx) => (
                  <tr key={idx}>
                    <td className="py-2">
                      <input type="checkbox" defaultChecked={task.done} />
                    </td>
                    <td className="py-2">{task.assigned}</td>
                    <td className="py-2 text-gray-700">{task.description}</td>
                    <td className="py-2">{task.created}</td>
                    <td className="py-2">{task.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Orders for Review */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold">Orders for review</h3>
              <button className="text-sm text-pink-500">+ Add filter</button>
            </div>
            <table className="w-full text-sm">
              <thead className="text-left text-gray-400">
                <tr>
                  <th>No</th>
                  <th>Order Code</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Patients</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-2">01</td>
                  <td className="py-2">#1066</td>
                  <td className="py-2">XYZ Radiology</td>
                  <td className="py-2">US #5487323456</td>
                  <td className="py-2">Charles Diaz</td>
                  <td className="py-2">April 30, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
