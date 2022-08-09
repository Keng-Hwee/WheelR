import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, BarElement } from 'chart.js'

const PremiumCollected = () => {
  Chart.register(CategoryScale, BarElement)

  var labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  var chartData = {
    labels: labels,
    datasets: [
      {
        data: [
          100, 200, -300, 400, 200, 0, 100, -120, 500, 120, 200, 240,
        ],
      },
    ],
  }

  return (
    <div className="px-4 sm:px-8 py-5 drop-shadow-md rounded-lg bg-slate-50">
      <p className="font-extrabold text-5xl text-slate-700">
        $ 422.88
      </p>
      <p className="text-md text-slate-400 mt-3 font-semibold">
        Premium Collected This Month
      </p>
      <Bar
        className="mt-7"
        width={100}
        height={50}
        data={chartData}
      />
    </div>
  )
}

export default PremiumCollected
