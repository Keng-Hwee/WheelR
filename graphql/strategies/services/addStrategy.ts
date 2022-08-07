import { Context } from '../../context'
import { ApiError } from '../../utilities/typeDef'

export const addStrategy = async (
  { portfolioId, name, description, ticker }: any,
  context: Context
) => {
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
