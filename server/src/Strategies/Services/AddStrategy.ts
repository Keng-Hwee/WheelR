import { Context } from '../../context'
import {
  MutationAddStrategyArgs,
  Strategy,
} from '../../generated/graphql'

export const AddStrategy = async (
  { portfolioId, name, description, ticker }: MutationAddStrategyArgs,
  context: Context
): Promise<Strategy> => {
  const prisma = context.prisma

  const existingPortfolio = await prisma.portfolio.findUnique({
    where: {
      id: portfolioId,
    },
  })

  if (existingPortfolio === undefined || existingPortfolio === null)
    throw new Error('Portfolio does not exist.')

  return await prisma.strategy.create({
    data: {
      name,
      portfolioId,
      value: 0,
      description,
      ticker,
    },
  })
}
