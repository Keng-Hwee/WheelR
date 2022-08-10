interface Props {
  id: number
  name: string
  ticker: string
  value: string
  premium: string
}

const StrategyListXSCard = ({
  id,
  name,
  ticker,
  value,
  premium,
}: Props) => {
  return (
    <div className="rounded-lg bg-slate-50 p-4 drop-shadow-md mb-3">
      <div className="flex flex-row space-x-4 items-start justify-between">
        <p className="text-slate-800 font-medium text-lg">{name}</p>
        <p className="text-slate-800 font-semibold bg-slate-200 tracking-wider rounded-lg px-2 py-1 text-sm">
          {ticker}
        </p>
      </div>
      <div className="flex flex-row space-x-5">
        <p className="text-slate-500 tracking-wider font-semibold mt-4">
          Value:{' '}
          <span className="text-green-600 tracking-wider font-semibold">
            {value}
          </span>
        </p>
        <p className="text-slate-500 tracking-wider font-semibold mt-4">
          Premiums Collected:{' '}
          <span className="text-green-600 tracking-wider font-semibold">
            {premium}
          </span>
        </p>
      </div>
    </div>
  )
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

  return (
    <div className="mb-3">
      {strategyList.map((strategy) => {
        return (
          <StrategyListXSCard
            key={strategy.id}
            {...strategy}
          ></StrategyListXSCard>
        )
      })}
    </div>
  )
}

export default StrategyListXS
