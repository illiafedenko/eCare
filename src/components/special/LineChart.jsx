import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Users',
        data: [12, 10, 15, 23, 16, 11],
        fill: false,
        borderColor: 'rgb(255, 100, 100)',
        tension: 0.1
      },
      {
        label: 'Hours',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(100, 100, 255)',
        tension: 0.1
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    // aspectRatio: 1.5,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        font: {
          family: 'poppins',
          size: 16
        }
      },
      title: {
        display: true,
        text: 'Monthly Users',
        position: 'top',
        align: 'start',
        font: {
          family: 'poppins',
          size: 16
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  return (
    <div className=' w-full h-full'>
      <Line data={data} options={options} />
    </div>
  )
}
