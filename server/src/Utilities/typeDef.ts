import { gql } from 'apollo-server'

export class ApiError {
  code: string
  message: string

  constructor(code: string, message: string) {
    this.code = code
    this.message = message
  }
}

export const typeDef = gql`
  scalar Date

  type ApiError {
    code: String!
    message: String!
  }
`
