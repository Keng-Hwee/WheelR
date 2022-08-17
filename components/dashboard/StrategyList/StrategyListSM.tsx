import SectionHeader from '../../common/SectionHeader'
import { Card, CardBody, CardHeader } from '../../common/Card'
import { useContext } from 'react'
import Link from 'next/link'
import StrategyContext from '../../../store/StrategyContext'

const StrategyListSM = () => {
  const strategyCtx = useContext(StrategyContext)

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

  const OnStrategySelect = (strategyId: number) => {
    strategyCtx.SetStrategyId(strategyId)
    const ticker = strategyList.filter(
      (strategy) => strategy.id === strategyId
    )[0].ticker
    strategyCtx.SetTicker(ticker)
    // navigate to strategy page with the selected strategy id
  }

  return (
    <div>
      <Card>
        <CardBody>
          <div>
            <table className="w-full">
              <thead className=" text-slate-400">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left w-72">
                    Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Ticker
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-right">
                    Value
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-right">
                    Premium Collected
                  </th>
                </tr>
              </thead>
              <tbody>
                {strategyList.map((strategy) => {
                  return (
                    <Link
                      key={strategy.id}
                      href={{
                        pathname: './strategy/[strategyId]',
                        query: { strategyId: strategy.id },
                      }}
                    >
                      <tr
                        onClick={() => OnStrategySelect(strategy.id)}
                      >
                        <td className="p-3 text-sm font-bold text-slate-800">
                          {strategy.name}
                        </td>
                        <td className="p-3 text-sm font-bold text-slate-800">
                          {strategy.ticker}
                        </td>
                        <td className="p-3 text-sm font-bold text-slate-800 text-right">
                          <span className="p-2 text-sm font-semibold tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40">
                            {strategy.value}
                          </span>
                        </td>
                        <td className="p-3 text-sm font-bold text-slate-800 text-right">
                          <span className="p-2 text-sm font-semibold tracking-wider bg-red-200 text-red-800 rounded-lg bg-opacity-40">
                            {strategy.premium}
                          </span>
                        </td>
                      </tr>
                    </Link>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default StrategyListSM
