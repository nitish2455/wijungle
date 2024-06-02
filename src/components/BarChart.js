import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const categories = [...new Set(data.map((event) => event.category))];
  const categoryCounts = categories.map((category) => {
    return data.filter((event) => event.category === category).length;
  });

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Event Categories",
        data: categoryCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl mb-2 text-white">Event Categories</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
