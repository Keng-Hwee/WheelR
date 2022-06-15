// import { Portfolio, WheelGroup } from '@prisma/client'
// import {
//   MockContext,
//   Context,
//   createMockContext,
// } from '../../../context'
// import { MutationAddWheelGroupArgs } from '../../../generated/graphql'
// import { AddWheelGroup } from '../AddStrategy'

// let mockCtx: MockContext
// let ctx: Context
// let addWheelGroupArgs: MutationAddWheelGroupArgs

// beforeEach(() => {
//   mockCtx = createMockContext()
//   ctx = mockCtx as unknown as Context

//   addWheelGroupArgs = {
//     portfolioId: 1,
//     name: 'portfolio',
//   }
// })

// test('Should add wheelgroup to a portfolio', async () => {
//   const parentPortfolio: Portfolio = {
//     id: 1,
//     name: 'portfolio',
//   }

//   const wheelGroup: WheelGroup = {
//     id: 1,
//     portfolioId: 1,
//     name: 'new wheelGroup!',
//   }

//   mockCtx.prisma.portfolio.findUnique.mockResolvedValue(
//     parentPortfolio
//   )
//   mockCtx.prisma.wheelGroup.create.mockResolvedValue(wheelGroup)

//   await expect(
//     AddWheelGroup(addWheelGroupArgs, ctx)
//   ).resolves.toEqual(wheelGroup)
// })

// test('Should fail to add wheelgroup if portfolio does not exist', async () => {
//   mockCtx.prisma.portfolio.findUnique.mockResolvedValueOnce(null)

//   await expect(AddWheelGroup(addWheelGroupArgs, ctx)).rejects.toEqual(
//     new Error('Portfolio does not exist.')
//   )
// })
