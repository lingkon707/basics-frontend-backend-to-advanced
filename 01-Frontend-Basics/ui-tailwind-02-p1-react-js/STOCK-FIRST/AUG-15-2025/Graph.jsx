import React from "react";
import { Bar } from "react-chartjs-2";
// npm install chart.js react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registering the required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VaccineChart = () => {
  // Data for the bar chart
  const data = {
    labels: ["India", "Russia", "Japan", "Australia", "America", "Dubai", "France", "Italy"], // X-axis labels
    datasets: [
      {
        label: "COVID-19 vaccine",
        data: [2000, 2500, 3000, 2200, 3200, 1500, 2800, 2900],
        backgroundColor: "#34D399", // Blue
      },
      {
        label: "Dengue vaccine",
        data: [150, 100, 200, 120, 140, 110, 130, 115],
        backgroundColor: "#FB923C", // Orange
      },
      {
        label: "Ebola vaccine",
        data: [50, 80, 100, 90, 120, 60, 80, 110],
        backgroundColor: "#F43F5E", // Red
      },
      {
        label: "H1N1 vaccine",
        data: [100, 120, 90, 150, 110, 130, 125, 135],
        backgroundColor: "#A78BFA", // Purple
      },
      {
        label: "Hepatitis A vaccine",
        data: [50, 60, 70, 50, 65, 60, 55, 75],
        backgroundColor: "#9CA3AF", // Gray
      },
      {
        label: "HPV vaccine",
        data: [75, 85, 95, 100, 120, 80, 110, 90],
        backgroundColor: "#22D3EE", // Light Blue
      },
      {
        label: "Influenza vaccine",
        data: [200, 300, 250, 220, 230, 210, 260, 280],
        backgroundColor: "#FBBF24", // Yellow
      },
      {
        label: "Polio vaccine",
        data: [30, 40, 35, 50, 55, 60, 45, 70],
        backgroundColor: "#6EE7B7", // Green
      },
      {
        label: "Rabies vaccine",
        data: [20, 30, 40, 50, 60, 55, 45, 65],
        backgroundColor: "#F87171", // Light Red
      },
      {
        label: "Others",
        data: [200, 150, 180, 170, 160, 130, 190, 150],
        backgroundColor: "#E5E7EB", // Light Gray
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Vaccination Doses by Country and Vaccine Type",
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
          stepSize: 500,
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

export default VaccineChart;
