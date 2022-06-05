import { Portfolio } from '@prisma/client'
import { Context } from '../../context'

export const UpdatePortfolio = async (
  { id, name }: { id: number; name: string },
  context: Context
): Promise<Portfolio> => {
  const prisma = context.prisma

  if (!name) throw new Error('Portfolio name cannot be empty.')

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
    throw new Error('Portfolio does not exist.')
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
    throw new Error(
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
