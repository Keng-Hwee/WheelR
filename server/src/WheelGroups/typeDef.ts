import { gql } from 'apollo-server'

export const typeDef = gql`
  type WheelGroup {
    id: Int!
    name: String
  }

  type Mutation {
    addWheelGroup(portfolioId: Int!, name: String!): WheelGroup
  }
`
