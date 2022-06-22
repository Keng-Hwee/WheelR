import { Context } from '../../context'
import {
  MutationAddStrategyArgs,
  Strategy,
  StrategyResult,
} from '../../generated/graphql'
import { ApiError } from '../../Utilities/typeDef'

export const AddStrategy = async (
  { portfolioId, name, description, ticker }: MutationAddStrategyArgs,
  context: Context
): Promise<StrategyResult> => {
  const prisma = context.prisma

  const existingPortfolio = await prisma.portfolio.findUnique({
    where: {
      id: portfolioId,
    },
  })

  if (existingPortfolio === undefined || existingPortfolio === null)
    throw new ApiError(404, 'Portfolio does not exist')

  if (name === '')
    throw new ApiError(400, 'Strategy name is required')

  if (ticker === '')
    throw new ApiError(400, 'Strategy ticker is required')

  return await prisma.strategy.create({
    data: {
      name,
      portfolioId,
      value: 0,
      description,
      ticker,
      stockAveragePrice: 0,
      stockQuantity: 0,
    },
  })
}
