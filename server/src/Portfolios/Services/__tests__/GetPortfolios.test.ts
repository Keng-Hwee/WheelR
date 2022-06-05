import {
  MockContext,
  Context,
  createMockContext,
} from '../../../context'
import { GetPortfolios } from '../GetPortfolios'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

test('should get all portfolios', async () => {
  const portfolios = [
    {
      id: 1,
      name: 'PORTFOLIO 1',
    },
    {
      id: 1,
      name: 'PORTFOLIO 2',
    },
  ]

  mockCtx.prisma.portfolio.findMany.mockResolvedValue(portfolios)

  await expect(GetPortfolios(ctx)).resolves.toEqual(portfolios)
})
