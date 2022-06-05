import { gql } from 'apollo-server'

export const typeDef = gql`
  type WheelGroup {
    id: Int!
    name: String
  }
`
