import { Strategy, Portfolio } from '@prisma/client'
import {
  Context,
  createMockContext,
  MockContext,
} from '../../../context'
import { MutationAddStrategyArgs } from '../../../generated/graphql'
import { ApiError } from '../../../Utilities/typeDef'
import { AddStrategy } from '../AddStrategy'

let mockCtx: MockContext
let ctx: Context

let portfolio: Portfolio
let strategyOutput: Strategy

let strategyInput: MutationAddStrategyArgs

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context

  portfolio = {
    id: 1,
    name: 'new portfolio!!!',
  }

  strategyInput = {
    portfolioId: 1,
    name: 'new strategy name',
    description: 'new strategy desc',
    ticker: 'AAA',
  }

  strategyOutput = {
    id: 1,
    name: 'new strategy name',
    value: 0,
    portfolioId: 1,
    description: 'new strategy desc',
    ticker: 'AAA',
    stockAveragePrice: 0,
    stockQuantity: 0,
  }
})

test('Should add new strategy', async () => {
  mockCtx.prisma.portfolio.findUnique.mockResolvedValue(portfolio)
  mockCtx.prisma.strategy.create.mockResolvedValue(strategyOutput)

  await expect(AddStrategy(strategyInput, ctx)).resolves.toEqual(
    strategyOutput
  )
})

test('Should fail if portfolio does not exist', async () => {
  mockCtx.prisma.portfolio.findUnique.mockResolvedValue(null)

  await expect(AddStrategy(strategyInput, ctx)).rejects.toEqual(
    new ApiError(404, 'Portfolio does not exist')
  )
})

test('Should fail if name not provided', async () => {
  const strategyInput = {
    portfolioId: 1,
    name: '',
    description: 'new strategy desc',
    ticker: 'AAA',
  }

  mockCtx.prisma.portfolio.findUnique.mockResolvedValue(portfolio)

  await expect(AddStrategy(strategyInput, ctx)).rejects.toEqual(
    new ApiError(400, 'Strategy name is required')
  )
})

test('Should fail if ticker not provided', async () => {
  const strategyInput = {
    portfolioId: 1,
    name: 'new strategy name',
    description: 'new strategy desc',
    ticker: '',
  }

  mockCtx.prisma.portfolio.findUnique.mockResolvedValue(portfolio)

  await expect(AddStrategy(strategyInput, ctx)).rejects.toEqual(
    new ApiError(400, 'Strategy ticker is required')
  )
})
