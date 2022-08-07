import { Context } from '../../context'
import { ApiError } from '../../utilities/typeDef'

export const updatePortfolio = async (
  { id, name }: { id: number; name: string },
  context: Context
) => {
  const prisma = context.prisma

  if (!name)
    throw new ApiError(400, 'Portfolio name cannot be empty.')

  const existingPortfolioWithSameId =
    await prisma.portfolio.findFirst({
      where: {
        id: 1,
      },
    })

  if (
    existingPortfolioWithSameId === undefined ||
    existingPortfolioWithSameId === null
  ) {
    throw new ApiError(404, 'Portfolio does not exist.')
  }

  const existingPortfolioWithSameName =
    await prisma.portfolio.findFirst({
      select: {
        name: true,
      },
      where: {
        name,
      },
    })

  if (existingPortfolioWithSameName) {
    throw new ApiError(
      400,
      'An existing portfolio with specified name already exist.'
    )
  }

  const updatedPortfolio = await prisma.portfolio.update({
    where: {
      id,
    },
    data: {
      name,
    },
  })

  return updatedPortfolio
}
