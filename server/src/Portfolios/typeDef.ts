import { gql } from 'apollo-server'

export const typeDef = gql`
  type Portfolio {
    id: ID!
    name: String!
  }

  extend type Query {
    portfolios: [Portfolio]
  }
`
