import { Context } from '../../../context'

export const getTrades = async (
  strategyId: number | null | undefined,
  context: Context
) => {
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
