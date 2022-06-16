import { Context } from '../context'
import {
  MutationAddStrategyArgs,
  Resolvers,
  Strategy,
} from '../generated/graphql'
import { StrategyService } from './Services'

export const resolvers: Resolvers = {
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
