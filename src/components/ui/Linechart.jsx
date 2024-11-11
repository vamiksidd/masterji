"use client";
import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { graph_data } from "../../app/dashboard/analytics/user_data";
Chart.register(CategoryScale);
const Linechart = () => {
  const [chartData, setChartData] = useState({
    labels: graph_data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: graph_data.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return context.raw;
          },
        },
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales Performance",
        },
      },
    },
  };

  return (
    <div>
      {" "}
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Linechart;
