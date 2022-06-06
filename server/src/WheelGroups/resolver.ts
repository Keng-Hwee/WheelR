import { Context } from '../context'
import {
  MutationAddWheelGroupArgs,
  Resolvers,
  WheelGroup,
} from '../generated/graphql'
import { WheelGroupService } from './Services'

export const resolvers: Resolvers = {
  Mutation: {
    addWheelGroup: async (
      _: any,
      addWheelGroupArgs: MutationAddWheelGroupArgs,
      context: Context
    ): Promise<WheelGroup> =>
      await WheelGroupService.AddWheelGroup(
        { ...addWheelGroupArgs },
        context
      ),
  },
}
