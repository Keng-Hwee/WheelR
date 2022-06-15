import {
  MutationAddPortfolioArgs,
  MutationUpdatePortfolioArgs,
  Portfolio,
  Resolvers,
} from '../generated/graphql'
import { Context } from '../context'
import { PortfolioService } from './Services/index'
//import { WheelGroupService } from '../WheelGroups/Services'

export const resolvers: Resolvers = {
  Query: {
    portfolios: async (
      _: any,
      args: any,
      context: Context
    ): Promise<Portfolio[]> =>
      await PortfolioService.GetPortfolios(context),
  },
  // Portfolio: {
  //   wheelGroups: async (
  //     portfolio: Portfolio,
  //     args: any,
  //     context: Context
  //   ): Promise<WheelGroup[]> =>
  //     await WheelGroupService.GetWheelGroups(portfolio.id, context),
  // },

  Mutation: {
    addPortfolio: async (
      _: any,
      { name }: MutationAddPortfolioArgs,
      context: Context
    ): Promise<Portfolio> =>
      await PortfolioService.AddPortfolio({ name }, context),

    updatePortfolio: async (
      _: any,
      { id, name }: MutationUpdatePortfolioArgs,
      context: Context
    ): Promise<Portfolio> =>
      await PortfolioService.UpdatePortfolio({ id, name }, context),
  },
}
