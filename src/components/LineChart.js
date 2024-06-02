import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const dates = data.map(
    (event) => new Date(event.timestamp).toISOString().split("T")[0]
  );
  const dateCounts = dates.reduce((acc, date) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(dateCounts),
    datasets: [
      {
        label: "Events Over Time",
        data: Object.values(dateCounts),
        fill: false,
        borderColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl mb-2 text-white">Events Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
