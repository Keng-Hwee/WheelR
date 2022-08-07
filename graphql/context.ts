import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'

export interface Context {
  prisma: PrismaClient
}

const prisma = new PrismaClient()

export const context: Context = {
  prisma,
}

// mock context creation for testing
export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>
}

export const createMockContext = (): MockContext => {
  return {
    prisma: mockDeep<PrismaClient>(),
  }
}
