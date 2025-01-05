'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface ActivityChartProps {
  history: Array<{ date: string; score: number }>
}

export function ActivityChart({ history }: ActivityChartProps) {
  const data = {
    labels: history.map(item => item.date),
    datasets: [
      {
        label: 'Kredi Puanı',
        data: history.map(item => item.score),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Kredi Puanı Geçmişi',
      },
    },
  }

  return <Line options={options} data={data} />
}

