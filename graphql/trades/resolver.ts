import { Context } from '../context'
import { tradeService } from './services'

export const resolvers = {
  Query: {
    trades: async (_: any, { strategyId }: any, context: Context) => {
      return await tradeService.getTrades(strategyId, context)
    },
    trade: async (_: any, { id }: any, context: Context) => {
      return await tradeService.getTrade(id, context)
    },
  },
}
