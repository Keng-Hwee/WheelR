import { gql } from 'apollo-server-micro'

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
    transaction: Float!
    premium: Float!
  }

  type Query {
    trades(strategyId: Int!): [Trade!]!
    trade(id: Int!): TradeResult!
  }

  union TradeResult = Trade | ApiError
`
