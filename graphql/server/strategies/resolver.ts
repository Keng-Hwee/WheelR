import { Context } from '../../context'
import { strategyService } from './services'

export const resolvers = {
  Query: {
    strategy: async (_: any, { id }: any, context: Context) => {
      return await strategyService.getStrategy(id, context)
    },
    strategies: async (
      _: any,
      { portfolioId }: any,
      context: Context
    ) => {
      return await strategyService.getStrategies(portfolioId, context)
    },
  },
  Mutation: {
    addStrategy: async (
      _: any,
      addStrategyArgs: any,
      context: Context
    ) => {
      return await strategyService.addStrategy(
        { ...addStrategyArgs },
        context
      )
    },
  },
}
