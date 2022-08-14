import SectionHeader from '../../common/SectionHeader'
import StrategyListSM from './StrategyListSM'
import StrategyListXS from './StrategyListXS'
import { StrategyContextProvider } from '../../../store/strategyContext'

const StrategyList = () => {
  const strategyList = [
    {
      id: 1,
      name: 'Strategy 1',
      ticker: 'SPY',
      value: '12,222.13',
      premium: '210.77',
    },
    {
      id: 2,
      name: 'ARKK Wheeeeeeeels',
      ticker: 'ARKK',
      value: '4,522.13',
      premium: '89.92',
    },
    {
      id: 3,
      name: 'TSLA STRATS!',
      ticker: 'TSLA',
      value: '86,190.05',
      premium: '640.81',
    },
  ]

  return (
    <>
      <SectionHeader headerName="STRATEGIES" />
      <StrategyContextProvider>
        <div className="sm:hidden">
          <StrategyListXS></StrategyListXS>
        </div>
        <div className="hidden sm:block">
          <StrategyListSM></StrategyListSM>
        </div>
      </StrategyContextProvider>
    </>
  )
}

export default StrategyList
