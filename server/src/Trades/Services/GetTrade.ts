import Trades from '..'
import { Context } from '../../context'
import { Trade } from '../../generated/graphql'

export const GetTrade = async (
  id: number,
  context: Context
): Promise<Trade> => {
  const prisma = context.prisma

  const trade = await prisma.trade.findUnique({
    where: {
      id,
    },
  })

  if (trade !== null) return trade
  else return undefined
}
