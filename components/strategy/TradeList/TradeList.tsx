import SectionHeader from '../../common/SectionHeader'
import TradeListMD from './TradeListMD'
import TradeListSM from './TradeListSm'
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
    <>
      <SectionHeader headerName="TRADES"></SectionHeader>
      <div className="md:hidden">
        <TradeListSM></TradeListSM>
      </div>
      <div className="hidden md:block">
        <TradeListMD></TradeListMD>
      </div>
    </>
  )
}

export default TradeList
