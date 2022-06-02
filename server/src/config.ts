import { Config } from 'apollo-server'
import portfolio from './Portfolios'

export const config: Config = {
  typeDefs: [portfolio.typeDef],
  resolvers: {
    Query: [],
  },
}
