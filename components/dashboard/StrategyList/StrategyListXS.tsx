import Link from 'next/link'
import { useContext } from 'react'
import StrategyContext from '../../../store/strategyContext'

interface Props {
  id: number
  name: string
  ticker: string
  value: string
  premium: string
}

const StrategyListXS = () => {
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
      name: 'ARKK Wheeeeeeeelsssssssssssssss 2020_10_2',
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

  let strategy = strategyList[1]

  const strategyCtx = useContext(StrategyContext)

  const OnStrategySelect = (strategyId: number) => {
    strategyCtx.SetStrategyId(strategyId)
    const ticker = strategyList.filter(
      (strategy) => strategy.id === strategyId
    )[0].ticker
    strategyCtx.SetTicker(ticker)
    // navigate to strategy page with the selected strategy id
  }

  const StrategyListXSCard = ({
    id,
    name,
    ticker,
    value,
    premium,
  }: Props) => {
    return (
      <div
        onClick={() => OnStrategySelect(strategy.id)}
        className="rounded-lg bg-slate-50 p-3 drop-shadow-md mb-3"
      >
        <div className="flex flex-row space-x-4 items-start justify-between">
          <p className="text-slate-800 font-medium text-lg">{name}</p>
          <p className="text-slate-500 font-semibold bg-slate-200 bg-opacity-70 tracking-wider rounded-lg px-2 py-1 text-sm">
            {ticker}
          </p>
        </div>
        <div className="flex flex-row space-x-5 text-sm mt-4">
          <p className="text-slate-400 tracking-wider font-semibold mt-4">
            Value:{' '}
            <span className="text-green-600 tracking-wider font-semibold">
              {value}
            </span>
          </p>
          <p className="text-slate-400 tracking-wider font-semibold mt-4">
            Premiums Collected:{' '}
            <span className="text-green-600 tracking-wider font-semibold">
              {premium}
            </span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-3">
      {strategyList.map((strategy) => {
        return (
          <Link
            passHref
            key={strategy.id}
            href={{
              pathname: './strategy/[strategyId]',
              query: { strategyId: strategy.id },
            }}
          >
            <div>
              <StrategyListXSCard {...strategy}></StrategyListXSCard>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default StrategyListXS
