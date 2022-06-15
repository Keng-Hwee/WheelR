import { gql } from 'apollo-server'

export const typeDef = gql`
  type Strategy {
    id: Int!
    name: String!
    description: String
    ticker: String!
  }

  type Mutation {
    addStrategy(
      portfolioId: Int!
      name: String!
      description: String
      ticker: String!
    ): Strategy
  }
`
