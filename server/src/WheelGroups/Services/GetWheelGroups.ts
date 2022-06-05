import { Context } from '../../context'
import { WheelGroup } from '../../generated/graphql'

export const GetWheelGroups = async (
  portfolioId: number,
  context: Context
): Promise<WheelGroup[]> => {
  const prisma = context.prisma

  return await prisma.wheelGroup.findMany({
    where: {
      portfolioId,
    },
  })
}
