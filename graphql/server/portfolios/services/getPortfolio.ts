import { ApiError } from 'next/dist/server/api-utils'
import { Context } from '../../../context'
import { PortfolioResult } from '../../../generated/graphql-backend'

export const getPortfolio = async (
  id: number,
  context: Context
): Promise<PortfolioResult> => {
  const prisma = context.prisma

  const portfolio = await prisma.portfolio.findUnique({
    where: {
      id,
    },
  })

  if (portfolio === null) {
    const apiError = new ApiError(404, 'Portfolio not found')
    console.log(apiError)
    return {
      __typename: 'ApiError',
      ...apiError,
    }
  }

  return {
    __typename: 'Portfolio',
    ...portfolio,
  }
}
