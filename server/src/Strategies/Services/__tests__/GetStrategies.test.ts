import { Strategy } from '@prisma/client'
import {
  Context,
  createMockContext,
  MockContext,
} from '../../../context'
import { GetStrategies } from '../GetStrategies'

let mockCtx: MockContext
let ctx: Context

let strategiesOutput: Strategy[]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context

  strategiesOutput = [
    {
      id: 1,
      portfolioId: 1,
      name: 'strategy name',
      description: 'strategy desc',
      ticker: 'AAA',
      value: 100,
      stockAveragePrice: 100,
      stockQuantity: 100,
    },
  ]
})

test('Should get strategies', async () => {
  mockCtx.prisma.strategy.findMany.mockResolvedValue(strategiesOutput)

  await expect(GetStrategies(1, ctx)).resolves.toEqual(
    strategiesOutput
  )
})
