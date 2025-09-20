import { useState } from 'react'

export default function History() {
  const content = {
    historyData: [
      {
        name: 'Mike Taylor',
        time: '15:37:15',
        amount: '$5000',
        date: '01/03/2023',
        status: 'Excellent',
      },
      {
        name: 'Jack Green',
        time: '15:37:15',
        amount: '$5000',
        date: '01/03/2023',
        status: 'Average',
      },
      {
        name: 'Depri Riandi',
        time: '15:37:15',
        amount: '$5000',
        date: '01/03/2023',
        status: 'Excellent',
      },
      {
        name: 'Willie Cole',
        time: '15:37:15',
        amount: '$5000',
        date: '01/03/2023',
        status: 'Average',
      },
      {
        name: 'Richardson Smith',
        time: '15:37:15',
        amount: '$5000',
        date: '01/03/2023',
        status: 'Well',
      },
      {
        name: 'Carmen Lewis',
        time: '15:37:15',
        amount: '$5000',
        date: '01/03/2023',
        status: 'Average',
      },
    ],
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent':
        return 'bg-green-200 text-green-800';
      case 'Average':
        return 'bg-yellow-200 text-yellow-800';
      case 'Well':
        return 'bg-blue-200 text-blue-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-60 bg-black text-white p-6">
        <div className="text-2xl font-bold mb-8">Calldash</div>
        <ul>
          <li className="mb-4"><a href="#" className="text-lg hover:text-gray-400">Dashboard</a></li>
          <li className="mb-4"><a href="#" className="text-lg hover:text-gray-400">History</a></li>
          <li className="mb-4"><a href="#" className="text-lg hover:text-gray-400">Team</a></li>
          <li className="mb-4"><a href="#" className="text-lg hover:text-gray-400">Panel</a></li>
          <li className="mb-4"><a href="#" className="text-lg hover:text-gray-400">Integrations</a></li>
          <li className="mb-4"><a href="#" className="text-lg hover:text-gray-400">Pricing</a></li>
        </ul>
        <div className="mt-auto">
          <ul>
            <li className="mb-4"><a href="#" className="text-lg hover:text-gray-400">Settings</a></li>
            <li><a href="#" className="text-lg hover:text-gray-400">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">History</h1>
          <p className="text-lg text-gray-600">Showing your all histories with a clear view.</p>
        </div>
        
        {/* History Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {content.historyData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">{item.name}</div>
                <div className={`py-1 px-3 text-sm font-medium rounded-full ${getStatusColor(item.status)}`}>{item.status}</div>
              </div>
              <div className="mt-4 text-sm text-gray-500">{item.time} | {item.date}</div>
              <div className="mt-2 text-lg font-bold">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
