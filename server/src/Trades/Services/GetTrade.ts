import Trades from '..'
import { Context } from '../../context'
import { Trade, TradeResult } from '../../generated/graphql'

export const GetTrade = async (
  id: number,
  context: Context
): Promise<TradeResult> => {
  const prisma = context.prisma

  const trade = await prisma.trade.findUnique({
    where: {
      id,
    },
  })

  if (trade !== null) return trade
  else return { message: 'Trade not found!' }
}
