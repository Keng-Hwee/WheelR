import { Context } from '../../context'
import { portfolioServices } from './services'
import { strategyService } from '../strategies/services'

export const resolvers = {
  Query: {
    portfolio: async (_: any, { id }: any, context: Context) => {
      return await portfolioServices.getPortfolio(id, context)
    },

    portfolios: async (_: any, args: any, context: Context) => {
      return await portfolioServices.getPortfolios(context)
    },
  },

  Portfolio: {
    strategies: async (
      portfolio: any,
      args: any,
      context: Context
    ) => {
      return await strategyService.getStrategies(
        portfolio.id,
        context
      )
    },
  },

  Mutation: {
    addPortfolio: async (_: any, name: string, context: Context) => {
      return await portfolioServices.addPortfolio({ name }, context)
    },
    updatePortfolio: async (
      _: any,
      { id, name }: any,
      context: Context
    ) => {
      return await portfolioServices.updatePortfolio(
        { id, name },
        context
      )
    },
  },
}
