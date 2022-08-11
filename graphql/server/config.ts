import { Config } from 'apollo-server-micro'
import { context } from '../context'
import portfolio from './portfolios'
import strategy from './strategies'
import trade from './trades'
import utilities from './utilities'

export const apolloServerConfig: Config = {
  typeDefs: [
    portfolio.typeDef,
    strategy.typeDef,
    trade.typeDef,
    utilities.typeDef,
  ],
  resolvers: [
    portfolio.resolvers,
    strategy.resolvers,
    trade.resolvers,
    utilities.resolvers,
  ],
  context: context,
}
