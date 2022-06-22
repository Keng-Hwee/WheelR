import { gql } from 'apollo-server'

export const typeDef = gql`
  type Portfolio {
    id: Int!
    name: String!
    strategies: [Strategy]
  }

  type Query {
    portfolios: [Portfolio]
  }

  type Mutation {
    addPortfolio(name: String!): PortfolioResult!
    updatePortfolio(id: Int!, name: String!): PortfolioResult!
  }

  union PortfolioResult = Portfolio | ApiError
`
