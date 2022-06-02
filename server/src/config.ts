import { Config } from 'apollo-server'
import { context } from './context'
import portfolio from './Portfolios'

export const config: Config = {
  typeDefs: [portfolio.typeDef],
  resolvers: {
    Query: [],
  },
  context: context,
}
