import { Context } from '../../context'
import { tradeService } from './services'

export const resolvers = {
  Query: {
    trades: async (_: any, { strategyId }: any, context: Context) => {
      var test = await tradeService.getTrades(strategyId, context)
      console.log(test)
      return test
    },
    trade: async (_: any, { id }: any, context: Context) => {
      return await tradeService.getTrade(id, context)
    },
  },
}
