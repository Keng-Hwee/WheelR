import { gql } from 'apollo-server-micro'

export class ApiError {
  statusCode: number
  message: string

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode
    this.message = message
  }
}

export const typeDef = gql`
  scalar Date

  type ApiError {
    statusCode: Int!
    message: String!
  }
`
