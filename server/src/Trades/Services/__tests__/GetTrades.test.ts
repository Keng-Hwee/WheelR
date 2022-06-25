import { Trade } from '@prisma/client'
import {
  context,
  Context,
  createMockContext,
  MockContext,
} from '../../../context'
import { GetTrades } from '../GetTrades'

let mockCtx: MockContext
let ctx: Context

let tradesResultOutput: Trade[]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context

  tradesResultOutput = [
    {
      id: 1,
      ticker: 'AAA',
      quantity: 100,
      action: 'sell',
      type: 'puts',
      openDate: new Date(),
      openFee: 100,
      strikePrice: 77,
      expirationDate: null,
      closeDate: null,
      closePrice: null,
      closeFee: null,
      transaction: 0.12,
      strategyId: 1,
    },
  ]
})

test('Should get trades if strategyId not provided', async () => {
  mockCtx.prisma.trade.findMany.mockResolvedValue(tradesResultOutput)

  return expect(GetTrades(null, ctx)).resolves.toEqual(
    tradesResultOutput
  )
})

test('Should get trades if strategyId provided and exists', async () => {
  mockCtx.prisma.trade.findMany.mockResolvedValue(tradesResultOutput)

  return expect(GetTrades(1, ctx)).resolves.toEqual(
    tradesResultOutput
  )
})

test('Should get empty list if strategyId provided does not exist or trade with existing strategyId does not exist', async () => {
  mockCtx.prisma.trade.findMany.mockResolvedValue([])

  return expect(GetTrades(99, ctx)).resolves.toEqual([])
})
