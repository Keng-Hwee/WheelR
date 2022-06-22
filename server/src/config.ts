import { Config } from 'apollo-server'
import { context } from './context'
import portfolio from './Portfolios'
import strategy from './Strategies'
import trade from './Trades'
import utilities from './Utilities'

export const config: Config = {
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
