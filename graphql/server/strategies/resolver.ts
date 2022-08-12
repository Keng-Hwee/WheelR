import { Context } from '../../context'
import { strategyService } from './services'
import { tradeService } from '../trades/services'
import { Strategy } from '@prisma/client'

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
  Strategy: {
    trades: async (strategy: Strategy, _: any, context: Context) => {
      return await tradeService.getTrades(strategy.id, context)
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
