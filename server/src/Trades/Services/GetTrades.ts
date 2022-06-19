import { Context } from '../../context'
import { Trade } from '../../generated/graphql'

export const GetTrades = async (
  strategyId: number,
  context: Context
): Promise<Trade[]> => {
  const prisma = context.prisma

  return await prisma.trade.findMany({
    where: {
      strategyId,
    },
  })
}
