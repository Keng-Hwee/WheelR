import {
  MutationAddPortfolioArgs,
  MutationUpdatePortfolioArgs,
  Portfolio,
  Resolvers,
  Strategy,
} from '../generated/graphql'
import { Context } from '../context'
import { PortfolioService } from './Services/index'
import { StrategyService } from '../Strategies/Services'
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

  Portfolio: {
    strategies: async (
      portfolio: Portfolio,
      args: any,
      context: Context
    ): Promise<Strategy[]> =>
      await StrategyService.GetStrategies(portfolio.id, context),
  },

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
