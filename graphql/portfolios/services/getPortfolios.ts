import { Portfolio } from '@prisma/client'
import { Context } from '../../context'

export const getPortfolios = async (context: Context) => {
  const prisma = context.prisma

  return await prisma.portfolio.findMany()
}
