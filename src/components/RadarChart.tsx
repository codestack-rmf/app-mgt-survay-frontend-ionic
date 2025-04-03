import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartProps {
  answers: any;
}

const RadarChart: React.FC<RadarChartProps> = ({ answers }) => {
  const data = {
    labels: [
      "The List",
      "Manabase",
      "Strategy",
      "Win Condition",
      "Speed",
      "Consistency",
      "Player Experience",
      "Commander Staples",
      "Build Philosophy",
    ],
    datasets: [
      {
        label: "Deck Profile",
        data: [
          answers.theList,
          answers.manabase,
          answers.strategy,
          answers.winCondition,
          answers.speed,
          answers.consistency,
          answers.playerExperience,
          answers.commanderStaples,
          answers.buildPhilosophy,
        ],
        backgroundColor: "rgba(0, 122, 255, 0.3)",
        borderColor: "#007aff",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#007aff",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 4,
        ticks: {
          stepSize: 1,
          color: "#666",
        },
        grid: {
          color: "#ccc",
        },
        pointLabels: {
          color: "#333",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
