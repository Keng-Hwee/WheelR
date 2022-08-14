import {
  MinusCircleIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import AddTradeButton from './AddTradeButton'
import CloseTradeButton from './CloseTradeButton'
import DeleteTradeButton from './DeleteTradeButton'
import EditTradeButton from './EditTradeButton'

interface Props {
  id: number
  quantity: number
  action: string
  type: string
  openDate: string
  strikePrice: string
  expirationDate: string
  closeDate: string
  transaction: string
}

const TradeListSMCard = ({
  id,
  quantity,
  action,
  type,
  openDate,
  strikePrice,
  expirationDate,
  closeDate,
  transaction,
}: Props) => {
  return (
    <div className="bg-slate-50 rounded-lg drop-shadow-md p-3 mb-4">
      <div className="flex flex-row justify-between items-start mb-4">
        <div className="flex flex-col">
          <p className="text-slate-800 font-bold text-lg">
            {action} {type}
          </p>
          <p className="text-slate-500 text-sm">{openDate}</p>
        </div>

        <div className="flex flex-row">
          <EditTradeButton />
          <CloseTradeButton />
          <DeleteTradeButton />
        </div>
      </div>
      <div className="flex flex-row space-x-4 mt-5 justify-between">
        <p className="text-slate-400 font-medium">
          Qty: <span className="text-slate-800">{quantity}</span>
        </p>
        <p className="text-slate-400 font-medium">
          Price: <span className="text-slate-800">{strikePrice}</span>
        </p>
        <p className="text-slate-400 font-medium">
          Transaction:{' '}
          <span className="text-slate-800">{transaction}</span>
        </p>
      </div>
    </div>
  )
}

const TradeListSM = () => {
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
    <>
      <div>
        <AddTradeButton />
      </div>
      <div>
        {trades.map((trade) => {
          return (
            <TradeListSMCard
              key={trade.id}
              {...trade}
            ></TradeListSMCard>
          )
        })}
      </div>
    </>
  )
}

export default TradeListSM
