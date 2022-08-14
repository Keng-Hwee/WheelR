import { ScriptableLineSegmentContext } from 'chart.js'
import { useState, createContext } from 'react'

interface Trades {
  id: number
  quantity: number
  action: 'SELL' | 'BUY'
  type: 'STOCK' | 'CALL OPTION' | 'PUT OPTION'
  openDate: Date
  strikePrice: number
  expirationDate: Date | null
  closeDate: Date | null
  transaction: number
}

export interface StrategyContextInterface {
  strategyId: number | null
  ticker: string | null
  trades: Trades[]

  SetStrategyId: Function
  SetTicker: Function
  SetTrades: Function
}

const strategyContext: StrategyContextInterface = {
  strategyId: null,
  ticker: null,
  trades: [],

  SetStrategyId: () => {},
  SetTicker: () => {},
  SetTrades: () => {},
}

const StrategyContext = createContext(strategyContext)

export const StrategyContextProvider = (props: any) => {
  const [trades, setTrades] = useState<Trades[]>([])
  const [strategyId, setStrategyId] = useState<number | null>(null)
  const [ticker, setTicker] = useState<string | null>(null)

  const SetTrades = (trades: any[]) => {
    setTrades(trades)
  }

  const SetStrategyId = (strategyId: number) => {
    setStrategyId(strategyId)
  }

  const SetTicker = (ticker: string) => {
    setTicker(ticker)
  }

  const context = {
    strategyId: strategyId,
    ticker: ticker,
    trades: trades,

    SetTrades: SetTrades,
    SetStrategyId: SetStrategyId,
    SetTicker: SetTicker,
  }

  return (
    <StrategyContext.Provider value={context}>
      {props.children}
    </StrategyContext.Provider>
  )
}

export default StrategyContext
