import { gql } from 'apollo-server'

export const typeDef = gql`
  type Portfolio {
    id: Int!
    name: String!
  }

  type Query {
    portfolios: [Portfolio]
  }

  type Mutation {
    addPortfolio(name: String!): Portfolio!
    updatePortfolio(id: Int!, name: String!): Portfolio!
  }
`
