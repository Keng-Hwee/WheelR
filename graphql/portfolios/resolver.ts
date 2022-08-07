import { Context } from '../context'
import { portfolioServices } from './services'
import { strategyService } from '../strategies/services'

export const resolvers = {
  Query: {
    portfolios: async (_: any, args: any, context: Context) => {
      await portfolioServices.getPortfolios(context)
    },
  },

  Portfolio: {
    strategies: async (portfolio: any, args: any, context: Context) =>
      await strategyService.getStrategies(portfolio.id, context),
  },

  Mutation: {
    addPortfolio: async (_: any, name: string, context: Context) => {
      await portfolioServices.addPortfolio({ name }, context)
    },
    updatePortfolio: async (
      _: any,
      { id, name }: any,
      context: Context
    ) =>
      await portfolioServices.updatePortfolio({ id, name }, context),
  },
}
