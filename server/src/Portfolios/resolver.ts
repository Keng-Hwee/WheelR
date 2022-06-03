import {
  MutationAddPortfolioArgs,
  Resolvers,
} from '../generated/graphql'
import { Context } from '../context'
import { Portfolio } from '@prisma/client'

export const resolvers: Resolvers = {
  Query: {
    portfolios: async (
      _: any,
      __: any,
      { prisma }: Context
    ): Promise<Portfolio[]> => {
      return await prisma.portfolio.findMany()
    },
  },

  Mutation: {
    addPortfolio: async (
      _: any,
      { name }: MutationAddPortfolioArgs,
      { prisma }: Context
    ): Promise<Portfolio> => {
      const existingPortfolio = await prisma.portfolio.findFirst({
        where: {
          name,
        },
      })

      if (existingPortfolio)
        throw new Error(
          'An existing portfolio with specified name already exist.'
        )

      const newPortfolio = await prisma.portfolio.create({
        data: {
          name,
        },
      })

      return newPortfolio
    },
  },
}
