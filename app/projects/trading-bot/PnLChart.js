'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const dataPoints = [0, 312, 580, 490, 820, 1100, 940, 1380, 1620, 1490, 1890, 2240]

const data = {
  labels,
  datasets: [
    {
      data: dataPoints,
      borderColor: '#00d9ff',
      backgroundColor: 'rgba(0,217,255,0.06)',
      borderWidth: 1.5,
      pointRadius: 3,
      pointBackgroundColor: '#00d9ff',
      tension: 0.4,
      fill: true,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => ` $${ctx.parsed.y.toLocaleString()}`,
      },
      backgroundColor: '#111',
      borderColor: '#00d9ff',
      borderWidth: 1,
      titleColor: '#a1a1aa',
      bodyColor: '#00d9ff',
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(255,255,255,0.04)' },
      ticks: { color: '#52525b', font: { family: 'monospace', size: 11 } },
      border: { color: 'transparent' },
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.04)' },
      ticks: {
        color: '#52525b',
        font: { family: 'monospace', size: 11 },
        callback: (v) => `$${v.toLocaleString()}`,
      },
      border: { color: 'transparent' },
    },
  },
}

export default function PnLChart() {
  return (
    <div className="h-64">
      <Line data={data} options={options} />
    </div>
  )
}
