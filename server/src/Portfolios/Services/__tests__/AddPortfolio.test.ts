import { AddPortfolio } from '../AddPortfolio'
import {
  MockContext,
  Context,
  createMockContext,
} from '../../../context'
import { ApiError } from '../../../Utilities/typeDef'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

test('should add new portfolio', async () => {
  const portfolio = {
    id: 1,
    name: 'new portfolio!!!',
  }

  mockCtx.prisma.portfolio.create.mockResolvedValue(portfolio)

  await expect(
    AddPortfolio({ name: portfolio.name }, ctx)
  ).resolves.toEqual(portfolio)
})

test('should fail if name is not provided', async () => {
  await expect(AddPortfolio({ name: '' }, ctx)).rejects.toEqual(
    new ApiError(400, 'Portfolio name cannot be empty.')
  )
})

test('should fail if portfolio with same name already exists', async () => {
  const portfolio = {
    id: 1,
    name: 'existing portfolio name',
  }

  mockCtx.prisma.portfolio.findFirst.mockResolvedValue(portfolio)

  await expect(
    AddPortfolio({ name: portfolio.name }, ctx)
  ).rejects.toEqual(
    new ApiError(
      400,
      'An existing portfolio with specified name already exist.'
    )
  )
})
