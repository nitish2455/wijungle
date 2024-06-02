import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const severities = [1, 2, 3, 4, 5];
  const severityCounts = severities.map((severity) => {
    return data.filter((event) => event.severity === severity).length;
  });

  const chartData = {
    labels: severities.map((severity) => `Severity ${severity}`),
    datasets: [
      {
        data: severityCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl mb-2 text-white">Severity Levels</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
