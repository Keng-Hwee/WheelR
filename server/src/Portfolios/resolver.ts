import {
  MutationAddPortfolioArgs,
  Resolvers,
} from '../generated/graphql'
import { Context } from '../context'
import { Portfolio } from '@prisma/client'
import { PortfolioServices } from './Services/index'

export const resolvers: Resolvers = {
  Query: {
    portfolios: async (
      _: any,
      args: any,
      context: Context
    ): Promise<Portfolio[]> =>
      await PortfolioServices.GetPortfolios(context),
  },

  Mutation: {
    addPortfolio: async (
      _: any,
      { name }: MutationAddPortfolioArgs,
      context: Context
    ): Promise<Portfolio> =>
      await PortfolioServices.AddPortfolio({ name }, context),
  },
}
