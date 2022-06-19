import { Context } from '../../context'
import { Trade } from '../../generated/graphql'

export const GetTrades = async (
  strategyId: number | null | undefined,
  context: Context
): Promise<Trade[]> => {
  const prisma = context.prisma

  if (strategyId != null) {
    return await prisma.trade.findMany({
      where: {
        strategyId,
      },
    })
  } else {
    return await prisma.trade.findMany()
  }
}
