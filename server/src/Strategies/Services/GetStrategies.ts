import { Context } from '../../context'
import { Strategy } from '../../generated/graphql'

export const GetStrategies = async (
  portfolioId: number,
  context: Context
): Promise<Strategy[]> => {
  const prisma = context.prisma

  return await prisma.strategy.findMany({
    where: {
      portfolioId,
    },
  })
}
