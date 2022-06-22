import { Strategy } from '@prisma/client'
import {
  Context,
  createMockContext,
  MockContext,
} from '../../../context'
import { ApiError } from '../../../Utilities/typeDef'
import { GetStrategy } from '../GetStrategy'

let mockCtx: MockContext
let ctx: Context

let strategyOutput: Strategy

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context

  strategyOutput = {
    id: 1,
    portfolioId: 1,
    name: 'strategy name',
    description: 'strategy desc',
    ticker: 'AAA',
    value: 100,
    stockAveragePrice: 100,
    stockQuantity: 100,
  }
})

test('Should get strategy', async () => {
  mockCtx.prisma.strategy.findUnique.mockResolvedValue(strategyOutput)

  await expect(GetStrategy(1, ctx)).resolves.toEqual(strategyOutput)
})

test('Should fail if strategy id does not exist', async () => {
  mockCtx.prisma.strategy.findUnique.mockResolvedValue(null)

  await expect(GetStrategy(1, ctx)).rejects.toEqual(
    new ApiError(404, 'Strategy not found')
  )
})
