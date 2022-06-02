import { gql } from 'apollo-server'

export const typeDef = gql`
  type Portfolio {
    id: ID!
    name: String!
  }

  type Query {
    portfolios: [Portfolio!]!
  }
`
