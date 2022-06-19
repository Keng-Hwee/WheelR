import { gql } from 'apollo-server'

export const typeDef = gql`
  scalar Date

  type ApiError {
    message: String!
  }
`
