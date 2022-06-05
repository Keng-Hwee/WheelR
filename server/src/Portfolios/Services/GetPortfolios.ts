import { Portfolio } from '@prisma/client'
import { Context } from '../../context'

export const GetPortfolios = async (
  context: Context
): Promise<Portfolio[]> => {
  const prisma = context.prisma

  return await prisma.portfolio.findMany()
}
