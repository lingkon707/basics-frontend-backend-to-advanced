import React from "react";
import { Bar } from "react-chartjs-2";
// npm install chart.js react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registering the required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ElectionChart = () => {
  // Data for the election chart
  const data = {
    labels: ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia"], // X-axis labels (States)
    datasets: [
      {
        label: "Democratic Votes",
        data: [11.2, 5.6, 4.8, 7.2, 6.5, 6.8, 5.3, 4.9], // Votes for Democratic party (in millions)
        backgroundColor: "#1E40AF", // Blue
      },
      {
        label: "Republican Votes",
        data: [9.8, 8.9, 4.3, 6.1, 7.4, 6.3, 5.7, 5.5], // Votes for Republican party (in millions)
        backgroundColor: "#EF4444", // Red
      },
      {
        label: "Other Party Votes",
        data: [0.8, 1.0, 0.7, 0.9, 0.5, 0.6, 0.7, 0.4], // Votes for Other parties (in millions)
        backgroundColor: "#9CA3AF", // Gray
      },
      {
        label: "Independent Votes",
        data: [0.6, 1.1, 0.5, 0.8, 0.7, 0.8, 0.6, 0.6], // Votes for Independents (in millions)
        backgroundColor: "#34D399", // Green
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Election Results by State (USA)",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Adjust this for better visibility of large numbers
        },
      },
    },
  };

  return (
    <div className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ElectionChart;
