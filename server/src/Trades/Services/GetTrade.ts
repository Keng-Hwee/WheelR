import { Context } from '../../context'
import { TradeResult } from '../../generated/graphql'
import { ApiError } from '../../Utilities/typeDef'

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
  else return new ApiError(404, 'Trade not found')
}
