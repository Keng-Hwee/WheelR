import { Context } from '../../../context'

export const getStrategies = async (
  portfolioId: number,
  context: Context
) => {
  const prisma = context.prisma

  return await prisma.strategy.findMany({
    where: {
      portfolioId,
    },
  })
}
