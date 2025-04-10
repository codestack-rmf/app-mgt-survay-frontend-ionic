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
        backgroundColor: "rgb(89, 106, 227, 0.3)",
        borderColor: "rgb(89, 106, 227)",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        pointBorderColor: "rgb(89, 106, 227)",
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '55%'}}>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;
