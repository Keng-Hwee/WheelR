import { Context } from '../../../context'
import { ApiError } from '../../utilities/typeDef'

export const getStrategy = async (id: number, context: Context) => {
  const prisma = context.prisma

  const strategy = await prisma.strategy.findUnique({
    where: {
      id,
    },
  })

  if (strategy === null) throw new ApiError(404, 'Strategy not found')
  else return strategy
}
