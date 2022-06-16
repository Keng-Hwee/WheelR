import { Config } from 'apollo-server'
import { context } from './context'
import portfolio from './Portfolios'
import strategy from './Strategies'

export const config: Config = {
  typeDefs: [portfolio.typeDef, strategy.typeDef],
  resolvers: [portfolio.resolvers, strategy.resolvers],
  context: context,
}
