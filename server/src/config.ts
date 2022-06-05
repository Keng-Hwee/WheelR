import { Config } from 'apollo-server'
import { context } from './context'
import portfolio from './Portfolios'
import wheelGroup from './WheelGroups'

export const config: Config = {
  typeDefs: [portfolio.typeDef, wheelGroup.typeDef],
  resolvers: [portfolio.resolvers],
  context: context,
}
