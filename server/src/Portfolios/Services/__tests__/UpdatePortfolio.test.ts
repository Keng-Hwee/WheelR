import { UpdatePortfolio } from '../UpdatePortfolio'
import {
  MockContext,
  Context,
  createMockContext,
} from '../../../context'
import { Portfolio } from '@prisma/client'
import { ApiError } from '../../../Utilities/typeDef'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

test('should update portfolio', async () => {
  const oldPortfolio: Portfolio = {
    id: 1,
    name: 'OLD portfolio name!!!',
  }

  const updatedPortfolio = {
    id: 1,
    name: 'NEW portfolio name!!!',
  }

  mockCtx.prisma.portfolio.findFirst
    .mockResolvedValueOnce(oldPortfolio) // mock id exists in db
    .mockResolvedValueOnce(null) // mock existing portfolio with same name does not exist

  mockCtx.prisma.portfolio.update.mockResolvedValue(updatedPortfolio)

  await expect(
    UpdatePortfolio(
      { id: updatedPortfolio.id, name: updatedPortfolio.name },
      ctx
    )
  ).resolves.toEqual(updatedPortfolio)
})

test('should not update if no name provided', async () => {
  const updatedPortfolio = {
    id: 1,
    name: '',
  }

  await expect(
    UpdatePortfolio(
      { id: updatedPortfolio.id, name: updatedPortfolio.name },
      ctx
    )
  ).rejects.toEqual(
    new ApiError(400, 'Portfolio name cannot be empty.')
  )
})

test('should not update if id provided does not exist', async () => {
  const updatedPortfolio = {
    id: 777,
    name: 'new portfolio namez',
  }

  mockCtx.prisma.portfolio.findFirst.mockResolvedValueOnce(null) // mock id does not exists in db

  await expect(
    UpdatePortfolio(
      { id: updatedPortfolio.id, name: updatedPortfolio.name },
      ctx
    )
  ).rejects.toEqual(new ApiError(404, 'Portfolio does not exist.'))
})

test('should not update if updated name belongs to another portfolio', async () => {
  const oldPortfolio = {
    id: 1,
    name: 'unique name',
  }

  const updatedPortfolio = {
    id: 1,
    name: 'non-unique name',
  }

  mockCtx.prisma.portfolio.findFirst
    .mockResolvedValueOnce(oldPortfolio) // mock id exists in db
    .mockResolvedValueOnce(updatedPortfolio) // mock another portfolio with the same name

  await expect(
    UpdatePortfolio(
      { id: updatedPortfolio.id, name: updatedPortfolio.name },
      ctx
    )
  ).rejects.toEqual(
    new ApiError(
      400,
      'An existing portfolio with specified name already exist.'
    )
  )
})
