import { gql } from 'apollo-server-micro'

export const typeDef = gql`
  type Portfolio {
    id: Int!
    name: String!
    strategies: [Strategy]
  }

  type Query {
    portfolio(id: Int!): PortfolioResult
    portfolios: [PortfolioResult]
  }

  type Mutation {
    addPortfolio(name: String!): PortfolioResult!
    updatePortfolio(id: Int!, name: String!): PortfolioResult!
  }

  union PortfolioResult = Portfolio | ApiError
`
