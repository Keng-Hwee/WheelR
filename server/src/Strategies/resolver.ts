import { Context } from '../context'
import {
  MutationAddStrategyArgs,
  QueryStrategiesArgs,
  QueryStrategyArgs,
  Resolvers,
  Strategy,
  StrategyResult,
} from '../generated/graphql'
import { StrategyService } from './Services'

export const resolvers: Resolvers = {
  Query: {
    strategy: async (
      _: any,
      { id }: QueryStrategyArgs,
      context: Context
    ): Promise<StrategyResult> => {
      return await StrategyService.GetStrategy(id, context)
    },
    strategies: async (
      _: any,
      { portfolioId }: QueryStrategiesArgs,
      context: Context
    ): Promise<Strategy[]> => {
      return await StrategyService.GetStrategies(portfolioId, context)
    },
  },
  Mutation: {
    addStrategy: async (
      _: any,
      addWheelGroupArgs: MutationAddStrategyArgs,
      context: Context
    ): Promise<Strategy> =>
      await StrategyService.AddStrategy(
        { ...addWheelGroupArgs },
        context
      ),
  },
}
