import { gql } from 'apollo-server'

const typeDef = gql`
  type Trade {
    id: Int!
    ticker: String!
    quantity: Float!
    action: String!
    type: String!
    openDate: DateTime!
    openFee: Float!
    strikePrice: Float
    expirationDate: DateTime
    closeDate: DateTime
    closePrice: Float
    closeFee: Float
    transaction: Float
  }

  type Query {
    trades: [Trade]
  }
`
