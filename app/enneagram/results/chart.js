"use client";

import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function EnneagramPolarChart({ score }) {
  // score is like: [{ type: 1, score: 75 }, { type: 2, score: 50 }, ...]

  // 1️⃣ Sort scores by value (descending)
  const sortedScores = [...score].sort((a, b) => b.score - a.score);

  // 2️⃣ Tailwind gray scale colors
  const colors = [
    "#f3f4f6", // bg-gray-100
    "#e5e7eb", // bg-gray-200
    "#d1d5db", // bg-gray-300
    "#9ca3af", // bg-gray-400
    "#6b7280", // bg-gray-500
    "#4b5563", // bg-gray-600
    "#374151", // bg-gray-700
    "#1f2937", // bg-gray-800
    "#111827"  // bg-gray-900
  ];
  colors.reverse();

  // 3️⃣ Build Chart.js data object
  const data = {
    labels: sortedScores.map(item => `Type ${item.type}`),
    datasets: [
      {
        label: "Enneagram Scores",
        data: sortedScores.map(item => item.score),
        backgroundColor: colors.slice(0, sortedScores.length),
        borderWidth: 1
      }
    ]
  };

  return <div style={{ width: "clamp(15em, 70vw, 30em)", aspectRatio: 1 }}>
      <PolarArea data={data}
                 options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      r: {
                        min: 0,
                        max: 100,
                        ticks: {
                          stepSize: 20
                        }
                      }
                    }
                  }}
      />
  </div>;
}
