import { Context } from '../../context'
import {
  MutationAddWheelGroupArgs,
  WheelGroup,
} from '../../generated/graphql'

export const AddWheelGroup = async (
  { portfolioId, name }: MutationAddWheelGroupArgs,
  context: Context
): Promise<WheelGroup> => {
  const prisma = context.prisma

  const existingPortfolio = await prisma.portfolio.findUnique({
    where: {
      id: portfolioId,
    },
  })

  if (existingPortfolio === undefined || existingPortfolio === null)
    throw new Error('Portfolio does not exist.')

  return await prisma.wheelGroup.create({
    data: {
      name,
      portfolioId,
      value: 0,
    },
  })
}
