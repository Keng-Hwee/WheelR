import { Context } from '../../context'

type AddWheelItemArgs = {
  wheelGroupId: number
  name: string
  description: string
  contracts?: AddContractArgs[]
}

type AddContractArgs = {
  ticker: string
  strikePrice: number
  expirationDate: Date
  closed?: boolean
  closedDate?: Date
  closedPrice?: number
  openAt: Date
  premium: number
}

// export const AddWheelItem = async (data: AddWheelItemArgs, context: Context) => Promise<WheelItem> {

// }
