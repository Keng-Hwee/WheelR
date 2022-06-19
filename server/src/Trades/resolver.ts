import { Context } from '../context'
import {
  QueryTradeArgs,
  QueryTradesArgs,
  Trade,
  TradeResult,
} from '../generated/graphql'
import { TradeService } from './Services'

export const resolvers = {
  Query: {
    trades: async (
      _: any,
      { strategyId }: QueryTradesArgs,
      context: Context
    ): Promise<Trade[]> => {
      return await TradeService.GetTrades(strategyId, context)
    },
    trade: async (
      _: any,
      { id }: QueryTradeArgs,
      context: Context
    ): Promise<TradeResult> => {
      return await TradeService.GetTrade(id, context)
    },
  },
}
