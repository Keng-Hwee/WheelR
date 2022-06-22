import { Context } from '../../context'
import { Strategy } from '../../generated/graphql'
import { ApiError } from '../../Utilities/typeDef'

export const GetStrategy = async (
  id: number,
  context: Context
): Promise<Strategy | ApiError> => {
  const prisma = context.prisma

  const strategy = await prisma.strategy.findUnique({
    where: {
      id,
    },
  })

  if (strategy === null)
    return new ApiError('404', 'Strategy not found')
  else return strategy
}
