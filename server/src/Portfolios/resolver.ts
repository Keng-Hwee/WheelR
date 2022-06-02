import { Portfolio } from '@prisma/client'
import { Resolvers } from '../generated/graphql'

// interface Testss {
//   portfolios: Portfolio
// }

export const resolvers: Resolvers = {
  Query: {
    portfolios: () => {
      return []
    },
  },
}
