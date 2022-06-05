import { Portfolio } from '@prisma/client'
import { Context } from '../../context'

export const AddPortfolio = async (
  { name }: { name: string },
  context: Context
): Promise<Portfolio> => {
  const prisma = context.prisma

  if (!name) throw new Error('Portfolio name cannot be empty.')

  const existingPortfolio = await prisma.portfolio.findFirst({
    where: {
      name,
    },
  })

  if (existingPortfolio)
    throw new Error(
      'An existing portfolio with specified name already exist.'
    )

  const newPortfolio = await prisma.portfolio.create({
    data: {
      name,
    },
  })

  return newPortfolio
}
