"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export function LineChart({ labels, series, height = 256 }) {
  const data = {
    labels,
    datasets: series.map((s) => ({
      label: s.label,
      data: s.data,
      borderColor: s.color,
      backgroundColor: s.bgColor ?? `${s.color}33`,
      fill: true,
      tension: 0.35,
      pointRadius: 0,
      borderWidth: 2,
    })),
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { mode: "index", intersect: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#6b7280" } },
      y: { grid: { color: "#f0f0f0" }, ticks: { color: "#6b7280" } },
    },
  };
  return (
    <div style={{ height }}>
      <Line data={data} options={options} />
    </div>
  );
}

export function DoughnutChart({ labels, values, colors, height = 256 }) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    cutout: "70%",
  };
  return (
    <div style={{ height }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export function BarChart({ labels, values, color = "#34a373", height = 256 }) {
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: values,
        backgroundColor: color,
        borderRadius: 8,
        barThickness: 18,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#6b7280" } },
      y: { grid: { color: "#f0f0f0" }, ticks: { color: "#6b7280" } },
    },
  };
  return (
    <div style={{ height }}>
      <Bar data={data} options={options} />
    </div>
  );
}


