import { Line } from 'react-chartjs-2'
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js'

const PortfolioTrend = () => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  )

  var labels = [
    '2022-11-01',
    '2022-11-02',
    '2022-11-03',
    '2022-11-04',
    '2022-11-05',
    '2022-11-06',
    '2022-11-07',
    '2022-11-08',
    '2022-11-09',
    '2022-11-10',
    '2022-11-11',
    '2022-11-12',
    '2022-11-13',
    '2022-11-14',
    '2022-11-15',
    '2022-11-16',
    '2022-11-17',
    '2022-11-18',
    '2022-11-19',
    '2022-11-20',
    '2022-11-21',
    '2022-11-22',
    '2022-11-23',
    '2022-11-24',
    '2022-11-25',
    '2022-11-26',
    '2022-11-27',
    '2022-11-28',
    '2022-11-29',
    '2022-11-30',
  ]
  var chartData = {
    labels: labels,
    datasets: [
      {
        data: [
          100, 101, 200, 300, 210, 112, 400, 220, 332, 304, 121, 221,
          224, 229, 300, 333, 399, 400, 440, 450, 463, 411, 450, 470,
          500, 510, 522, 500, 511, 550,
        ],
      },
    ],
  }

  return (
    <div className="px-4 sm:px-8 py-5 drop-shadow-md rounded-lg bg-slate-50">
      <p className="font-extrabold text-5xl text-slate-700">
        $ 29,190.01
      </p>
      <p className="text-md text-slate-400 mt-3 font-semibold">
        Portfolio Value
      </p>
      <Line
        className="mt-7"
        width={100}
        height={50}
        data={chartData}
      />
    </div>
  )
}

export default PortfolioTrend
