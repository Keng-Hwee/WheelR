import { Context } from '../../../context'
import { ApiError } from '../../utilities/typeDef'

export const getTrade = async (id: number, context: Context) => {
  const prisma = context.prisma

  const trade = await prisma.trade.findUnique({
    where: {
      id,
    },
  })

  if (trade !== null) return trade
  else throw new ApiError(404, 'Trade not found')
}
