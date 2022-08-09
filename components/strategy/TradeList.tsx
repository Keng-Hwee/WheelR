import { Card } from '../common/Card'
import {
  PencilIcon,
  TrashIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline'
import SectionHeader from '../common/SectionHeader'
const TradeList = () => {
  const trades = [
    {
      id: 1,
      quantity: 100,
      action: 'Buy', //Buy, Sell,
      type: 'Stock', //Stock, Call  Option, Put Option
      openDate: '20/06/2022',
      strikePrice: '14.50',
      expirationDate: '',
      closeDate: '20/06/2022',
      transaction: '-1,450',
    },
    {
      id: 2,
      quantity: 1,
      action: 'Sell', //Buy, Sell,
      type: 'Put Option', //Stock, Call  Option, Put Option
      openDate: '25/06/2022',
      strikePrice: '12.00',
      expirationDate: '25/07/2022',
      closeDate: '22/07/2022',
      transaction: '460.00',
    },
    {
      id: 3,
      quantity: 1,
      action: 'Sell', //Buy, Sell,
      type: 'Put Option', //Stock, Call  Option, Put Option
      openDate: '25/07/2022',
      strikePrice: '12.00',
      expirationDate: '25/08/2022',
      closeDate: '',
      transaction: '320.00',
    },
    {
      id: 4,
      quantity: 1,
      action: 'Sell', //Buy, Sell,
      type: 'Call Option', //Stock, Call  Option, Put Option
      openDate: '28/07/2022',
      strikePrice: '16.80',
      expirationDate: '28/08/2022',
      closeDate: '',
      transaction: '410.00',
    },
  ]

  return (
    <div>
      <SectionHeader headerName="TRADES" />
      <div className="drop-shadow-md rounded-lg bg-slate-50 p-4">
        <table className="w-full">
          <thead className="text-slate-400">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Activity
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Quantity
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Strike Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Open Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Expiry Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Transaction
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => {
              return (
                <tr
                  key={trade.id}
                  className="border-slate-100 border-t-2"
                >
                  <td className="p-3 text-sm font-bold text-slate-800">{`${trade.action} ${trade.type}`}</td>
                  <td className="p-3 text-sm font-bold text-slate-800 text-right">
                    {trade.quantity}
                  </td>
                  <td className="p-3 text-sm font-bold text-slate-800 text-right">
                    {trade.strikePrice}
                  </td>
                  <td className="p-3 text-sm font-bold text-slate-800 text-right">
                    {trade.openDate}
                  </td>
                  <td className="p-3 text-sm font-bold text-slate-800 text-right">
                    {trade.expirationDate}
                  </td>
                  <td className="p-3 text-sm font-bold text-slate-800 text-right">
                    {trade.transaction}
                  </td>
                  <td className="p-3 float-right flex flex-row">
                    <span className="bg-slate-100 rounded-lg bg-opacity-100 m-2">
                      <PencilIcon className="h-5 w-5 text-slate-500 m-2" />
                    </span>
                    <span className="bg-yellow-100 rounded-lg bg-opacity-70 m-2">
                      <MinusCircleIcon className="h-5 w-5 text-yellow-500 m-2" />
                    </span>
                    <span className="bg-red-100 rounded-lg bg-opacity-40 m-2">
                      <TrashIcon className="h-5 w-5 text-red-500 m-2" />
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TradeList
