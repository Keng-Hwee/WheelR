import { Trade } from '@prisma/client'
import {
  Context,
  createMockContext,
  MockContext,
} from '../../../context'
import { ApiError } from '../../../Utilities/typeDef'
import { GetTrade } from '../GetTrade'

let mockCtx: MockContext
let ctx: Context

let tradeResultOutput: Trade

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context

  tradeResultOutput = {
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
  }
})

test('Should get trade', async () => {
  mockCtx.prisma.trade.findUnique.mockResolvedValue(tradeResultOutput)

  await expect(GetTrade(1, ctx)).resolves.toEqual(tradeResultOutput)
})

test('Should not get trade if id does not exist', async () => {
  mockCtx.prisma.trade.findUnique.mockResolvedValue(null)

  await expect(GetTrade(0, ctx)).rejects.toEqual(
    new ApiError(404, 'Trade not found')
  )
})
