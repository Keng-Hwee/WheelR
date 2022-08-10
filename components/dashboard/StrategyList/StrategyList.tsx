import SectionHeader from '../../common/SectionHeader'
import { Card, CardBody, CardHeader } from '../../common/Card'
import StrategyListMd from './StrategyListSM'
import StrategyListSm from './StrategyListXS'
import StrategyListSM from './StrategyListSM'
import StrategyListXS from './StrategyListXS'

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
      <div className="sm:hidden">
        <StrategyListXS></StrategyListXS>
      </div>
      <div className="hidden sm:block">
        <StrategyListSM></StrategyListSM>
      </div>
    </>
  )
}

export default StrategyList
