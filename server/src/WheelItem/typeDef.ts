import { gql } from 'apollo-server'

// type AddWheelItemArgs = {
//   wheelGroupId: number
//   name: string
//   description: string
//   contracts?: AddContractArgs[]
// }

// type AddContractArgs = {
//   ticker: string
//   strikePrice: number
//   expirationDate: Date
//   closed?: boolean
//   closedDate?: Date
//   closedPrice?: number
//   openAt: Date
//   premium: number
// }

export const typeDef = gql`
  type WheelItem {
    id: Int!
    name: String!
    description: String
    # add in contract
  }

  input AddWheelItemArg {
    wheelGroupId: number
    name: string
    description: string
    contracts: [AddWheelItemContractArg]
  }

  type AddWheelItemContractArg {
    ticker: string
    strikePrice: number
    expirationDate: Date
    closed?: boolean
    closedDate?: Date
    closedPrice?: number
    openAt: Date
    premium: number
    }

  type Query {
    wheelItems: [WheelItem!]!
  }

  type Mutation {
    addWheelItem(data: AddWheelItemArg): WheelItem
  }
`
