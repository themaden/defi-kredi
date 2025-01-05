'use client'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface ScoreChartProps {
  score: number
}

export function ScoreChart({ score }: ScoreChartProps) {
  const data = {
    labels: ['Kredi Puanı', 'Kalan'],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ['#4CAF50', '#ECEFF1'],
        hoverBackgroundColor: ['#45A049', '#CFD8DC'],
      },
    ],
  }

  const options = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  return (
    <div className="relative h-48 w-48">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold">{score}</span>
      </div>
    </div>
  )
}

