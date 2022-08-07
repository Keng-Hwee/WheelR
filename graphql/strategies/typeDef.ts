import { gql } from 'apollo-server-micro'

export const typeDef = gql`
  type Strategy {
    id: Int!
    name: String!
    description: String
    ticker: String!
    value: Int
    stockAveragePrice: Int
    stockQuantity: Int
  }

  type Query {
    strategies(portfolioId: Int!): [Strategy!]!
    strategy(id: Int!): StrategyResult!
  }

  type Mutation {
    addStrategy(
      portfolioId: Int!
      name: String!
      description: String
      ticker: String!
    ): StrategyResult!
  }

  union StrategyResult = Strategy | ApiError
`
