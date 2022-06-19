import { gql } from 'apollo-server'

export const typeDef = gql`
  type Trade {
    id: Int!
    ticker: String!
    quantity: Float!
    action: String!
    type: String!
    openDate: Date!
    openFee: Float!
    strikePrice: Float
    expirationDate: Date
    closeDate: Date
    closePrice: Float
    closeFee: Float
    transaction: Float
  }

  type Query {
    trades: [Trade!]!
  }
`
