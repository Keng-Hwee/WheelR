import { Resolvers } from '../generated/graphql'
import { Context } from '../context'
import { Portfolio } from '@prisma/client'

// interface Testss {
//   portfolios: Portfolio
// }

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
}
