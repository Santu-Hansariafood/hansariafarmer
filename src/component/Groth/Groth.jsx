import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const growthData = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Growth',
      data: [10, 20, 30, 100, 500, 500, 700, 900],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const pieData = {
  labels: ['US', 'Others'],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
    },
  ],
};

const Growth = () => (
  <div className="flex flex-col items-center p-6 md:flex-row md:justify-center">
    <div className="w-full max-w-md m-6">
      <h2 className="text-xl font-bold mb-4 text-center">Growth Over Years</h2>
      <Line data={growthData} />
    </div>
    <div className="w-full max-w-md m-6">
      <h2 className="text-xl font-bold mb-4 text-center">Distribution</h2>
      <Pie data={pieData} />
    </div>
  </div>
);

export default Growth;
