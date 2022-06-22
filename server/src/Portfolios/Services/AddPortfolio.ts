import { Context } from '../../context'
import { PortfolioResult } from '../../generated/graphql'
import { ApiError } from '../../Utilities/typeDef'

export const AddPortfolio = async (
  { name }: { name: string },
  context: Context
): Promise<PortfolioResult> => {
  const prisma = context.prisma

  if (!name)
    throw new ApiError(400, 'Portfolio name cannot be empty.')

  const existingPortfolio = await prisma.portfolio.findFirst({
    where: {
      name,
    },
  })

  if (existingPortfolio)
    throw new ApiError(
      400,
      'An existing portfolio with specified name already exist.'
    )

  const newPortfolio = await prisma.portfolio.create({
    data: {
      name,
    },
  })

  return newPortfolio
}
